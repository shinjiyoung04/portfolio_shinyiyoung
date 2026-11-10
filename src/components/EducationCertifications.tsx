import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, FileCheck } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const { t } = useLanguage();

  const univ = EDUCATION_DATA[0];
  const trainings = EDUCATION_DATA.slice(1);
  const fullCerts = CERTIFICATIONS_DATA.filter((c) => !c.isPartial);
  const examPassed = CERTIFICATIONS_DATA.filter((c) => c.isPartial);

  return (
    <section id="education" className="py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Education & Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t('학력, 수료 훈련 및 자격증', 'Education, Training & Certifications')}
          </h2>
        </div>

        {/* Categorized Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: 1. 학력 & 2. 수료 훈련 */}
          <div className="space-y-8">
            {/* 1. 학력 (Education) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {t('학력', 'Education')}
                </h3>
              </div>
              <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{t(univ.statusKo, univ.statusEn)}</span>
                  <span className="font-mono">{univ.period}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {t(univ.institutionKo, univ.institutionEn)}
                </h4>
                <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5 mb-2">
                  {t(univ.degreeKo, univ.degreeEn)}
                </div>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {univ.detailsKo.map((det, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-slate-400">·</span>
                      <span>{t(det, univ.detailsEn[dIdx])}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. 수료 훈련 (Training / Bootcamp) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {t('수료 훈련', 'Training & Bootcamp')}
                </h3>
              </div>
              <div className="space-y-3">
                {trainings.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{t(edu.statusKo, edu.statusEn)}</span>
                      <span className="font-mono">{edu.period}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {t(edu.institutionKo, edu.institutionEn)}
                    </h4>
                    <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      {t(edu.degreeKo, edu.degreeEn)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3. 취득 자격증 & 4. 시험 합격 */}
          <div className="space-y-8">
            {/* 3. 취득 자격증 (Certified Qualifications) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {t('취득 자격증', 'Certifications')}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {fullCerts.length} {t('개', 'Items')}
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs divide-y divide-slate-100 dark:divide-slate-800">
                {fullCerts.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 flex items-center justify-between gap-2 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {t(cert.nameKo, cert.nameEn)}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {t(cert.issuerKo, cert.issuerEn)}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono shrink-0">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. 시험 합격 (Exam Passed) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {t('시험 합격 (최종 자격증 미취득)', 'Exam Passed (Practical Exam Pending)')}
                </h3>
              </div>
              <div className="space-y-2">
                {examPassed.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-bold text-amber-950 dark:text-amber-200">
                        {t(cert.nameKo, cert.nameEn)}
                      </span>
                      <span className="text-[11px] font-mono text-amber-700 dark:text-amber-300 font-semibold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60">
                        {t('필기 합격', 'Written Passed')}
                      </span>
                    </div>
                    <div className="text-xs text-amber-800/80 dark:text-amber-300/80 mb-1">
                      {t(cert.issuerKo, cert.issuerEn)} · {cert.date}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(
                        '필기 시험 합격 상태이며, 실기 시험 준비 중으로 최종 자격증 미취득 상태입니다.',
                        'Written examination passed; practical exam is pending and final certificate is not yet issued.'
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
