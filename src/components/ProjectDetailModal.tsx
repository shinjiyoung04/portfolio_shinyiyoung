import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectData } from '../types/portfolio';
import {
  X,
  Github,
  ExternalLink,
  Shield,
  Layers,
  Code2,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  FileText
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'problems' | 'code'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{t(project.teamKo, project.teamEn)}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{project.period}</span>
              {project.isPractice && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-600 dark:text-amber-400 font-medium">
                    {t('교육과정 실습', 'Curriculum Practice')}
                  </span>
                </>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto bg-white dark:bg-slate-900">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t('개요 및 개인 기여', 'Overview & Contribution')}
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t('시스템 아키텍처', 'Architecture & Scope')}
          </button>
          <button
            onClick={() => setActiveTab('problems')}
            className={`py-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'problems'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t('기술적 문제 & 해결 과정', 'Technical Problem & Fix')}
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'code'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('핵심 코드 & 구현 로직', 'Code & Implementation')}
            </button>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Tagline & Purpose */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {t('개발 목적 및 해결하려는 문제', 'Project Purpose & Target Problem')}
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {t(project.taglineKo, project.taglineEn)}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(project.purposeKo, project.purposeEn)}
                </p>
              </div>

              {/* Personal Contribution Box (Highlighted) */}
              <div className="p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-sm font-bold text-blue-950 dark:text-blue-200">
                    {t('신지영이 직접 구현한 역할 (개인 기여 100%)', 'Direct Personal Contribution (Verified Scope)')}
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {project.personalContributionKo.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">✓</span>
                      <span>{t(item, project.personalContributionEn[idx])}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Internal Metrics (if available) */}
              {project.metrics && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    {t('내부 테스트셋 검증 지표', 'Internal Verification Metrics')}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                      >
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                          {t(m.labelKo, m.labelEn)}
                        </div>
                        <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">
                          {t(m.noteKo, m.noteEn)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {t('직접 구현한 핵심 기능 상세', 'Directly Implemented Core Features')}
                </h3>
                <div className="space-y-3">
                  {project.keyFeaturesKo.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                    >
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {t(feat.title, project.keyFeaturesEn[idx].title)}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t(feat.desc, project.keyFeaturesEn[idx].desc)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture Points */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t('시스템 아키텍처 및 데이터 흐름', 'System Architecture & Data Flow')}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {project.architectureKo.map((arch, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-slate-800 dark:text-slate-200"
                    >
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{t(arch, project.architectureEn[idx])}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Distinction: Team Scope vs My Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {t('팀 전체 개발 범위 (협업 영역)', 'Full Team Scope')}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {project.teamScopeKo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-slate-400">·</span>
                        <span>{t(item, project.teamScopeEn[idx])}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/40 bg-blue-50/30 dark:bg-blue-950/20">
                  <h4 className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-2">
                    {t('신지영 단독 구현 범위 (인터뷰 집중 영역)', 'Shin JiYoung Scope')}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {project.personalContributionKo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-600 dark:text-blue-400">✓</span>
                        <span>{t(item, project.personalContributionEn[idx])}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Limitations & Future Roadmap */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t('기술적 한계 및 향후 개선 방향', 'Limitations & Future Improvements')}
                  </h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {project.limitationsAndFutureKo.map((lim, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0">→</span>
                      <span>{t(lim, project.limitationsAndFutureEn[idx])}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'problems' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-red-50/40 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
                <div className="flex items-center gap-2 text-xs font-bold text-red-800 dark:text-red-300 mb-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>{t('문제 상황 (Problem)', 'Identified Challenge')}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(project.technicalProblemKo.problem, project.technicalProblemEn.problem)}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300 mb-1.5">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  <span>{t('해결 조치 (Action & Implementation)', 'Action Taken')}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(project.technicalProblemKo.action, project.technicalProblemEn.action)}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t('도출 결과 (Result & Impact)', 'Verified Result')}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(project.technicalProblemKo.result, project.technicalProblemEn.result)}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-4">
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {t(project.codeSnippet.explanationKo, project.codeSnippet.explanationEn)}
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100">
                <div className="px-4 py-2 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{project.codeSnippet.filename}</span>
                  </span>
                  <span className="uppercase">{project.codeSnippet.language}</span>
                </div>
                <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-slate-200">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>{t('GitHub 저장소', 'GitHub Repository')}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {project.notionUrl && (
              <a
                href={project.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>{t('Notion 상세 문서', 'Notion Doc')}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {t('닫기', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
};
