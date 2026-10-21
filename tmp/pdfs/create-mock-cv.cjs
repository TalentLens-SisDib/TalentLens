const fs = require('node:fs');
const path = require('node:path');
const out = path.resolve('output/pdf/curriculo-mock-ptbr.pdf');
fs.mkdirSync(path.dirname(out), { recursive: true });
const content = [];
function text(value, x, y, size = 11, bold = false, color = '0.16 0.20 0.25') {
  const escaped = value.replace(/([\\()])/g, '\\$1');
  content.push(`BT /${bold ? 'F2' : 'F1'} ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm (${escaped}) Tj ET`);
}
function section(label, y) {
  text(label, 48, y, 11, true, '0.08 0.30 0.42');
  content.push(`0.78 0.84 0.87 RG 0.6 w 48 ${y - 8} m 547 ${y - 8} l S`);
}
text('MARINA COSTA ALMEIDA', 48, 780, 23, true);
text('Desenvolvedora Full Stack', 48, 755, 13, false, '0.08 0.30 0.42');
text('Curitiba, PR | marina.almeida@example.com', 48, 730, 10);
text('Perfil fictício para testes do TalentLens. Todos os dados são simulados.', 48, 707, 9);
section('RESUMO PROFISSIONAL', 668);
text('Desenvolvedora com experiência na criação de aplicações web e APIs REST.', 48, 641);
text('Atuação com TypeScript, React, Node.js e PostgreSQL, testes automatizados', 48, 624);
text('e integração contínua. Interesse em acessibilidade e qualidade de software.', 48, 607);
section('EXPERIÊNCIA PROFISSIONAL', 566);
text('Desenvolvedora Full Stack | Aurora Sistemas Fictícios', 48, 539, 11, true);
text('01/03/2023 - 30/09/2026', 48, 520, 10);
text('- Desenvolvimento de interfaces com React, TypeScript, HTML e CSS.', 48, 499);
text('- Implementação de APIs REST com Node.js e NestJS.', 48, 482);
text('- Modelagem de dados em PostgreSQL e testes com Vitest.', 48, 465);
text('Estagiária de Desenvolvimento | Horizonte Tecnologia Fictícia', 48, 435, 11, true);
text('01/08/2021 - 28/02/2023', 48, 416, 10);
text('- Manutenção de aplicações JavaScript e consultas SQL.', 48, 395);
text('- Versionamento com Git e colaboração em equipe Scrum.', 48, 378);
section('FORMAÇÃO ACADÊMICA', 337);
text('Bacharelado em Sistemas de Informação', 48, 310, 11, true);
text('Instituto Superior Fictício do Paraná', 48, 291);
text('Início: 01/02/2019 | Conclusão: 15/12/2022', 48, 272, 10);
section('COMPETÊNCIAS', 231);
text('TypeScript, JavaScript, React, Node.js, NestJS, HTML, CSS, PostgreSQL,', 48, 204);
text('SQL, Git, Docker, Vitest, APIs REST, integração contínua, Scrum.', 48, 187);
section('IDIOMAS', 146);
text('Português: nativo | Inglês: intermediário', 48, 119);
text('DOCUMENTO DE TESTE - SEM DADOS PESSOAIS REAIS', 48, 49, 8);
text('1 / 1', 521, 49, 8);
const stream = Buffer.from(content.join('\n'), 'latin1');
const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
  Buffer.concat([Buffer.from(`<< /Length ${stream.length} >>\nstream\n`), stream, Buffer.from('\nendstream')]),
];
const chunks = [Buffer.from('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n', 'latin1')];
const offsets = [0];
for (let i = 0; i < objects.length; i++) {
  offsets.push(chunks.reduce((n, b) => n + b.length, 0));
  chunks.push(Buffer.from(`${i + 1} 0 obj\n`), Buffer.isBuffer(objects[i]) ? objects[i] : Buffer.from(objects[i]), Buffer.from('\nendobj\n'));
}
const start = chunks.reduce((n, b) => n + b.length, 0);
chunks.push(Buffer.from(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map(n => `${String(n).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${start}\n%%EOF\n`));
fs.writeFileSync(out, Buffer.concat(chunks));
console.log(out);
