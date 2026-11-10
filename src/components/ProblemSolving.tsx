import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS_DATA } from '../data/portfolioData';

// Keep the existing anchor so previously shared section links still work.
export const ProblemSolving: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="problem-solving" className="py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">Project Focus</div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t('프로젝트에서 다룬 기능', 'Project functionality')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS_DATA.slice(0, 2).map(project => (
            <article key={project.id} className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">{project.id === 'meetup-log' ? t('팀 서비스 기능', 'Team service functionality') : t('개인 담당 기능', 'My responsibilities')}</p>
              <ul className="list-disc pl-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {(project.id === 'meetup-log' ? project.teamScopeKo : project.personalContributionKo).map((item, i) => <li key={item}>{t(item, (project.id === 'meetup-log' ? project.teamScopeEn : project.personalContributionEn)[i])}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
