const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const credential = execFileSync('git', ['credential', 'fill'], {
  input: 'protocol=https\nhost=github.com\n\n', encoding: 'utf8',
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env, GCM_INTERACTIVE: 'never', GIT_TERMINAL_PROMPT: '0' },
  timeout: 20000,
});
const fields = Object.fromEntries(credential.trim().split(/\r?\n/).map(line => {
  const eq = line.indexOf('='); return [line.slice(0, eq), line.slice(eq + 1)];
}));
if (!fields.password) throw Error('GitHub credential not available');
const headers = { Authorization: `Bearer ${fields.password}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'TalentLens-development' };
const base = 'https://api.github.com/repos/TalentLens-SisDib/api';
async function main() {
  const response = await fetch(`${base}/pulls?state=open&head=TalentLens-SisDib:feat/18&base=main`, { headers });
  if (!response.ok) throw Error(`GitHub pull lookup HTTP ${response.status}`);
  const prs = await response.json();
  if (process.argv[2] !== 'create') {
    console.log(JSON.stringify({ existing: prs.map(p => ({ number: p.number, url: p.html_url, title: p.title })) }));
    return;
  }
  if (prs.length) { console.log(JSON.stringify({ existing: true, url: prs[0].html_url })); return; }
  const body = fs.readFileSync(new URL('./api-pr-body.md', `file:///${__dirname.replace(/\\/g, '/')}/`), 'utf8');
  const created = await fetch(`${base}/pulls`, {
    method: 'POST', headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'feat(profiles): extract and persist candidate profiles from PDF CVs', head: 'feat/18', base: 'main', body }),
  });
  if (!created.ok) throw Error(`GitHub create PR HTTP ${created.status}: ${await created.text()}`);
  const pr = await created.json();
  console.log(JSON.stringify({ number: pr.number, url: pr.html_url, head: pr.head.ref, base: pr.base.ref }));
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
