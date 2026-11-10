# 신지영 포트폴리오 — 수정본

기존 React · TypeScript · Tailwind CSS · Vite 포트폴리오의 내용과 UI를 수정한 소스입니다.
기존의 청색·슬레이트 색상, 프로필 사진, 한국어·영어 전환, 밝은/어두운 테마를 유지합니다.

## 실행 및 검증

Node.js 22.12 이상과 npm을 사용합니다. Node.js 24 환경에서 검증했습니다.

```sh
npm ci
npm test
npm run build
npm run dev
```

- `npm run dev`: 로컬 개발 화면, http://127.0.0.1:3000
- `npm run build`: TypeScript 검사 후 `dist/` 생성
- `npm run preview`: 빌드 결과를 로컬 서버에서 확인
- `npm run typecheck`: TypeScript 검사만 실행
- `npm test`: 프로젝트 순서, 확정 날짜, 담당 업무, 다국어 대응, 삭제 대상 문구 재등장 검사

`package-lock.json`을 포함했습니다. 사용하지 않는 AI·서버 패키지와 충돌하는 직접 esbuild 의존성을 제거했습니다.
이 사이트는 정적 포트폴리오이며 API 키가 필요하지 않습니다.

## 내용 관리

- 프로젝트·교육·연락처: `src/data/portfolioData.ts`
- 프로젝트 카드: `src/components/FeaturedProjects.tsx`
- 상세보기: `src/components/ProjectDetailModal.tsx`
- 30초 요약: `src/components/RecruiterQuickView.tsx`
- 기본 사진: `public/assets/aistudio/`의 기존 사진

Meetup Log → BookCast → Spring Boot 실습 순서로 소개합니다. NEW ERA는 졸업 프로젝트 참여 사실만 간략하게 표시합니다.
Meetup Log의 2026년 수행 사실은 사용자가 확인했습니다. BookCast와 실습의 정확한 기간은 확인되지 않아 표시하지 않습니다.
교육 기간을 프로젝트 수행 기간으로 대신 사용하지 않습니다.

Meetup Log의 팀 기능은 개인 구현 성과와 구분합니다. 확인 전에는 세부 담당 로직, 성능 수치, 구현 코드를 추가하지 않습니다.
BookCast의 개인 업무는 공공데이터 도서 검색, 사용자 등업, 권한 관련 기능입니다.

## 관련 자료 및 사진

기존 Notion 포트폴리오와 프로젝트 기록 링크를 유지합니다. 이스트게임즈용 이력서 주소나 PDF는 제공되지 않아 생성하거나 추정하지 않았습니다.
이력서 PDF 다운로드·업로드 기능은 이 소스에 구현되어 있지 않습니다. 빈 PDF 경로로 연결되는 링크도 없습니다.

사진 관리 기능으로 바꾼 사진은 해당 브라우저에만 저장됩니다. 배포 사진은 `defaultPhotoUrl`과 해당 정적 파일을 수정해야 바뀝니다.

## 배포 결과물

`npm run build`의 출력 폴더는 `dist`입니다. 이 작업에서는 공개 사이트에 배포하지 않았습니다.
외부 GitHub·Notion의 접근 권한이나 문서 내용은 변경하지 않았습니다.

자세한 수정 근거와 검증 결과는 `CHANGELOG.ko.md`를 확인하세요.
