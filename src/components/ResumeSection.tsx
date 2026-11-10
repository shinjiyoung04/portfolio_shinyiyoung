import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="resume" className="py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Resume
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            {t('이력서', 'Resume')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {t(
              '오픈서베이 지원을 위해 작성된 공식 노션 이력서입니다.',
              'Official Notion resume prepared for OpenSurvey.'
            )}
          </p>
        </div>

        {/* Single Dedicated Resume Card */}
        <div className="max-w-2xl p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
              {t('오픈서베이 지원 이력서', 'OpenSurvey Resume')}
            </span>
            <span className="text-xs text-slate-400 font-mono">Notion</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>신지영 이력서 (오픈서베이)</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {t(
              '오픈서베이 백엔드/소프트웨어 엔지니어 지원을 위해 기술 스택, 핵심 프로젝트 기여도 및 문제 해결 경험을 정리한 공식 노션 이력서입니다.',
              'Official Notion resume prepared for the OpenSurvey software engineer position, detailing core stack, project contributions, and problem-solving cases.'
            )}
          </p>

          <div>
            <a
              href={PERSONAL_INFO.opensurveyNotionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
            >
              <span>{t('오픈서베이 이력서 열기 (Notion)', 'Open Notion Resume')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Verification Links */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub @shinjiyoung04</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <span className="text-slate-400 font-mono">
            {t('마지막 업데이트: 2026.11', 'Last Updated: Nov 2026')}
          </span>
        </div>
      </div>
    </section>
  );
};
