import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ABOUT_PILLARS, EDUCATION_DATA } from '../data/portfolioData';
import { Server, Brain, Users, GraduationCap } from 'lucide-react';

export const AboutMe: React.FC = () => {
  const { t } = useLanguage();

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'data_ai':
        return <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'collaboration':
        return <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Server className="w-5 h-5" />;
    }
  };

  const univ = EDUCATION_DATA[0];

  return (
    <section id="about" className="py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean, Minimal, No Preachy Slogans */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t('핵심 역량 및 소개', 'Core Competencies')}
          </h2>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {ABOUT_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {t(pillar.titleKo, pillar.titleEn)}
                </h3>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {t(pillar.subtitleKo, pillar.subtitleEn)}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t(pillar.descriptionKo, pillar.descriptionEn)}
                </p>
              </div>

              {/* Keywords */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-1.5 font-mono">
                {pillar.keywords.map((kw, idx) => (
                  <React.Fragment key={kw}>
                    <span>{kw}</span>
                    {idx < pillar.keywords.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Card (Clean, NO GPA, NO "증명서류 확인 가능") */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
              <GraduationCap className="w-5 h-5 text-slate-800 dark:text-slate-200" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
                <span>{t(univ.statusKo, univ.statusEn)}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{univ.period}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {t(univ.institutionKo, univ.institutionEn)} {t(univ.degreeKo, univ.degreeEn)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
