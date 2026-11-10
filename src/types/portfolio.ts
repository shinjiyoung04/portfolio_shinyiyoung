export type Language = 'ko' | 'en';

export type SkillProficiency = 'direct' | 'knowledge';

export type SkillCategory = 'backend' | 'database' | 'ai_data' | 'frontend' | 'tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiency: SkillProficiency; // direct = 직접 구현 경험, knowledge = 학습 및 실습 경험
  iconName?: string;
  descriptionKo: string;
  descriptionEn: string;
  projects?: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  taglineKo: string;
  taglineEn: string;
  period: string;
  teamKo: string;
  teamEn: string;
  category: 'Backend / Security' | 'AI / NLP Service' | 'Backend Practice';
  techStack: string[];
  githubUrl: string;
  notionUrl?: string;
  purposeKo: string;
  purposeEn: string;
  architectureKo: string[];
  architectureEn: string[];
  teamScopeKo: string[];
  teamScopeEn: string[];
  personalContributionKo: string[];
  personalContributionEn: string[];
  keyFeaturesKo: { title: string; desc: string }[];
  keyFeaturesEn: { title: string; desc: string }[];
  technicalProblemKo: {
    problem: string;
    action: string;
    result: string;
  };
  technicalProblemEn: {
    problem: string;
    action: string;
    result: string;
  };
  metrics?: {
    labelKo: string;
    labelEn: string;
    value: string;
    noteKo: string;
    noteEn: string;
  }[];
  limitationsAndFutureKo: string[];
  limitationsAndFutureEn: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
    explanationKo: string;
    explanationEn: string;
  };
  isPractice?: boolean;
}

export interface ProblemCase {
  id: string;
  titleKo: string;
  titleEn: string;
  projectKo: string;
  projectEn: string;
  contextKo: string;
  contextEn: string;
  problemKo: string;
  problemEn: string;
  actionKo: string;
  actionEn: string;
  resultKo: string;
  resultEn: string;
  takeawayKo: string;
  takeawayEn: string;
  tags: string[];
}

export interface CertificationItem {
  nameKo: string;
  nameEn: string;
  issuerKo: string;
  issuerEn: string;
  date: string;
  statusKo: string;
  statusEn: string;
  isVerified: boolean;
  isPartial?: boolean; // For 필기 합격
  notesKo?: string;
  notesEn?: string;
}

export interface EducationItem {
  institutionKo: string;
  institutionEn: string;
  degreeKo: string;
  degreeEn: string;
  period: string;
  statusKo: string;
  statusEn: string;
  detailsKo: string[];
  detailsEn: string[];
}
