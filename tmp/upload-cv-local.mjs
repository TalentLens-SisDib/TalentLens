import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
const require = createRequire(new URL('../api/package.json', import.meta.url));
require('dotenv').config({ path: new URL('../api/.env', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1') });
const { PrismaService } = await import('../api/dist/prisma/prisma.service.js');
const base = 'http://localhost:3000';
const login = await fetch(base + '/login', {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'recruiter@talentlens.dev', password: 'recruiter123' }),
});
if (!login.ok) throw Error('Login HTTP ' + login.status);
const { accessToken } = await login.json();
const form = new FormData();
form.append('cv', new Blob([await fs.readFile(new URL('../output/pdf/curriculo-mock-ptbr.pdf', import.meta.url))], { type: 'application/pdf' }), 'curriculo-mock-ptbr.pdf');
const upload = await fetch(base + '/profiles/upload-cv', {
  method: 'POST', headers: { Authorization: 'Bearer ' + accessToken }, body: form,
  signal: AbortSignal.timeout(90000),
});
const profile = await upload.json();
if (upload.status !== 201) throw Error('Upload HTTP ' + upload.status + ': ' + JSON.stringify(profile));
const read = await fetch(base + '/profiles/' + profile.id, { headers: { Authorization: 'Bearer ' + accessToken } });
const persisted = await read.json();
const prisma = new PrismaService();
try {
  const saved = await prisma.applicantProfile.findUniqueOrThrow({
    where: { id: profile.id }, include: { skills: true, educationalBackground: true },
  });
  if (read.status !== 200 || saved.name !== profile.name || saved.skills.length !== profile.skills.length || saved.educationalBackground.length !== profile.educationalBackground.length) throw Error('Persistence mismatch');
  const result = { uploadStatus: upload.status, readStatus: read.status, location: upload.headers.get('location'), databaseConfirmed: true, profile: persisted };
  await fs.writeFile(new URL('../output/cv-upload-result.json', import.meta.url), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally {
  await prisma.$disconnect();
}
