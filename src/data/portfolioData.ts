import type { ProjectData, CertificationItem, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  nameKo: '신지영', nameEn: 'Shin JiYoung',
  headlineKo: '데이터의 흐름을 이해하고, 안정적인 서비스로 연결하는 백엔드 개발자',
  headlineEn: 'A backend developer connecting data to reliable services',
  introKo: 'Java와 Spring Boot 기반 웹 개발을 학습하고, 자연어 기반 영화 추천 프로젝트 Meetup Log에 참여했습니다. BookCast에서는 공공데이터를 활용한 도서 검색 서비스와 사용자 등업 및 권한 관련 기능을 담당했습니다.',
  introEn: 'I have studied web development with Java and Spring Boot and participated in Meetup Log, a conversational movie recommendation project. In BookCast, I was responsible for public-data book search, membership upgrades, and user permissions.',
  email: 'shinspace04@gmail.com',
  githubUrl: 'https://github.com/shinjiyoung04',
  notionUrl: 'https://app.notion.com/p/Shin-JiYoung-3aa0162c669f83f8a1f78187882b4b99',
  defaultPhotoUrl: '/assets/aistudio/KakaoTalk_20260903_103622711_02_3-_989012e7.jpg',
};

export const ABOUT_PILLARS = [
  {
    id: 'data_ai', number: '01', titleKo: 'Meetup Log', titleEn: 'Meetup Log',
    subtitleKo: '자연어 기반 영화 추천 프로젝트', subtitleEn: 'Conversational movie recommendations',
    descriptionKo: '2026년에 수행한 팀 프로젝트로, 참여 프로젝트 중 개인 기여도가 가장 높아 대표 프로젝트로 소개합니다. 채팅 내용을 분석해 영화 추천에 활용하는 서비스입니다.',
    descriptionEn: 'A team project completed in 2026. I feature it first because it is the project to which I contributed most. The service uses chat analysis to recommend movies.',
    keywords: ['Meetup Log', 'Team Project', '2026'],
  },
  {
    id: 'backend', number: '02', titleKo: 'BookCast', titleEn: 'BookCast',
    subtitleKo: '도서 검색 · 등업 · 권한', subtitleEn: 'Book search · Membership upgrades · Permissions',
    descriptionKo: '시민 참여형 도서 서비스 팀 프로젝트입니다. 공공데이터를 활용한 도서 검색 서비스, 사용자 등업, 권한 관련 기능을 담당했습니다.',
    descriptionEn: 'A citizen-participatory book service developed as a team. I was responsible for book search using public data, membership upgrades, and permission-related features.',
    keywords: ['Public Data', 'Book Search', 'Permissions'],
  },
  {
    id: 'collaboration', number: '03', titleKo: 'Learning & Practice', titleEn: 'Learning & Practice',
    subtitleKo: 'Java 기반 웹 개발 학습', subtitleEn: 'Learning Java web development',
    descriptionKo: 'SD부트캠프에서 Java와 Spring Boot 기반 웹 개발을 학습했습니다. Spring Boot 게시판과 MyBatis 회원 관리 실습을 통해 데이터베이스 연동을 익혔습니다.',
    descriptionEn: 'Studied Java and Spring Boot web development at SD Bootcamp, with board and MyBatis member-management exercises for database integration.',
    keywords: ['Java', 'Spring Boot', 'MyBatis'],
  },
];

// Order follows the applicant's stated priority. Team functionality is not personal attribution.
export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'meetup-log', title: 'Meetup Log',
    taglineKo: '채팅 기반 영화 추천 웹 서비스', taglineEn: 'Chat-based movie recommendation service',
    period: '2026', teamKo: '팀 프로젝트', teamEn: 'Team project',
    category: 'Movie Recommendation', techStack: ['React', 'Spring Boot', 'FastAPI'],
    githubUrl: 'https://github.com/shinjiyoung04/modify_test-meetup',
    notionUrl: 'https://app.notion.com/p/3bc0162c669f800485f9ce65ddce6264',
    purposeKo: '사용자들의 채팅 내용을 바탕으로 영화 취향을 분석하고 추천 결과를 제공하는 팀 프로젝트입니다. React 화면, Spring Boot 백엔드, FastAPI 분석 서비스를 연결하는 구성을 갖추고 있습니다.',
    purposeEn: 'A team project that analyzes movie preferences from chat and provides recommendations. The service connects a React interface, a Spring Boot backend, and a FastAPI analysis service.',
    contributionLabelKo: '프로젝트 참여', contributionLabelEn: 'Project participation',
    personalContributionKo: ['자연어 기반 영화 추천 팀 프로젝트 참여', '참여 프로젝트 중 개인 기여도가 가장 높은 대표 프로젝트'],
    personalContributionEn: ['Participated in the conversational movie recommendation team project', 'My featured project, reflecting my greatest contribution among these projects'],
    teamScopeKo: ['채팅 내용을 활용한 영화 취향 분석', '사용자별 선호·비선호 정보 처리 및 개인·그룹 영화 추천', 'React 화면과 Spring Boot·FastAPI 서비스 연동'],
    teamScopeEn: ['Analysis of movie preferences from chat', 'User preference processing and individual/group movie recommendations', 'Integration of the React interface with Spring Boot and FastAPI services'],
  },
  {
    id: 'bookcast', title: 'BookCast',
    taglineKo: '시민 참여형 도서 서비스', taglineEn: 'Citizen-participatory book service',
    teamKo: '팀 프로젝트', teamEn: 'Team project', category: 'Web Service', techStack: ['Java', 'Spring Boot'],
    githubUrl: 'https://github.com/shinjiyoung04/SD-1-bookcast-projectAPI',
    notionUrl: 'https://app.notion.com/p/3cf0162c669f81bdb73ff36547aa859d',
    purposeKo: '도서 검색과 희망도서 신청, 시민투표 및 관리자 승인·반려 기능을 제공하는 웹 애플리케이션 팀 프로젝트입니다.',
    purposeEn: 'A team web application with book search, book requests, citizen voting, and administrator approval or rejection.',
    contributionLabelKo: '개인 담당 기능', contributionLabelEn: 'My responsibilities',
    personalContributionKo: ['공공데이터를 활용한 도서 검색 서비스', '사용자 등업 기능', '사용자 권한 관련 기능'],
    personalContributionEn: ['Book search using public data', 'Membership upgrade features', 'User permission-related features'],
    teamScopeKo: ['도서 검색 및 희망도서 신청', '시민투표와 관리자 승인·반려'],
    teamScopeEn: ['Book search and requests', 'Citizen voting and administrator approval or rejection'],
  },
  {
    id: 'springboot-practice', title: 'Spring Boot Practice',
    taglineKo: '게시판 및 회원 관리 실습', taglineEn: 'Board and member-management exercises',
    teamKo: '교육과정 실습', teamEn: 'Course exercises', category: 'Backend Practice',
    techStack: ['Java', 'Spring Boot', 'JPA', 'MyBatis'], githubUrl: 'https://github.com/shinjiyoung04', isPractice: true,
    purposeKo: 'Java와 Spring Boot 기반 웹 개발을 학습하며 진행한 게시판 및 회원 관리 실습입니다.',
    purposeEn: 'Board and member-management exercises completed while learning Java and Spring Boot web development.',
    contributionLabelKo: '학습 및 실습', contributionLabelEn: 'Study and practice',
    personalContributionKo: ['Spring Boot·JPA 게시판 실습', 'MyBatis 회원 관리 실습'],
    personalContributionEn: ['Spring Boot and JPA board exercises', 'MyBatis member-management exercises'],
    teamScopeKo: ['교육과정의 게시판·회원 관리 실습'], teamScopeEn: ['Board and member-management course exercises'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institutionKo: '중부대학교', institutionEn: 'Joongbu University',
    degreeKo: '정보보안공학과 (학사)', degreeEn: 'Information Security Engineering (Bachelor)',
    period: '2023.03 ~ 2027.02', statusKo: '2027년 2월 졸업 예정', statusEn: 'Expected graduation: February 2027',
    detailsKo: ['정보보안공학 전공'], detailsEn: ['Major in Information Security Engineering'],
  },
  {
    institutionKo: 'SD부트캠프평생교육원', institutionEn: 'SD Bootcamp Lifelong Education Center',
    degreeKo: 'Java/Spring 및 데이터 분석 웹 개발 교육 과정', degreeEn: 'Java/Spring and Data Analysis Web Development',
    period: '2025.12 ~ 2026.08', statusKo: '수료', statusEn: 'Completed',
    detailsKo: ['Java 및 Spring Boot 기반 웹 개발 학습'], detailsEn: ['Java and Spring Boot web development studies'],
  },
  {
    institutionKo: 'K-Shield 주니어', institutionEn: 'K-Shield Junior',
    degreeKo: 'K-Shield 주니어 기초과정', degreeEn: 'K-Shield Junior Fundamentals',
    period: '2025.06', statusKo: '수료', statusEn: 'Completed', detailsKo: [], detailsEn: [],
  },
];

// Retained from the supplied portfolio, without a new certificate-verification claim.
// The unconfirmed written-exam year is omitted.
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    nameKo: '정보처리기사 (필기 합격)', nameEn: 'Engineer Information Processing (Written Exam Passed)',
    issuerKo: '한국산업인력공단', issuerEn: 'Human Resources Development Service of Korea',
    statusKo: '필기 합격 · 최종 자격증 미취득', statusEn: 'Written exam passed; final qualification not obtained', isPartial: true,
  },
  {
    nameKo: 'AI데이터전문가 1급', nameEn: 'AI Data Specialist Level 1',
    issuerKo: '한국자격검정평가진흥원', issuerEn: 'Korea Qualification Assessment & Promotion Agency',
    date: '2026.09', statusKo: '취득 완료', statusEn: 'Certified',
  },
  {
    nameKo: '빅데이터전문가 1급', nameEn: 'Big Data Specialist Level 1',
    issuerKo: '한국자격검정평가진흥원', issuerEn: 'Korea Qualification Assessment & Promotion Agency',
    date: '2026.09', statusKo: '취득 완료', statusEn: 'Certified',
  },
  {
    nameKo: '네트워크관리사 2급', nameEn: 'Network Administrator Level 2',
    issuerKo: '한국정보통신자격협회', issuerEn: 'Korea Association of Information & Telecommunication',
    date: '2024.12.24', statusKo: '취득 완료', statusEn: 'Certified',
  },
  {
    nameKo: '정보처리기능사', nameEn: 'Craftsman Information Processing',
    issuerKo: '한국산업인력공단', issuerEn: 'Human Resources Development Service of Korea',
    date: '2018.12', statusKo: '취득 완료', statusEn: 'Certified',
  },
  {
    nameKo: '컴퓨터활용능력 2급', nameEn: 'Computer Specialist in Spreadsheet Level 2',
    issuerKo: '대한상공회의소', issuerEn: 'Korea Chamber of Commerce and Industry',
    date: '2018.02', statusKo: '취득 완료', statusEn: 'Certified',
  },
  {
    nameKo: '워드프로세서', nameEn: 'Word Processor Specialist',
    issuerKo: '대한상공회의소', issuerEn: 'Korea Chamber of Commerce and Industry',
    date: '2019.08', statusKo: '취득 완료', statusEn: 'Certified',
  },
  {
    nameKo: 'ITQ 아래한글 A등급', nameEn: 'ITQ Hancom Word (Grade A)',
    issuerKo: '한국생산성본부', issuerEn: 'Korea Productivity Center',
    date: '2016.12', statusKo: 'A등급 취득', statusEn: 'Grade A Certified',
  },
  {
    nameKo: 'ITQ 한글파워포인트(한쇼) A등급', nameEn: 'ITQ Hancom Presentation (Grade A)',
    issuerKo: '한국생산성본부', issuerEn: 'Korea Productivity Center',
    date: '2016.12', statusKo: 'A등급 취득', statusEn: 'Grade A Certified',
  },
  {
    nameKo: 'ITQ 한글엑셀(한셀) A등급', nameEn: 'ITQ Hancom Spreadsheet (Grade A)',
    issuerKo: '한국생산성본부', issuerEn: 'Korea Productivity Center',
    date: '2016.07', statusKo: 'A등급 취득', statusEn: 'Grade A Certified',
  },
];
