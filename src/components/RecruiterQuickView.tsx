import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { X, ArrowUpRight } from 'lucide-react';
import { Modal } from './Modal';

interface RecruiterQuickViewProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject: (projectId: string) => void;
}

export const RecruiterQuickView: React.FC<RecruiterQuickViewProps> = ({ isOpen, onClose, onOpenProject }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;
  return (
    <Modal onClose={onClose} titleId="quick-view-title" className="max-w-3xl">
      <div className="shrink-0 px-5 sm:px-6 py-4 flex items-start justify-between gap-3 border-b border-slate-200 dark:border-slate-800">
        <div><h2 id="quick-view-title" className="font-bold">{t('30초 핵심 요약', '30-second summary')}</h2><p className="text-xs text-slate-500 mt-1">{t('신지영 · 신입 백엔드 개발자', 'Shin JiYoung · Junior Backend Developer')}</p></div>
        <button autoFocus onClick={onClose} aria-label={t('핵심 요약 닫기', 'Close summary')} className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"><X className="w-5 h-5" /></button>
      </div>
      <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
        <section>
          <h3 className="font-bold mb-3">{t('주요 프로젝트', 'Selected projects')}</h3>
          <div className="space-y-3">{PROJECTS_DATA.map((project, index) => (
            <article key={project.id} className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="font-bold"><span className="font-mono text-blue-600 dark:text-blue-400 mr-2">0{index + 1}</span>{project.title}{project.period && <span className="ml-2 text-xs font-normal text-slate-500">{project.period}</span>}</h4>
                <button onClick={() => { onClose(); onOpenProject(project.id); }} className="text-xs font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 shrink-0">{t('상세보기', 'Details')}<ArrowUpRight className="w-3.5 h-3.5" /></button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{t(project.taglineKo, project.taglineEn)}</p>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-800 p-3 text-xs">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">{t(project.contributionLabelKo, project.contributionLabelEn)}</p>
                <ul className="list-disc pl-4 space-y-1">{project.personalContributionKo.map((item, i) => <li key={item}>{t(item, project.personalContributionEn[i])}</li>)}</ul>
              </div>
            </article>
          ))}</div>
        </section>
        <section>
          <h3 className="font-bold mb-3">{t('학력 및 교육', 'Education and training')}</h3>
          <ul className="space-y-2 text-xs">{EDUCATION_DATA.map(edu => <li key={edu.institutionEn} className="flex flex-wrap justify-between gap-x-4 gap-y-1"><span>{t(edu.institutionKo, edu.institutionEn)} · {t(edu.statusKo, edu.statusEn)}</span><span className="font-mono text-slate-500">{edu.period}</span></li>)}</ul>
        </section>
        <p className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-xs text-amber-900 dark:text-amber-200">{t('정보처리기사: 필기 합격 · 최종 자격증 미취득', 'Engineer Information Processing: written exam passed; final qualification not obtained.')}</p>
      </div>
    </Modal>
  );
};
