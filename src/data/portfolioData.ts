import {
  ProjectData,
  SkillItem,
  ProblemCase,
  CertificationItem,
  EducationItem
} from '../types/portfolio';

export const PERSONAL_INFO = {
  nameKo: '신지영',
  nameEn: 'Shin JiYoung',
  roleKo: '신입 백엔드 개발자 / 소프트웨어 엔지니어',
  roleEn: 'Junior Backend Developer | Software Engineer',
  headlineKo: '데이터의 흐름을 이해하고, 안정적인 서비스로 연결하는 백엔드 개발자',
  headlineEn: 'Backend Developer connecting data flows to reliable, robust services',
  introKo:
    'Java와 Spring Boot 기반 웹 개발을 학습하고, Python 기반 자연어 처리 및 AI 데이터 활용 프로젝트를 수행했습니다. 접근제어, 데이터 처리, 서비스 구현 경험을 바탕으로 사용자에게 필요한 기능을 만드는 개발자로 성장하고 있습니다.',
  introEn:
    'Experienced in Java and Spring Boot web application development, along with practical project experience in Python NLP and AI-driven data utilization. Building solid engineering foundations across access control, data processing, and resilient service architecture.',
  email: 'shinspace04@gmail.com',
  githubUrl: 'https://github.com/shinjiyoung04',
  notionUrl: 'https://app.notion.com/p/Shin-JiYoung-3aa0162c669f83f8a1f78187882b4b99',
  opensurveyNotionUrl: 'https://app.notion.com/p/opensurvey-_-4140162c669f80ee8491e20732913dbf?source=copy_link',
  defaultPhotoUrl: '/assets/aistudio/KakaoTalk_20260903_103622711_02_3-_989012e7.jpg',
  resumeLinks: {
    generalPdf: '/assets/resume/Shin_JiYoung_Resume_General.pdf',
    opensurveyPdf: '/assets/resume/Shin_JiYoung_Resume_OpenSurvey.pdf',
  }
};

export const ABOUT_PILLARS = [
  {
    id: 'backend',
    number: '01',
    titleKo: 'Backend Development',
    titleEn: 'Backend Development',
    subtitleKo: '서버 아키텍처 및 접근 제어 구현',
    subtitleEn: 'Server Architecture & Access Control',
    descriptionKo:
      'Java와 Spring Boot를 기반으로 레이어드 아키텍처(Controller-Service-Repository)를 구축하고, RESTful API 설계 및 데이터베이스 조작을 수행했습니다. 화면단 제어를 넘어 서버 측에서 사용자 역할(일반 관리자/최고 관리자)에 따른 데이터 조회 범위를 격리하는 접근 통제 로직을 직접 구현했습니다.',
    descriptionEn:
      'Built layered architectures (Controller-Service-Repository) and RESTful APIs using Java and Spring Boot. Implemented server-side data isolation and role-based access control (General Admin vs Super Admin) to secure endpoints beyond client-side controls.',
    keywords: ['Java', 'Spring Boot', 'REST API', 'RBAC', 'Data Isolation']
  },
  {
    id: 'data_ai',
    number: '02',
    titleKo: 'Data & AI Utilization',
    titleEn: 'Data & AI Utilization',
    subtitleKo: '자연어 분석과 의미 유사도 엔지니어링',
    subtitleEn: 'NLP Preference Extraction & Semantic Similarity',
    descriptionKo:
      'Python과 FastAPI 환경에서 대화 텍스트로부터 사용자 선호(영화, 장르, 배우 등)를 추출하고 긍정/부정 표현을 구조화했습니다. 5,000건의 영화 메타데이터에 대한 768차원 문장 임베딩(Sentence Transformers)을 사전에 생성·캐싱하여 런타임 코사인 유사도 추론 지연을 안정화했습니다.',
    descriptionEn:
      'Extracted user preferences (movies, genres, actors, OTT) from dialogue and structured positive/negative sentiments using Python and FastAPI. Pre-computed and cached 768-dimensional sentence embeddings for 5,000 items to minimize real-time cosine similarity inference latency.',
    keywords: ['Python', 'FastAPI', 'Sentence Transformers', 'Cosine Similarity', 'Embedding Cache']
  },
  {
    id: 'collaboration',
    number: '03',
    titleKo: 'Collaboration & Problem Solving',
    titleEn: 'Collaboration & Problem Solving',
    subtitleKo: '신뢰 기반의 코드 통합과 실행 검증',
    subtitleEn: 'Reliable Code Integration & Pragmatic Resolution',
    descriptionKo:
      '협업 중 발생한 코드 취합 난관과 작업 브랜치 불일치를 회피하지 않고, 팀원과 대면 소통을 통해 작업 범위를 조율했습니다. 물리적 매체(USB)로 코드를 인계받아 직접 라인 단위 대조 병합과 빌드 실행 검증을 완료하는 책임감 있는 문제 해결 태도를 갖추었습니다.',
    descriptionEn:
      'Faced integration bottlenecks proactively through clear in-person communication and scope coordination. Resolved team merge obstacles by receiving code via physical media, manually merging changes, and validating end-to-end execution to meet delivery deadlines.',
    keywords: ['Code Integration', 'Pragmatic Resolution', 'Execution Validation', 'Team Communication']
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Backend - Direct
  {
    name: 'Java',
    category: 'backend',
    proficiency: 'direct',
    descriptionKo: '객체지향 프로그래밍, 컬렉션 프레임워크 및 웹 애플리케이션 비즈니스 로직 작성',
    descriptionEn: 'OOP principles, Collections Framework, and web backend business logic implementation',
    projects: ['BookCast', 'Spring Boot Practice']
  },
  {
    name: 'Spring Boot',
    category: 'backend',
    proficiency: 'direct',
    descriptionKo: '계층형 아키텍처(Controller-Service-Repository), 의존성 주입(DI), REST API 구축',
    descriptionEn: 'Layered architecture (Controller-Service-Repository), DI, RESTful API design',
    projects: ['BookCast', 'Spring Boot Practice']
  },
  {
    name: 'Python',
    category: 'backend',
    proficiency: 'direct',
    descriptionKo: '데이터 전처리 파이프라인, 자연어 키워드 추출 및 알고리즘 구현',
    descriptionEn: 'Data preprocessing pipelines, NLP preference extraction, and algorithmic scripts',
    projects: ['Meetup Log']
  },
  {
    name: 'FastAPI',
    category: 'backend',
    proficiency: 'direct',
    descriptionKo: '비동기 REST API 구축, Pydantic 모델 기반 요청/응답 유효성 검증',
    descriptionEn: 'Async REST API development, Pydantic request/response schema validation',
    projects: ['Meetup Log']
  },
  // Backend - Knowledge
  {
    name: 'JPA (Hibernate)',
    category: 'backend',
    proficiency: 'knowledge',
    descriptionKo: '엔티티 매핑, JpaRepository CRUD 및 Pageable 기반 페이징 처리 실습',
    descriptionEn: 'Entity mapping, JpaRepository CRUD, and Pageable pagination practical study',
    projects: ['Spring Boot Practice']
  },
  {
    name: 'MyBatis',
    category: 'backend',
    proficiency: 'knowledge',
    descriptionKo: 'XML Mapper 기반 SQL 작성, DTO 결과 매핑 및 동적 쿼리 실습',
    descriptionEn: 'XML Mapper SQL binding, DTO result mapping, and dynamic query practice',
    projects: ['Spring Boot Practice']
  },

  // Database
  {
    name: 'MySQL',
    category: 'database',
    proficiency: 'direct',
    descriptionKo: '관계형 데이터 모델 설계, 외래키 제약조건 및 테이블 조인 쿼리 활용',
    descriptionEn: 'Relational data schema design, foreign key constraints, and JOIN queries',
    projects: ['BookCast', 'Spring Boot Practice']
  },
  {
    name: 'SQL',
    category: 'database',
    proficiency: 'direct',
    descriptionKo: '데이터 조회 범위 제한 쿼리, 조건절 집계 및 데이터 무결성 검증 쿼리 작성',
    descriptionEn: 'Conditional filtering, aggregate clauses, and integrity verification queries',
    projects: ['BookCast', 'Spring Boot Practice']
  },

  // AI & Data
  {
    name: 'Sentence Transformers',
    category: 'ai_data',
    proficiency: 'direct',
    descriptionKo: '사전학습 언어 모델을 활용한 768차원 문장 벡터 임베딩 생성 및 캐싱 파이프라인',
    descriptionEn: 'Generating and caching 768-dim sentence vector embeddings using pre-trained models',
    projects: ['Meetup Log']
  },
  {
    name: 'scikit-learn',
    category: 'ai_data',
    proficiency: 'direct',
    descriptionKo: '코사인 유사도(cosine_similarity) 계산 및 분류 성능 지표(Accuracy, F1-Score) 평가',
    descriptionEn: 'Cosine similarity calculation and classification evaluation (Accuracy, F1-Score)',
    projects: ['Meetup Log']
  },
  {
    name: '자연어 처리 (NLP)',
    category: 'ai_data',
    proficiency: 'direct',
    descriptionKo: '대화문 텍스트 토큰화, 엔티티 인식 및 긍정·부정 선호도 분리 파싱',
    descriptionEn: 'Dialogue text tokenization, entity recognition, and sentiment-preference separation',
    projects: ['Meetup Log']
  },
  {
    name: '코사인 유사도 계산',
    category: 'ai_data',
    proficiency: 'direct',
    descriptionKo: '고차원 벡터 간 의미적 거리 산출을 통한 사용자 맞춤 콘텐츠 랭킹 알고리즘',
    descriptionEn: 'Content ranking algorithm via semantic distance calculation between high-dim vectors',
    projects: ['Meetup Log']
  },

  // Frontend
  {
    name: 'React',
    category: 'frontend',
    proficiency: 'knowledge',
    descriptionKo: '컴포넌트 생명주기, State/Props 관리 및 REST API 비동기 데이터 바인딩 이해',
    descriptionEn: 'Component lifecycle, State/Props management, and REST API data binding comprehension',
    projects: ['Personal Portfolio']
  },
  {
    name: 'JavaScript / HTML / CSS',
    category: 'frontend',
    proficiency: 'knowledge',
    descriptionKo: '웹 표준, DOM 조작 및 백엔드 연동을 위한 클라이언트 폼 데이터 처리 이해',
    descriptionEn: 'Web standards, DOM manipulation, and client form handling for backend connectivity',
    projects: ['Spring Boot Practice']
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    proficiency: 'direct',
    descriptionKo: '버전 관리, 브랜치 전략 기초 및 변경 이력 추적',
    descriptionEn: 'Version control, branch management basics, and commit history tracking',
    projects: ['BookCast', 'Meetup Log', 'Spring Boot Practice']
  },
  {
    name: 'GitHub',
    category: 'tools',
    proficiency: 'direct',
    descriptionKo: '원격 저장소 협업, 이슈 및 README 기술 문서화 관리',
    descriptionEn: 'Remote repository collaboration, issue tracking, and technical documentation',
    projects: ['BookCast', 'Meetup Log', 'Spring Boot Practice']
  }
];

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'bookcast',
    title: 'BookCast',
    taglineKo: 'AI 기반 시민 참여형 도서 수급 플랫폼',
    taglineEn: 'AI-Powered Citizen-Participatory Library Book Procurement Platform',
    period: '2024',
    teamKo: '팀 프로젝트 (4인)',
    teamEn: 'Team Project (4 members)',
    category: 'Backend / Security',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'MyBatis'],
    githubUrl: 'https://github.com/shinjiyoung04/SD-1-bookcast-projectAPI',
    notionUrl: 'https://app.notion.com/p/3cf0162c669f81bdb73ff36547aa859d',
    purposeKo:
      '시민들이 원하는 희망 도서를 신청하고, 지자체 및 도서관 관리자가 수급 타당성을 검토하여 예산 내에서 효율적으로 도서를 구매·비치할 수 있도록 돕는 웹 플랫폼입니다.',
    purposeEn:
      'A web platform enabling citizens to request desired books while assisting municipal library administrators in reviewing demand feasibility and managing purchases within allocated budgets.',
    architectureKo: [
      'Spring Boot 기반 RESTful API 서버',
      'Layered Architecture (Controller - Service - Repository / Mapper)',
      'MySQL 관계형 데이터베이스 및 정규화된 도서/신청/도서관 스키마',
      '역할 기반 접근제어(RBAC) 및 서버 측 파라미터 유효성 검증'
    ],
    architectureEn: [
      'Spring Boot RESTful API Server',
      'Layered Architecture (Controller - Service - Repository / Mapper)',
      'MySQL Relational Database with normalized schema for books, requests, and libraries',
      'Role-Based Access Control (RBAC) and server-side request parameter validation'
    ],
    teamScopeKo: [
      '시민용 도서 검색 및 희망 도서 신청 화면/API 개발',
      '도서 정보 크롤링 및 메타데이터 정규화',
      '도서관 관리자 대시보드 및 승인/반려 워크플로우'
    ],
    teamScopeEn: [
      'Citizen-facing book search and request form UI/API',
      'Book metadata crawling and normalization pipeline',
      'Library administrator dashboard and review/approval workflow'
    ],
    personalContributionKo: [
      'Spring Boot 백엔드 관리자 권한 체계 설계 및 구현',
      '최고 관리자(SUPER_ADMIN)와 일반 도서관 관리자(LIB_ADMIN)의 역할 분기 로직 구현',
      '일반 관리자는 본인이 담당하는 도서관의 신청 내역만 조회하도록 서버 측 데이터 조회 범위 제한 (Server-Side Isolation)',
      '클라이언트 조작에 의한 타 도서관 데이터 무단 열람 방지를 위한 파라미터 강제 바인딩'
    ],
    personalContributionEn: [
      'Designed and developed Spring Boot backend administrator permission system',
      'Implemented role differentiation logic between Super Admin and Local Library Admin',
      'Restricted data query scope at the server layer so local admins only access their assigned library records',
      'Prevented unauthorized cross-library data access by enforcing server-side session parameter binding against tampered client requests'
    ],
    keyFeaturesKo: [
      {
        title: '역할 기반 접근제어 (RBAC)',
        desc: '인증된 사용자 세션 또는 토큰의 권한(Role)을 판별하여 관리자 권한별 API 접근 경로 분기'
      },
      {
        title: '서버 측 데이터 조회 범위 제한',
        desc: '화면단 필터링에 의존하지 않고, 쿼리 생성 시 관리자의 library_id를 강제 바인딩하여 타 도서관 신청 내역 노출 차단'
      },
      {
        title: '도서 신청 승인/반려 상태 처리',
        desc: '도서 신청 상태 전이(접수 -> 검토 -> 승인/반려 -> 구매완료)에 따른 트랜잭션 및 유효성 검증'
      }
    ],
    keyFeaturesEn: [
      {
        title: 'Role-Based Access Control (RBAC)',
        desc: 'API endpoint route differentiation based on user role evaluated from authenticated session/token'
      },
      {
        title: 'Server-Side Data Scope Enforcement',
        desc: 'Enforced query condition binding of the admin’s assigned library_id at the backend to eliminate cross-library data leakage'
      },
      {
        title: 'Request Status Workflow Processing',
        desc: 'Transaction management and validation for book request status lifecycle (Received -> Review -> Approved/Rejected -> Purchased)'
      }
    ],
    technicalProblemKo: {
      problem:
        '단순히 클라이언트 화면에서 관리자 소속 도서관만 보여주도록 필터링할 경우, 악의적인 사용자가 브라우저 개발자 도구나 API 호출 도구로 library_id 파라미터를 임의로 변경하여 타 도서관의 예산 및 시민 신청 내역을 열람할 수 있는 보안 취약점이 존재했습니다.',
      action:
        '화면상의 접근 제한과 별개로 백엔드 서비스 레이어에서 요청자의 인증 주체(Principal)로부터 소속 도서관 ID를 직접 주입받도록 구조를 변경했습니다. 요청 파라미터로 넘어오는 도서관 ID가 인증 정보와 불일치하거나 최고 관리자 권한이 아닌 경우 요청을 즉시 거부하고, SQL 쿼리 조건절에 소속 library_id를 강제 적용했습니다.',
      result:
        '클라이언트 요청 위변조를 통한 타 기관 데이터 탈취 가능성을 원천 차단하고, 백엔드 중심의 안정적인 다중 테넌트 데이터 격리 원칙을 확립했습니다.'
    },
    technicalProblemEn: {
      problem:
        'Relying solely on frontend filtering for assigned libraries created a critical vulnerability: malicious users could manipulate the library_id parameter in API calls to inspect budget and book request details from other libraries.',
      action:
        'Refactored the backend service layer to inject the authenticated user’s assigned library ID directly from the validated session/principal. If the client-provided parameter conflicted with the authenticated principal or lacked Super Admin privileges, the request was rejected immediately, and the assigned library_id was forcibly bound to the SQL WHERE clause.',
      result:
        'Completely prevented unauthorized cross-institution data exposure regardless of client-side manipulations, establishing server-authoritative multi-tenant isolation.'
    },
    limitationsAndFutureKo: [
      '현재 하드코딩된 권한 검증 로직을 향후 Spring Security의 `@PreAuthorize` 및 `@Secured` 어노테이션 기반 Method Security로 고도화 필요',
      '도서관 지점 수가 증가할 경우를 대비하여 관리자 권한 및 도서관 매핑 정보에 대한 Redis 캐싱 계층 도입 고려'
    ],
    limitationsAndFutureEn: [
      'Upgrade manual authorization checks to Spring Security method-level annotations (`@PreAuthorize`) for standard security filter chaining',
      'Introduce Redis caching for admin permission lookups as the number of library branches scales'
    ],
    codeSnippet: {
      language: 'java',
      filename: 'BookRequestService.java',
      code: `// 서버 측 데이터 격리: 인증된 관리자의 소속 도서관 ID 강제 적용
public Page<BookRequestDto> getRequestsForAdmin(AdminPrincipal admin, Pageable pageable) {
    if (admin.hasRole(Role.SUPER_ADMIN)) {
        // 최고 관리자는 전체 도서관의 신청 내역 조회 가능
        return bookRequestRepository.findAll(pageable).map(BookRequestDto::from);
    }
    
    // 일반 관리자는 본인 소속 도서관 데이터만 강제 바인딩 (클라이언트 변조 원천 차단)
    Long assignedLibraryId = admin.getAssignedLibraryId();
    if (assignedLibraryId == null) {
        throw new UnauthorizedException("관리자 소속 도서관 정보가 유효하지 않습니다.");
    }
    return bookRequestRepository.findByLibraryId(assignedLibraryId, pageable)
        .map(BookRequestDto::from);
}`,
      explanationKo: '클라이언트가 전달하는 쿼리 파라미터 대신, 세션에서 검증된 `assignedLibraryId`를 강제 쿼리 조건으로 주입하여 데이터 격리를 수행한 실제 구현 패턴입니다.',
      explanationEn: 'Actual implementation pattern binding the verified `assignedLibraryId` from the session into queries rather than trusting client-provided query parameters.'
    }
  },
  {
    id: 'meetup-log',
    title: 'Meetup Log ML Service',
    taglineKo: '자연어 기반 AI 영화 추천 서비스',
    taglineEn: 'Natural Language-Based AI Movie Recommendation Service',
    period: '2024',
    teamKo: '팀 프로젝트 (3인)',
    teamEn: 'Team Project (3 members)',
    category: 'AI / NLP Service',
    techStack: ['Python', 'FastAPI', 'Sentence Transformers', 'scikit-learn', 'NumPy'],
    githubUrl: 'https://github.com/shinjiyoung04/modify_test-meetup',
    notionUrl: 'https://app.notion.com/p/3bc0162c669f800485f9ce65ddce6264',
    purposeKo:
      '사용자가 일상적인 대화나 채팅으로 자신의 영화 취향을 표현하면, 복잡한 검색 필터를 직접 누르지 않아도 자연어 분석을 통해 꼭 맞는 영화를 추천해 주는 인공지능 기반 추천 백엔드 서비스입니다.',
    purposeEn:
      'An AI-driven recommendation backend service that parses user conversational dialogue into structured preferences and recommends optimal movies using semantic embedding similarity.',
    architectureKo: [
      'FastAPI 기반 고성능 비동기 ML 서빙 엔드포인트',
      '한국어 대화 텍스트 전처리 및 키워드/선호 엔티티 추출 모듈',
      'Sentence Transformers 사전학습 모델 기반 768차원 문장 임베딩 파이프라인',
      '영화 메타데이터 임베딩 사전 캐시(Pre-computed Embeddings) 및 코사인 유사도 랭킹 엔진'
    ],
    architectureEn: [
      'FastAPI async ML serving endpoints',
      'Korean dialogue pre-processing & preference entity extraction module',
      '768-dimensional sentence embedding pipeline via Sentence Transformers',
      'Pre-computed 5,000-movie embedding cache and cosine similarity ranking engine'
    ],
    teamScopeKo: [
      '영화 메타데이터(5,000건) 수집 및 정제',
      '프론트엔드 채팅 인터페이스 구현',
      '서비스 배포 환경 구성'
    ],
    teamScopeEn: [
      '5,000-movie metadata collection and normalization',
      'Frontend chat user interface integration',
      'Service deployment infrastructure setup'
    ],
    personalContributionKo: [
      '대화 텍스트에서 영화·장르·배우·OTT 등 핵심 취향 엔티티 추출 로직 작성',
      '사용자의 긍정/부정 표현을 분리하여 선호 정보 구조화 (Positive / Negative Preference Partitioning)',
      '문장 임베딩과 코사인 유사도(Cosine Similarity)를 결합한 의미적 유사도 랭킹 로직 구현',
      '영화 5,000건에 대한 768차원 임베딩을 사전에 생성하고 메모리에 캐싱하여 실시간 추천 응답 시간 단축'
    ],
    personalContributionEn: [
      'Developed core preference entity extraction logic for movies, genres, actors, and OTT services from dialogue',
      'Structured preferences by parsing positive vs negative sentiment cues independently',
      'Implemented semantic similarity ranking combining sentence embeddings and cosine similarity',
      'Pre-computed 768-dimensional embeddings for 5,000 movies into an in-memory cache to ensure low latency during live requests'
    ],
    keyFeaturesKo: [
      {
        title: '대화 기반 선호도 구조화',
        desc: '"SF는 좋은데 너무 잔인한 건 싫어"와 같은 복합 발화에서 긍정/부정 키워드를 분리 파싱'
      },
      {
        title: '768차원 사전 임베딩 캐싱',
        desc: '5,000건의 영화 줄거리/키워드를 미리 벡터화하여 런타임 추론 시 재계산 오버헤드 제거'
      },
      {
        title: '코사인 유사도 기반 의미 랭킹',
        desc: '단순 키워드 매칭을 넘어 사용자의 문맥적 뉘앙스와 가장 가까운 영화 상위 N개 도출'
      }
    ],
    keyFeaturesEn: [
      {
        title: 'Conversational Preference Structuring',
        desc: 'Parsed complex user statements into separate positive and negative preferences'
      },
      {
        title: '768-Dim Pre-Computed Embedding Cache',
        desc: 'Pre-vectorized 5,000 movie descriptions to eliminate real-time model re-computation overhead'
      },
      {
        title: 'Cosine Similarity Semantic Ranking',
        desc: 'Ranked top-N matching movies using vector distance rather than simple keyword matching'
      }
    ],
    technicalProblemKo: {
      problem:
        '사용자 추천 요청이 들어올 때마다 5,000건에 달하는 영화 전체 메타데이터를 실시간으로 임베딩 모델에 통과시키면 CPU 리소스가 급증하고 응답 지연이 수 초 이상 발생하여 원활한 대화형 서비스가 불가능했습니다.',
      action:
        '영화 카탈로그 메타데이터의 임베딩 생성을 서버 구동 시점 또는 배치 작업으로 분리했습니다. 5,000건 영화의 768차원 벡터 행렬을 사전 생성(Pre-computing)하여 직렬화된 캐시 파일로 저장하고, 서비스 구동 시 메모리에 한 번만 로드하여 재사용하도록 아키텍처를 개선했습니다. 런타임에는 사용자의 입력 문장 1개만 임베딩한 뒤 NumPy 기반 행렬 연산으로 코사인 유사도를 즉각 계산하도록 최적화했습니다.',
      result:
        '추천 연산 응답 시간을 실시간 상호작용이 가능한 밀리초 단위로 대폭 단축했습니다. 내부 테스트셋(300건 대화) 평가 결과 대화 분류 정확도 100%, F1 1.0, 취향 대상 유형 추출 정확도 97.83%를 기록했습니다.'
    },
    technicalProblemEn: {
      problem:
        'Re-vectorizing all 5,000 movie records on every incoming recommendation request caused severe CPU saturation and multi-second latency, preventing a responsive chat experience.',
      action:
        'Decoupled movie catalog embedding generation into an offline batch workflow. Pre-computed 768-dimensional vectors for all 5,000 items and loaded them as an in-memory matrix upon server startup. During live requests, only the user input sentence was embedded, followed by rapid vectorized cosine similarity computation.',
      result:
        'Reduced inference turnaround to responsive sub-second latencies suitable for interactive dialogue. Achieved 100% dialogue classification accuracy (F1 1.0) on a 300-case internal dataset and 97.83% preference entity extraction accuracy.'
    },
    metrics: [
      {
        labelKo: '대화 분류 정확도',
        labelEn: 'Dialogue Classification Accuracy',
        value: '100%',
        noteKo: '내부 300건 대화 데이터셋 기준',
        noteEn: 'Based on internal 300-case dialogue dataset'
      },
      {
        labelKo: '분류 F1-Score',
        labelEn: 'Classification F1-Score',
        value: '1.0',
        noteKo: '내부 데이터셋 기준',
        noteEn: 'Based on internal dataset'
      },
      {
        labelKo: '취향 대상 유형 추출 정확도',
        labelEn: 'Preference Entity Extraction',
        value: '97.83%',
        noteKo: '영화/장르/배우/OTT 엔티티 대상',
        noteEn: 'Targeting movie/genre/actor/OTT entities'
      },
      {
        labelKo: '사전 캐싱 영화 데이터',
        labelEn: 'Pre-computed Embeddings',
        value: '5,000건',
        noteKo: '768차원 고밀도 벡터 캐싱',
        noteEn: '768-dimensional dense vector matrix'
      }
    ],
    limitationsAndFutureKo: [
      '영화 카탈로그가 수십만 건으로 확대될 경우 메모리 단일 행렬 연산의 한계가 예상되므로 FAISS 또는 Milvus, pgvector 등의 전용 벡터 데이터베이스 도입 필요',
      '다국어 및 복합 감정 표현 처리를 위한 경량화된 한국어 특화 LLM 프롬프트 파이프라인 연계 검토'
    ],
    limitationsAndFutureEn: [
      'Transition to dedicated vector databases (FAISS, Milvus, or pgvector) when catalog scales beyond tens of thousands',
      'Explore lightweight Korean-specialized LLM prompt chaining for complex multi-intent dialogues'
    ],
    codeSnippet: {
      language: 'python',
      filename: 'recommendation_service.py',
      code: `# 사전 생성된 768차원 영화 임베딩 행렬을 활용한 실시간 코사인 유사도 연산
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

class MovieRecommender:
    def __init__(self, model, cached_movie_embeddings, movie_metadata):
        self.model = model
        self.cached_embeddings = cached_movie_embeddings # shape: (5000, 768)
        self.movie_metadata = movie_metadata

    def recommend(self, user_preference_text: str, top_k: int = 5):
        # 1. 사용자 입력 텍스트만 실시간 임베딩 변환
        user_vector = self.model.encode([user_preference_text]) # shape: (1, 768)
        
        # 2. 캐시된 행렬과의 빠른 코사인 유사도 벡터 연산
        similarities = cosine_similarity(user_vector, self.cached_embeddings)[0]
        
        # 3. 상위 유사도 인덱스 추출
        top_indices = np.argsort(similarities)[::-1][:top_k]
        
        results = []
        for idx in top_indices:
            movie = self.movie_metadata[idx].copy()
            movie["similarity_score"] = float(similarities[idx])
            results.append(movie)
        return results`,
      explanationKo: '5,000건의 영화 벡터를 메모리에 상주시키고, 사용자 입력 문장 1건에 대해서만 실시간 임베딩을 수행해 코사인 유사도를 고속 산출하는 최적화 코드입니다.',
      explanationEn: 'Optimization snippet maintaining 5,000 pre-computed movie vectors in memory and encoding only the single incoming user query for instant vector similarity evaluation.'
    }
  },
  {
    id: 'springboot-practice',
    title: 'Spring Boot Development Practice',
    taglineKo: 'Spring Boot, JPA 및 MyBatis를 이용한 웹 개발 실습',
    taglineEn: 'Hands-on Web Development Practice with Spring Boot, JPA, and MyBatis',
    period: '2024',
    teamKo: '개인 실습 (교육과정)',
    teamEn: 'Individual Practice (Training Curriculum)',
    category: 'Backend Practice',
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MyBatis', 'MySQL'],
    githubUrl: 'https://github.com/shinjiyoung04',
    isPractice: true,
    purposeKo:
      'SD부트캠프평생교육원 교육 과정에서 Java와 Spring Boot 기반 엔터프라이즈 웹 백엔드의 핵심 기술 요소를 체계적으로 학습하고, ORM(JPA)과 SQL 매퍼(MyBatis)의 데이터 처리 방식을 비교 실습한 프로젝트입니다.',
    purposeEn:
      'A practical study project conducted during the SD Bootcamp curriculum to master enterprise web backend fundamentals with Java and Spring Boot, comparing ORM (JPA) and SQL Mapper (MyBatis) paradigms.',
    architectureKo: [
      'Spring Boot 기반 표준 3티어 계층 아키텍처 (Controller - Service - Repository)',
      'Entity 및 DTO 간 책임 분리와 ModelMapper/수동 변환 패턴',
      'Spring Data JPA를 이용한 도메인 주도 객체 지향 데이터 조작',
      'MyBatis XML Mapper를 통한 복합 SQL 쿼리 제어'
    ],
    architectureEn: [
      'Standard 3-tier Spring Boot architecture (Controller - Service - Repository)',
      'Strict separation of concerns between Entity and DTO layers',
      'Domain-driven object manipulation via Spring Data JPA',
      'Granular complex SQL query control through MyBatis XML Mappers'
    ],
    teamScopeKo: [
      '교육 과정 커리큘럼 기반의 개인 실습 과제 수행'
    ],
    teamScopeEn: [
      'Individual practical assignments executed within training curriculum'
    ],
    personalContributionKo: [
      'JPA 기반 게시판 핵심 CRUD(등록, 단건 조회, 목록 조회, 수정, 삭제) 직접 구현',
      'Spring Data Pageable을 활용한 서버 사이드 페이징 및 다중 컬럼 정렬 기능 구현',
      'MyBatis 기반 회원가입 및 단건/목록 회원 조회 기능 구현 및 XML Mapper 작성',
      '영속성 컨텍스트를 활용하는 JPA와 직접 작성한 SQL을 제어하는 MyBatis의 장단점 비교 정리'
    ],
    personalContributionEn: [
      'Independently implemented board CRUD operations using Spring Data JPA',
      'Configured server-side pagination and multi-column sorting using Pageable',
      'Implemented member registration and lookups using MyBatis with custom XML SQL mappers',
      'Analyzed operational differences between JPA persistence context and MyBatis direct SQL mapping'
    ],
    keyFeaturesKo: [
      {
        title: 'JPA 기반 게시판 CRUD',
        desc: 'JpaRepository를 활용한 엔티티 생명주기 관리 및 트랜잭션 단위의 비즈니스 로직 작성'
      },
      {
        title: 'Pageable 서버 사이드 페이징',
        desc: '대용량 데이터 조회 부하를 방지하기 위한 페이지네이션 및 Sort 객체 동적 적용'
      },
      {
        title: 'MyBatis XML SQL 매핑',
        desc: '동적 SQL `<if>`, `<where>` 태그 활용 및 복합 조인 쿼리 결과의 DTO 매핑'
      }
    ],
    keyFeaturesEn: [
      {
        title: 'JPA Board CRUD Operations',
        desc: 'Entity lifecycle management and transactional business logic via JpaRepository'
      },
      {
        title: 'Server-Side Pageable Pagination',
        desc: 'Dynamic pagination and Sort criteria handling to prevent unconstrained query loads'
      },
      {
        title: 'MyBatis XML SQL Mapping',
        desc: 'Dynamic SQL syntax (`<if>`, `<where>`) and complex JOIN result binding to DTOs'
      }
    ],
    technicalProblemKo: {
      problem:
        '단순 학습 예제에서는 엔티티(Entity) 객체를 컨트롤러의 요청 파라미터나 뷰 응답으로 직접 노출하는 경우가 많아, 엔티티의 내부 필드 변경 시 API 규격이 깨지거나 불필요한 데이터가 외부에 노출되는 문제가 있었습니다.',
      action:
        '계층 간 데이터 전송 책임을 엄격히 분리하기 위해 RequestDTO와 ResponseDTO를 정의했습니다. Controller에서는 DTO만을 수신하여 유효성을 검증하고, Service 레이어에서만 DTO와 Entity 간의 변환을 수행하도록 구조화하여 도메인 모델의 캡슐화를 보장했습니다.',
      result:
        '엔티티의 변경이 외부 인터페이스에 미치는 영향을 차단하고, 백엔드 유지보수성과 보안성을 높인 정석적인 계층형 아키텍처 패턴을 체득했습니다.'
    },
    technicalProblemEn: {
      problem:
        'In naive practice exercises, directly exposing domain Entity objects to Controller request/response tiers creates brittle APIs and exposes sensitive internal fields.',
      action:
        'Enforced strict separation of concerns by introducing distinct RequestDTO and ResponseDTO classes. Controllers handle only validated DTOs, confining Entity transformations exclusively within the Service tier.',
      result:
        'Protected domain models from external API coupling and internalized enterprise layered architecture best practices.'
    },
    limitationsAndFutureKo: [
      '학습 목적의 실습 프로젝트로, 실제 운영 환경에서의 복합 트랜잭션 격리 수준 및 동시성 제어 실습 보완 필요',
      'Querydsl을 도입하여 동적 쿼리 작성 시 컴파일 타임 타입 검정 능력 강화 계획'
    ],
    limitationsAndFutureEn: [
      'As a foundational study project, further practice is planned for concurrency isolation levels under production loads',
      'Plan to introduce Querydsl to enhance compile-time type safety during dynamic query construction'
    ]
  }
];

export const PROBLEM_SOLVING_CASES: ProblemCase[] = [
  {
    id: 'case-1',
    titleKo: 'BookCast 백엔드 관리자 접근제어 및 데이터 격리',
    titleEn: 'BookCast Backend Admin Access Control & Data Isolation',
    projectKo: 'BookCast',
    projectEn: 'BookCast',
    tags: ['Spring Boot', 'Data Isolation', 'RBAC', 'Security'],
    contextKo:
      '지자체와 여러 도서관이 공동으로 사용하는 도서 수급 플랫폼에서 일반 도서관 관리자와 최고 관리자의 권한 구분이 필요했습니다.',
    contextEn:
      'In a municipal multi-library book procurement platform, robust permission boundaries were required between local library admins and the system super admin.',
    problemKo:
      '프론트엔드 화면에서 소속 도서관만 필터링하도록 구현할 경우, 일반 관리자가 브라우저 개발자 도구나 API 호출 도구를 통해 URL 또는 요청 본문의 library_id 파라미터를 임의로 변경하여 타 도서관의 비공개 예산 및 시민 신청 내역을 열람할 수 있는 위험이 있었습니다.',
    problemEn:
      'If restricted solely on the frontend interface, an admin could manipulate URL query parameters or payload fields via dev tools to view confidential budget allocations and citizen request data belonging to other libraries.',
    actionKo:
      '클라이언트에서 전달받는 library_id를 신뢰하지 않고, 백엔드 인증 인터셉터/세션에서 확인된 관리자의 소속 library_id를 서비스 레이어에서 강제로 바인딩하도록 설계했습니다. 최고 관리자 권한이 아닌 일반 관리자가 타 도서관 식별자로 요청을 시도할 경우 즉시 거부하고, SQL 쿼리 조건절에 관리자의 고유 library_id를 강제 적용했습니다.',
    actionEn:
      'Ignored unverified client-supplied library parameters and strictly injected the assigned library_id verified from the server-side session/security context. Rejected requests attempting unauthorized access and enforced the verified library_id into the SQL WHERE clause.',
    resultKo:
      '클라이언트 요청 조작을 통한 타 기관 데이터 노출 가능성을 백엔드 단에서 원천 차단했습니다. 화면상의 접근 제한과 별개로 서버 자체에서 권한과 데이터 조회 범위를 완벽히 통제해야 한다는 보안 중심의 백엔드 설계 원칙을 깊이 체득했습니다.',
    resultEn:
      'Completely eliminated data exposure from client tampering at the server tier. Internalized the fundamental security principle that data query scope must be enforced authoritatively by the backend regardless of client-side validation.',
    takeawayKo: '화면의 제어는 편의일 뿐이며, 보안과 데이터 격리의 절대적 책임은 백엔드에 있습니다.',
    takeawayEn: 'Client controls are for user experience; absolute responsibility for security and data isolation lies with the backend.'
  },
  {
    id: 'case-2',
    titleKo: 'Meetup Log의 자연어 취향 분석과 의미 유사도 최적화',
    titleEn: 'Meetup Log Dialogue Preference Analysis & Semantic Similarity Optimization',
    projectKo: 'Meetup Log ML Service',
    projectEn: 'Meetup Log ML Service',
    tags: ['Python', 'FastAPI', 'Sentence Transformers', 'Embedding Cache', 'NLP'],
    contextKo:
      '사용자가 일상적인 대화로 영화 선호를 전달하면 5,000건의 영화 카탈로그 중 가장 적합한 작품을 찾아 추천하는 백엔드 파이프라인이었습니다.',
    contextEn:
      'A backend service translating natural dialogue into structured preferences to match against a 5,000-movie catalog via semantic embeddings.',
    problemKo:
      '추천 요청이 발생할 때마다 5,000편의 영화 메타데이터 전체를 실시간으로 언어 모델에 전달하여 768차원 임베딩을 계산하면 막대한 CPU 부하와 수 초 단위의 지연이 발생해 실시간 대화형 서비스가 불가능했습니다. 또한 "액션은 좋아하지만 잔인한 건 싫다"처럼 한 문장에 긍정과 부정이 공존할 때 키워드가 왜곡되는 문제가 있었습니다.',
    problemEn:
      'Encoding 5,000 movie descriptions in real-time on every query overwhelmed CPU resources, causing multiple seconds of lag. Furthermore, sentences mixing positive and negative sentiments distorted keyword extraction.',
    actionKo:
      '영화 5,000건의 768차원 임베딩을 사전에 배치로 연산하여 캐시 파일로 저장하고, 서비스 구동 시 메모리에 한 번만 로드하여 재사용하도록 최적화했습니다. 실시간 요청 시에는 사용자의 질의 1문장만 임베딩한 뒤 NumPy 기반 벡터 행렬 곱으로 코사인 유사도를 즉각 산출했습니다. 또한 텍스트 파싱 시 긍정/부정 수식어구를 분리하여 구조화했습니다.',
    actionEn:
      'Decoupled movie catalog vectorization into an offline batch step, pre-computing and caching the 768-dimensional matrix in memory upon server startup. Live requests encoded only the single user prompt, followed by rapid NumPy matrix multiplication for cosine similarity, while separating positive and negative sentiment cues.',
    resultKo:
      '실시간 추천 추론 지연 시간을 밀리초 단위로 안정화했습니다. 내부 데이터셋 300건 대화 분류 평가에서 정확도 100%, F1 1.0, 취향 대상 유형 추출 정확도 97.83%를 달성하여 신뢰할 수 있는 추천 품질을 확보했습니다. (평가 결과는 내부 데이터셋 기준)',
    resultEn:
      'Achieved responsive sub-second recommendation latency. Recorded 100% dialogue classification accuracy (F1 1.0) and 97.83% entity extraction accuracy on an internal 300-case dataset, providing reliable matching.',
    takeawayKo: '반복 연산의 사전 캐싱과 선제적 파이프라인 분리가 서빙 성능을 결정짓습니다.',
    takeawayEn: 'Pre-computing repetitive computations and pipeline decoupling are the pillars of efficient ML serving.'
  },
  {
    id: 'case-3',
    titleKo: '팀 프로젝트 중 코드 취합 문제 해결 및 실행 검증',
    titleEn: 'Pragmatic Code Integration & Verification Under Delivery Pressure',
    projectKo: '팀 프로젝트 협업',
    projectEn: 'Team Project Collaboration',
    tags: ['Collaboration', 'Code Integration', 'Pragmatic Resolution', 'Verification'],
    contextKo:
      '팀 프로젝트 개발 마감 직전, 같은 개발 파트를 담당한 팀원과의 작업물 취합 단계에서 협업 난관이 발생했습니다.',
    contextEn:
      'Ahead of a project deadline, an integration challenge arose when consolidating code modules with a teammate working in the same functional domain.',
    problemKo:
      'Git을 사용해 협업하던 중 같은 파트 팀원과의 작업 브랜치 불일치 및 환경 차이로 인해 원격 저장소 상에서 정상적인 코드 취합에 어려움이 발생했습니다. 마감 기한이 임박한 상태에서 무리한 원격 병합 시도시 기존 정상 작업물까지 깨질 위험이 컸습니다.',
    problemEn:
      'Branch divergences and local environment disparities between teammates created severe blockers when attempting remote repository merges. Forcing an automated merge under tight deadlines risked breaking functioning baseline code.',
    actionKo:
      'Git merge 충돌을 무리하게 명령어로 강제 해결하려 하지 않고, 팀원과 대면 미팅을 진행해 작업 범위와 변경 내역을 명확히 조율했습니다. 상대적으로 코드 분량이 적은 팀원의 작업 코드를 USB로 직접 인계받아, 기존 통합 베이스 작업물과 라인 단위로 대조하며 직접 수작업으로 병합했습니다. 병합 후 로컬 환경에서 프로그램을 직접 실행하여 주요 API와 비즈니스 로직이 정상 동작하는지 하나씩 검증했습니다.',
    actionEn:
      'Avoided blind automated merge commands; instead, conducted an immediate in-person review to coordinate exact scope and changes. Received the teammate’s smaller code segment via USB physical storage, manually verified line-by-line differences against the baseline, and integrated the code. Then executed the application locally to test and verify every endpoint.',
    resultKo:
      '코드 유실이나 기능 깨짐 없이 정상 동작을 확인한 완성 결과물을 팀원에게 전달하여 마감 기한 내에 프로젝트를 성공적으로 완수했습니다. 이후 팀원 간 커밋 단위 분할과 사전 인터페이스 정의의 중요성을 실감하고 협업 규칙을 개선했습니다.',
    resultEn:
      'Delivered a fully verified, intact build on schedule with zero code loss or runtime errors. Gained firsthand appreciation for establishing atomic commit protocols and upfront interface definitions in team development.',
    takeawayKo: '도구보다 중요한 것은 팀의 목표 완수이며, 정확한 소통과 꼼꼼한 검증이 문제를 해결합니다.',
    takeawayEn: 'The team goal takes precedence over rigid tool habits; clear communication and direct verification solve real problems.'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institutionKo: '중부대학교',
    institutionEn: 'Joongbu University',
    degreeKo: '정보보안공학과 (학사)',
    degreeEn: 'Department of Information Security (Bachelor)',
    period: '2023.03 ~ 2027.02 (졸업 예정)',
    statusKo: '졸업 예정',
    statusEn: 'Expected Graduation (Feb 2027)',
    detailsKo: [
      '정보보안 및 네트워크 기초, 운영체제, 데이터베이스 이론 학습',
      '웹 애플리케이션 보안 취약점 분석 및 안전한 서버 프로그래밍 기초 학습'
    ],
    detailsEn: [
      'Core coursework in information security, networking, operating systems, and database theory',
      'Web application vulnerability analysis and secure server programming principles'
    ]
  },
  {
    institutionKo: 'SD부트캠프평생교육원',
    institutionEn: 'SD Bootcamp Lifelong Education Center',
    degreeKo: 'Java/Spring 및 데이터 분석 웹 개발 교육 과정',
    degreeEn: 'Java/Spring & Data Analysis Web Development Curriculum',
    period: '2024',
    statusKo: '수료',
    statusEn: 'Completed',
    detailsKo: [
      'Java 객체지향 프로그래밍 및 Spring Boot 계층형 웹 백엔드 실습',
      'Spring Data JPA 및 MyBatis 연동 데이터베이스 애플리케이션 구현',
      'Python 기반 데이터 분석, 머신러닝 라이브러리 활용 프로젝트 수행'
    ],
    detailsEn: [
      'Java OOP principles and Spring Boot layered web backend development',
      'Database integration with Spring Data JPA and MyBatis',
      'Data analysis and machine learning application projects in Python'
    ]
  },
  {
    institutionKo: 'K-Shield 주니어',
    institutionEn: 'K-Shield Junior',
    degreeKo: 'K-Shield 주니어 기초과정',
    degreeEn: 'K-Shield Junior Security Fundamentals Program',
    period: '2024',
    statusKo: '수료',
    statusEn: 'Completed',
    detailsKo: [
      '사이버 보안 실무 기초, 시스템 및 네트워크 보안 침해 대응 이론',
      '소프트웨어 보안 코딩 가이드라인 및 시큐어 코딩 기초 학습'
    ],
    detailsEn: [
      'Cybersecurity fundamentals, system/network threat response theory',
      'Software secure coding principles and guidelines'
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    nameKo: '정보처리기사 (필기 합격)',
    nameEn: 'Engineer Information Processing (Written Exam Passed)',
    issuerKo: '한국산업인력공단',
    issuerEn: 'Human Resources Development Service of Korea',
    date: '2024',
    statusKo: '필기 합격 (실기 미합격, 최종 자격증 미취득)',
    statusEn: 'Written Exam Passed (Practical exam pending, final license not issued)',
    isVerified: true,
    isPartial: true,
    notesKo: '필기 시험 합격 상태이며, 실기 시험 준비 중으로 최종 자격증 미취득 상태임을 명확히 안내합니다.',
    notesEn: 'Passed written examination; currently preparing for practical exam. Final certificate pending.'
  },
  {
    nameKo: 'AI데이터전문가 1급',
    nameEn: 'AI Data Specialist Level 1',
    issuerKo: '한국자격검정평가진흥원',
    issuerEn: 'Korea Qualification Assessment & Promotion Agency',
    date: '2026.09',
    statusKo: '취득 완료',
    statusEn: 'Certified',
    isVerified: true
  },
  {
    nameKo: '빅데이터전문가 1급',
    nameEn: 'Big Data Specialist Level 1',
    issuerKo: '한국자격검정평가진흥원',
    issuerEn: 'Korea Qualification Assessment & Promotion Agency',
    date: '2026.09',
    statusKo: '취득 완료',
    statusEn: 'Certified',
    isVerified: true
  },
  {
    nameKo: '네트워크관리사 2급',
    nameEn: 'Network Administrator Level 2',
    issuerKo: '한국정보통신자격협회',
    issuerEn: 'Korea Association of Information & Telecommunication',
    date: '2024.12.24',
    statusKo: '취득 완료',
    statusEn: 'Certified',
    isVerified: true
  },
  {
    nameKo: '정보처리기능사',
    nameEn: 'Craftsman Information Processing',
    issuerKo: '한국산업인력공단',
    issuerEn: 'Human Resources Development Service of Korea',
    date: '2018.12',
    statusKo: '취득 완료',
    statusEn: 'Certified',
    isVerified: true
  },
  {
    nameKo: '컴퓨터활용능력 2급',
    nameEn: 'Computer Specialist in Spreadsheet Level 2',
    issuerKo: '대한상공회의소',
    issuerEn: 'Korea Chamber of Commerce and Industry',
    date: '2018.02',
    statusKo: '취득 완료',
    statusEn: 'Certified',
    isVerified: true
  },
  {
    nameKo: '워드프로세서',
    nameEn: 'Word Processor Specialist',
    issuerKo: '대한상공회의소',
    issuerEn: 'Korea Chamber of Commerce and Industry',
    date: '2019.08',
    statusKo: '취득 완료',
    statusEn: 'Certified',
    isVerified: true
  },
  {
    nameKo: 'ITQ 아래한글 A등급',
    nameEn: 'ITQ Hancom Word (Grade A)',
    issuerKo: '한국생산성본부',
    issuerEn: 'Korea Productivity Center',
    date: '2016.12',
    statusKo: 'A등급 취득',
    statusEn: 'Grade A Certified',
    isVerified: true
  },
  {
    nameKo: 'ITQ 한글파워포인트(한쇼) A등급',
    nameEn: 'ITQ Hancom Presentation (Grade A)',
    issuerKo: '한국생산성본부',
    issuerEn: 'Korea Productivity Center',
    date: '2016.12',
    statusKo: 'A등급 취득',
    statusEn: 'Grade A Certified',
    isVerified: true
  },
  {
    nameKo: 'ITQ 한글엑셀(한셀) A등급',
    nameEn: 'ITQ Hancom Spreadsheet (Grade A)',
    issuerKo: '한국생산성본부',
    issuerEn: 'Korea Productivity Center',
    date: '2016.07',
    statusKo: 'A등급 취득',
    statusEn: 'Grade A Certified',
    isVerified: true
  }
];
