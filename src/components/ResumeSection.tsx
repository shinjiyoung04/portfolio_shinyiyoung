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
            Resources
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            {t('관련 자료', 'Resources')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {t(
              '프로젝트 기록과 추가 자료는 기존 Notion 포트폴리오에서 확인할 수 있습니다.',
              'Explore project notes and supporting material in my Notion portfolio.'
            )}
          </p>
        </div>

        {/* Single Dedicated Resume Card */}
        <div className="max-w-2xl p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
              {t('Notion 포트폴리오', 'Notion Portfolio')}
            </span>
            <span className="text-xs text-slate-400 font-mono">Notion</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>{t('신지영 포트폴리오', 'Shin JiYoung Portfolio')}</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {t(
              '프로젝트별 상세 기록을 모아 둔 페이지입니다.',
              'A collection of project documentation and notes.'
            )}
          </p>

          <div>
            <a
              href={PERSONAL_INFO.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
            >
              <span>{t('Notion 포트폴리오 열기', 'Open Notion Portfolio')}</span>
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
