# 신지영(Shin JiYoung) - 신입 백엔드 개발자 포트폴리오 웹사이트

> **"데이터의 흐름을 이해하고, 안정적인 서비스로 연결하는 백엔드 개발자"**  
> Junior Backend Developer | Software Engineer Portfolio

본 웹사이트는 대한민국 중부대학교 정보보안공학과 졸업 예정자인 **신지영(Shin JiYoung)**의 기술 역량, 대표 프로젝트, 문제 해결 사례, 공인 자격을 채용 담당자 및 기술 면접관에게 30초 내에 직관적으로 전달할 수 있도록 제작된 프로덕션 레벨 포트폴리오 웹사이트입니다.

---

## 📌 주요 특징

1. **30초 채용담당자 핵심 요약 (Recruiter Quick Scan)**:
   - 상단 헤더의 `30초 요약` 버튼을 통해 지원 직무, 핵심 스택, 대표 프로젝트 및 개인 기여 범위를 한눈에 파악 가능.
2. **명확한 기여도 분리 (Personal Scope Transparency)**:
   - 팀 전체의 개발 범위와 지원자가 직접 구현한 기능(서버 측 RBAC, 768차원 임베딩 사전 캐싱, CRUD 계층형 아키텍처 등)을 철저히 구분.
3. **진실성 기반 이력 관리 (Factual Integrity)**:
   - 정보처리기사 필기 합격(실기 미합격, 최종 자격 미취득) 사실을 투명하게 공개.
   - 존재하지 않는 경력이나 자격, 임의의 수치 미포함.
4. **다국어 및 테마 지원**:
   - 한국어 / 영어 원클릭 실시간 전환.
   - 라이트 모드 (Apple / Modern SaaS 미니멀 스타일) 및 다크 모드 지원.
5. **이력서 관리 시스템**:
   - 범용 표준 이력서 및 오픈서베이 맞춤형 이력서 분리 지원.
   - 브라우저 인쇄/PDF 저장 기능 및 커스텀 PDF 파일 업로드/교체 지원.
6. **실제 프로필 사진 교체 기능**:
   - 지원자의 실제 증명사진 탑재 및 필요 시 사용자 파일 업로드/플레이스홀더 전환 지원.

---

## 🛠️ 기술 스택 (Tech Stack)

### Frontend
- **Framework**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 (`@custom-variant dark`)
- **Icons**: Lucide React
- **Build Tool**: Vite 8

### Backend Stack Represented in Portfolio
- **Languages**: Java 17+, Python 3.10+
- **Frameworks**: Spring Boot 3, FastAPI
- **Database / ORM**: MySQL, Spring Data JPA, MyBatis
- **AI / Data**: Sentence Transformers, scikit-learn, Cosine Similarity
- **Collaboration**: Git, GitHub

---

## 🚀 로컬 실행 방법 (Local Development)

```bash
# 1. 의존성 패키지 설치
npm install

# 2. 로컬 개발 서버 구동 (포트 3000)
npm run dev

# 3. 브라우저 접속
http://localhost:3000
```

---

## 📦 프로덕션 빌드 (Production Build)

```bash
# TypeScript 문법 검사 및 Vite 프로덕션 번들링
npm run build

# 빌드 결과물 미리보기
npm run preview
```

---

## ☁️ Vercel 배포 가이드 (Deployment to Vercel)

본 프로젝트는 Vercel, Netlify, Cloudflare Pages 등 정적 SPA 호스팅 플랫폼에 즉시 배포할 수 있습니다.

### 방법 1: Vercel CLI 배포
```bash
# Vercel CLI 전역 설치 (미설치 시)
npm i -g vercel

# 배포 실행
vercel
```

### 방법 2: GitHub 연동 자동 배포
1. 본 프로젝트 저장소를 GitHub에 푸시합니다.
2. [Vercel 대시보드](https://vercel.com)에서 `Add New Project`를 클릭합니다.
3. GitHub 저장소를 선택합니다.
4. **Build and Output Settings**가 다음과 같이 자동으로 감지되는지 확인합니다:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. `Deploy` 버튼을 누르면 약 1분 내에 전 세계 글로벌 CDN에 HTTPS로 배포됩니다.

---

## 📁 사진 및 이력서 파일 교체 방법

### 1. 프로필 증명사진 영구 교체
- 저장소 경로: `/public/assets/aistudio/KakaoTalk_20260903_103622711_02_3-_989012e7.jpg`
- 위 파일을 새로운 프로필 사진으로 동일한 파일명으로 교체하거나, `/src/data/portfolioData.ts`의 `defaultPhotoUrl` 경로를 원하는 이미지 파일명으로 변경합니다.
- 웹사이트 상에서도 Hero 우측의 `[사진 관리]` 버튼을 눌러 로컬 기기에서 실시간으로 업로드 및 미리보기가 가능합니다.

### 2. 이력서 PDF 파일 영구 등록
- 범용 이력서: `/public/assets/resume/Shin_JiYoung_Resume_General.pdf`
- 오픈서베이 이력서: `/public/assets/resume/Shin_JiYoung_Resume_OpenSurvey.pdf`
- 해당 경로에 PDF를 배치하면 이력서 섹션에서 즉시 원본 다운로드가 활성화됩니다.
- PDF가 없는 경우에도 웹사이트의 **[웹 인터랙티브 이력서 보기]**를 통해 브라우저 인쇄(Ctrl+P 또는 인쇄 버튼)를 눌러 고해상도 PDF로 바로 저장할 수 있습니다.

---

## 📬 연락처 (Contact)

- **이메일**: shinspace04@gmail.com
- **GitHub**: https://github.com/shinjiyoung04
- **학력**: 중부대학교 정보보안공학과 (2027년 2월 졸업 예정)
- **오픈서베이 이력서 (Notion)**: https://app.notion.com/p/opensurvey-_-4140162c669f80ee8491e20732913dbf?source=copy_link
