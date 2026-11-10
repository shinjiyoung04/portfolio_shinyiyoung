import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROBLEM_SOLVING_CASES } from '../data/portfolioData';
import { AlertCircle, Wrench, CheckCircle2, ChevronDown, ChevronUp, Quote } from 'lucide-react';

export const ProblemSolving: React.FC = () => {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string>('case-1');

  const toggleCase = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="problem-solving" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {t('실제 경험 기반 문제 해결', 'Engineering Problem Solving & Case Studies')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t('이슈 직면 시 논리와 실행력으로 풀어낸 사례', 'Solving Bottlenecks via Logic & Action')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t(
              '모든 사례는 실제 경험에 근거하여 Problem(문제 정의) → Action(해결 행동) → Result(결과 및 학습)의 체계적인 구조로 정리했습니다. 난관 앞에서 회피하지 않고 끝까지 작동하는 코드로 완성해 냅니다.',
              'Real engineering and collaboration case studies structured around Problem → Action → Result. Demonstrating proactive ownership, pragmatic troubleshooting, and end-to-end execution verification.'
            )}
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-6">
          {PROBLEM_SOLVING_CASES.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs transition-colors"
              >
                {/* Header Accordion Bar */}
                <button
                  onClick={() => toggleCase(item.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                      Case 0{index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                        <span>{t(item.projectKo, item.projectEn)}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{item.tags.join(' · ')}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {t(item.titleKo, item.titleEn)}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {t(item.contextKo, item.contextEn)}
                      </p>
                    </div>
                  </div>

                  <div className="p-1 rounded-md text-slate-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4">
                    {/* Problem */}
                    <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
                      <div className="flex items-center gap-2 text-xs font-bold text-red-800 dark:text-red-300 mb-1.5">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span>Problem (문제 상황 및 원인)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {t(item.problemKo, item.problemEn)}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300 mb-1.5">
                        <Wrench className="w-4 h-4 text-blue-600" />
                        <span>Action (해결 조치 및 기술적 구현)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {t(item.actionKo, item.actionEn)}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Result (도출 결과 및 정량 성과)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {t(item.resultKo, item.resultEn)}
                      </p>
                    </div>

                    {/* Key Takeaway Quote */}
                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                      <Quote className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-0.5">
                          {t('엔지니어링 교훈 (Takeaway)', 'Key Takeaway')}
                        </span>
                        <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 italic">
                          "{t(item.takeawayKo, item.takeawayEn)}"
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
