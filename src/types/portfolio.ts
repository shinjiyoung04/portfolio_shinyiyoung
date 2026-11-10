export type Language = 'ko' | 'en';

export interface ProjectData {
  id: string;
  title: string;
  taglineKo: string;
  taglineEn: string;
  // Omit dates until the project period is confirmed; training dates are separate.
  period?: string;
  teamKo: string;
  teamEn: string;
  category: string;
  techStack: string[];
  githubUrl: string;
  notionUrl?: string;
  purposeKo: string;
  purposeEn: string;
  contributionLabelKo: string;
  contributionLabelEn: string;
  teamScopeKo: string[];
  teamScopeEn: string[];
  personalContributionKo: string[];
  personalContributionEn: string[];
  isPractice?: boolean;
}

export interface CertificationItem {
  nameKo: string;
  nameEn: string;
  issuerKo: string;
  issuerEn: string;
  date?: string;
  statusKo: string;
  statusEn: string;
  isPartial?: boolean;
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
