import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolioData';
import { X, Clock, CheckCircle2, Github, ExternalLink, FileText, Mail, ArrowUpRight } from 'lucide-react';

interface RecruiterQuickViewProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject: (projectId: string) => void;
}

export const RecruiterQuickView: React.FC<RecruiterQuickViewProps> = ({
  isOpen,
  onClose,
  onOpenProject,
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {t('30초 채용담당자 핵심 요약 (Recruiter Quick Scan)', '30-Second Recruiter Summary')}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('인사담당자 및 기술 면접관을 위한 핵심 역량·프로젝트·기여도 요약', 'Core competencies, projects, and contributions for hiring managers')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Section 1: Candidate Profile Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/80 dark:border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block">{t('지원 직무', 'Target Role')}</span>
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                {t('신입 백엔드 / 소프트웨어 엔지니어', 'Junior Backend / Software Engineer')}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">{t('학력 및 전공', 'Education')}</span>
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                {t('중부대 정보보안공학과', 'Joongbu Univ InfoSec')}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">{t('졸업 예정일', 'Graduation')}</span>
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                {t('2027년 2월 (학사)', 'Feb 2027 (B.S.)')}
              </span>
            </div>
          </div>

          {/* Section 2: Core Engineering Pillars */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {t('핵심 기술 역량', 'Core Technical Competencies')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Java / Spring Boot & Database</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {t(
                    '계층형 아키텍처(Controller-Service-Repository), RESTful API, MySQL 연동. 서버 측 데이터 격리 및 관리자 권한별 조회 범위 통제 직접 구현.',
                    'Layered architecture, RESTful APIs, MySQL integration. Implemented server-side data isolation and role-based query scope enforcement.'
                  )}
                </p>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Python / FastAPI & NLP</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {t(
                    'Sentence Transformers 기반 768차원 임베딩 사전 캐싱(5,000건) 및 코사인 유사도 랭킹. 내부 대화 300건 테스트 정확도 100%, 취향 추출 정확도 97.83%.',
                    '768-dim sentence embedding pre-computation & caching (5k movies), cosine ranking. 100% accuracy on internal 300 dialogue tests, 97.83% preference extraction.'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Verified Projects & Individual Contribution */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {t('대표 프로젝트 및 개인 기여 (개인 구현 범위 명확화)', 'Projects & Personal Contributions')}
            </h3>
            <div className="space-y-2.5">
              {PROJECTS_DATA.map((p) => (
                <div
                  key={p.id}
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-slate-100">{p.title}</span>
                      <span className="text-xs text-slate-400">({t(p.teamKo, p.teamEn)})</span>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenProject(p.id);
                      }}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                    >
                      <span>{t('상세보기', 'Details')}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    {t(p.taglineKo, p.taglineEn)} · <span className="font-mono">{p.techStack.slice(0, 3).join(', ')}</span>
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/80 p-2 rounded">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      {t('개인 직접 구현: ', 'Direct Personal Scope: ')}
                    </span>
                    {t(p.personalContributionKo[0], p.personalContributionEn[0])}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Verified Certifications */}
          <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-lg text-xs text-amber-900 dark:text-amber-200">
            <span className="font-semibold">{t('자격 사항 투명 공지: ', 'Certification Status Note: ')}</span>
            {t(
              '정보처리기사는 필기 합격 상태이며, 실기 시험 준비 중으로 최종 자격증 미취득 상태임을 명확히 밝힙니다.',
              'Engineer Information Processing: Written Exam passed; practical exam is pending (final license not yet issued).'
            )}
          </div>
        </div>

        {/* Modal Footer Links & CTAs */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <a
              href={PERSONAL_INFO.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <span>Notion</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.opensurveyNotionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t('오픈서베이 이력서 (Notion)', 'OpenSurvey Resume (Notion)')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
