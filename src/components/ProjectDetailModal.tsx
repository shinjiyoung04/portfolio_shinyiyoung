import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ProjectData } from '../types/portfolio';
import { X, Github, ExternalLink, FileText } from 'lucide-react';
import { Modal } from './Modal';

interface ProjectDetailModalProps { project: ProjectData | null; onClose: () => void; }

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  if (!project) return null;

  return (
    <Modal key={project.id} onClose={onClose} titleId="project-dialog-title">
      <div className="shrink-0 px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>{project.category}</span><span>{t(project.teamKo, project.teamEn)}</span>
            {project.period && <span className="font-mono">{project.period}</span>}
          </div>
          <h2 id="project-dialog-title" className="text-xl sm:text-2xl font-bold">{project.title}</h2>
        </div>
        <button autoFocus onClick={onClose} aria-label={t('프로젝트 상세 닫기', 'Close project details')} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0"><X className="w-5 h-5" /></button>
      </div>
      <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
        <section>
          <h3 className="font-bold mb-2">{t(project.taglineKo, project.taglineEn)}</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t(project.purposeKo, project.purposeEn)}</p>
        </section>
        <section className="p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60">
          <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3">{t(project.contributionLabelKo, project.contributionLabelEn)}</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            {project.personalContributionKo.map((item, index) => <li key={item}>{t(item, project.personalContributionEn[index])}</li>)}
          </ul>
        </section>
        <section className="p-5 rounded-xl border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold mb-3">{project.isPractice ? t('실습 범위', 'Exercise scope') : t('팀 프로젝트 전체 기능', 'Team project functionality')}</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
            {project.teamScopeKo.map((item, index) => <li key={item}>{t(item, project.teamScopeEn[index])}</li>)}
          </ul>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{project.isPractice ? t('교육과정에서 진행한 실습입니다.', 'Completed as course exercises.') : t('위 내용은 팀 서비스의 전체 기능이며, 모두 개인 담당 업무를 의미하지는 않습니다.', 'These describe the team service as a whole, rather than individual ownership of every feature.')}</p>
        </section>
        <section>
          <h3 className="font-bold mb-2">{t('프로젝트 사용 기술', 'Project technologies')}</h3>
          <div className="flex flex-wrap gap-2">{project.techStack.map(tech => <span key={tech} className="px-2.5 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800">{tech}</span>)}</div>
        </section>
      </div>
      <div className="px-5 sm:px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-xs shrink-0">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold"><Github className="w-4 h-4" />GitHub<ExternalLink className="w-3 h-3" /></a>
        {project.notionUrl && <a href={project.notionUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold"><FileText className="w-4 h-4" />{t('프로젝트 기록', 'Project notes')}<ExternalLink className="w-3 h-3" /></a>}
      </div>
    </Modal>
  );
};
