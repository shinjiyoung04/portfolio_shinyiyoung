import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { PROJECTS_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../src/data/portfolioData';

test('project order and dates match the applicant’s confirmed facts', () => {
  assert.deepEqual(PROJECTS_DATA.map(p => p.id), ['meetup-log', 'bookcast', 'springboot-practice']);
  assert.equal(PROJECTS_DATA[0].period, '2026');
  assert.equal(PROJECTS_DATA[1].period, undefined);
  assert.equal(PROJECTS_DATA[2].period, undefined);
  assert.equal(EDUCATION_DATA[1].period, '2025.12 ~ 2026.08');
  assert.equal(EDUCATION_DATA[2].period, '2025.06');
  assert.match(EDUCATION_DATA[0].period, /2027\.02$/);
});

test('BookCast keeps all three confirmed responsibilities without assigning team features', () => {
  const bookcast = PROJECTS_DATA[1];
  assert.deepEqual(bookcast.personalContributionKo, ['공공데이터를 활용한 도서 검색 서비스', '사용자 등업 기능', '사용자 권한 관련 기능']);
  assert.doesNotMatch(bookcast.personalContributionKo.join(' '), /시민투표|승인|반려|설계|JWT|RBAC/);
});

test('Meetup Log distinguishes project technology and team functionality from personal scope', () => {
  const meetup = PROJECTS_DATA[0];
  assert.equal(meetup.contributionLabelEn, 'Project participation');
  assert.match(meetup.teamScopeEn.join(' '), /FastAPI/);
  assert.doesNotMatch(meetup.personalContributionEn.join(' '), /implemented|designed|optimized|FastAPI|React/i);
});

test('Korean and English content remain aligned', () => {
  for (const project of PROJECTS_DATA) {
    assert.equal(project.personalContributionKo.length, project.personalContributionEn.length);
    assert.equal(project.teamScopeKo.length, project.teamScopeEn.length);
    assert.ok(project.purposeKo && project.purposeEn);
    for (const url of [project.githubUrl, project.notionUrl].filter(Boolean)) assert.equal(new URL(url!).protocol, 'https:');
  }
});

test('the written exam is separate from completed qualifications, without an invented date', () => {
  const written = CERTIFICATIONS_DATA.filter(cert => cert.isPartial);
  assert.equal(written.length, 1);
  assert.equal(written[0].date, undefined);
  assert.match(written[0].statusKo, /최종 자격증 미취득/);
});

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? sourceFiles(join(directory, entry.name)) : /\.(tsx?|css)$/.test(entry.name) ? [join(directory, entry.name)] : []);
}

test('unsubstantiated metrics and implementation claims are removed across all UI surfaces', () => {
  const source = sourceFiles('src').map(file => readFileSync(file, 'utf8')).join('\n');
  assert.doesNotMatch(source, /5,000|5000|768차원|768-dim|97\.83|F1.?1\.0|300건|300-case|밀리초|sub-second/i);
  assert.doesNotMatch(source, /RESTful API|REST API 설계|원천 차단|완벽히 통제|단독 구현|개인 기여 100%|strictly verified/i);
  assert.doesNotMatch(source, /opensurvey|오픈서베이/i);
  assert.doesNotMatch(source, /게임.{0,8}(개발 경험|플레이 경험)|game development experience/i);
});
