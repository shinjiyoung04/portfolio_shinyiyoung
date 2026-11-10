import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectData } from '../types/portfolio';
import { Github, ExternalLink, ArrowRight, Shield, CheckCircle2, FileText, Database, Sparkles, BookOpen } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectData) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const { t } = useLanguage();

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'bookcast':
        return <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'meetup-log':
        return <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'springboot-practice':
        return <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Database className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {t('실제 수행 프로젝트', 'Featured Engineering Projects')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t('대표 프로젝트와 참여 경험', 'Selected Projects & Experience')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t(
              'Meetup Log와 BookCast를 중심으로 소개합니다. 팀 서비스의 전체 기능과 개인 담당 업무를 구분해 정리했습니다.',
              'Meetup Log and BookCast lead this selection. Team service functionality is presented separately from individual responsibilities.'
            )}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Card Top Unboxed Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 font-mono">
                      0{idx + 1}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.category}</span>
                  </div>
                  {project.period && <span className="font-mono">{project.period}</span>}
                </div>

                {/* Project Title & Icon */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-slate-400">
                      {t(project.teamKo, project.teamEn)}
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2 mb-3">
                  {t(project.taglineKo, project.taglineEn)}
                </p>

                {/* Purpose Brief */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {t(project.purposeKo, project.purposeEn)}
                </p>

                {/* Direct Personal Contribution Highlight Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 mb-5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">
                    <Shield className="w-3.5 h-3.5" />
                    <span>{t(project.contributionLabelKo, project.contributionLabelEn)}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {project.personalContributionKo.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{t(item, project.personalContributionEn[cIdx])}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">{t('프로젝트 사용 기술', 'Project technologies')}</p>
                {/* Tech Stack List */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {tIdx < project.techStack.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>{t('프로젝트 상세보기', 'Project Details')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                    className="p-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.notionUrl && (
                    <a
                      href={project.notionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Notion Portfolio"
                      className="p-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-slate-800 dark:text-slate-200 mr-3">NEW ERA</span>
          <span>{t('졸업 프로젝트 참여', 'Graduation project participation')}</span>
        </div>
      </div>
    </section>
  );
};
