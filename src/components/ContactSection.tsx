import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Github, ExternalLink, FileText, Send, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const [copyFailed, setCopyFailed] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setCopyFailed(false);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {t('채용 및 기술 문의', 'Get in Touch')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t('안정적인 서비스를 함께 만들어갈 팀을 찾고 있습니다', 'Ready to Build Reliable Services with Your Team')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t(
              '신입 백엔드 엔지니어 및 소프트웨어 개발자 포지션 채용에 적극적으로 임하고 있습니다. 서류 검토, 기술 면접, 코딩 테스트 관련 문의는 아래 이메일로 연락주시면 신속하게 답변드리겠습니다.',
              'Actively open to Junior Backend & Software Engineering opportunities. Please feel free to reach out via email for interview inquiries or coding assessments.'
            )}
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Email Primary Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">
                  {t('대표 이메일 (Official Email)', 'Official Email')}
                </span>
                <span className="text-sm sm:text-lg break-all font-bold font-mono text-slate-900 dark:text-white select-all">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              {/* Copy Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">{t('복사됨!', 'Copied!')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t('이메일 복사', 'Copy')}</span>
                  </>
                )}
              </button>

              {/* Mailto Direct Button */}
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=[신입 채용 문의] 신지영 지원자 관련`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 transition-colors whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t('메일 보내기', 'Send Mail')}</span>
              </a>
            </div>
          </div>

          {copyFailed && <p role="status" className="text-xs text-slate-600 dark:text-slate-400">{t('이메일 주소를 선택해 직접 복사해 주세요.', 'Please select and copy the email address manually.')}</p>}
          {/* External Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    GitHub Profile
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    @shinjiyoung04
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Notion Portfolio
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t('상세 기술 문서 및 기록', 'Detailed Tech Notes')}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
            </a>
          </div>

          {/* Privacy & Recruiter Guarantee Note */}
          <div className="pt-4 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>
              {t(
                '개인정보 보호를 위해 전화번호 및 민감 정보는 공개 웹에 기본 노출하지 않으며, 이메일로 요청 시 즉시 전달드립니다.',
                'Personal phone numbers and sensitive data are protected and provided directly via email.'
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
