import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
let checked = 0;
for (const summary of ['SUMMARY.md', 'content/SUMMARY.md']) {
  const path = resolve(root, summary);
  const text = readFileSync(path, 'utf8');
  const links = [...text.matchAll(/\]\(([^)]+\.md)\)/g)].map(match => match[1]);
  if (!links.length) errors.push(`${summary}: пустое оглавление`);
  for (const link of links) {
    const target = resolve(dirname(path), decodeURIComponent(link));
    const label = relative(root, target);
    if (relative(root, target).startsWith('..') || !existsSync(target)) {
      errors.push(`${summary}: отсутствует ${link}`);
      continue;
    }
    const markdown = readFileSync(target, 'utf8').replace(/^\uFEFF/, '');
    const body = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
      .replace(/^#{1,6}\s+.*$/gm, '').trim();
    if (markdown.includes('\0')) errors.push(`${label}: неверная кодировка`);
    if (body.length < 40) errors.push(`${label}: нет содержимого статьи`);
    checked++;
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Проверено ${checked} ссылок оглавлений: файлы и содержимое на месте.`);
}
