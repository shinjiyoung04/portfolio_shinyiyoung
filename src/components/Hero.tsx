import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePhoto } from '../context/PhotoContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Github, Download, Mail, ExternalLink, ShieldCheck, Camera, User, FileText } from 'lucide-react';

interface HeroProps {
  onOpenPhotoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPhotoModal }) => {
  const { t } = useLanguage();
  const { photoUrl, usePlaceholder } = usePhoto();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Developer Introduction & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Career Track & Trust Indicator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 tracking-wide">
              <span>{t('신입 백엔드 개발자', 'Junior Backend Developer')}</span>
              <span aria-hidden="true">·</span>
              <span>{t('소프트웨어 엔지니어', 'Software Engineer')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {t('정보보안공학 전공', 'Information Security Major')}
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              <span>{t(PERSONAL_INFO.nameKo, PERSONAL_INFO.nameEn)}</span>
              <span className="text-slate-400 dark:text-slate-600 font-normal text-2xl sm:text-3xl">
                {t(PERSONAL_INFO.nameEn, PERSONAL_INFO.nameKo)}
              </span>
            </h1>

            {/* Core Headline */}
            <p className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-5 leading-snug text-balance">
              "{t(PERSONAL_INFO.headlineKo, PERSONAL_INFO.headlineEn)}"
            </p>

            {/* Introduction Copy */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              {t(PERSONAL_INFO.introKo, PERSONAL_INFO.introEn)}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 transition-colors shadow-sm whitespace-nowrap"
              >
                <span>{t('프로젝트 보기', 'View Projects')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t('포트폴리오 (Notion)', 'Portfolio (Notion)')}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>{t('연락처', 'Contact Me')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Profile Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              {!usePlaceholder && !imgError ? (
                <img
                  src={photoUrl}
                  alt={t('신지영 프로필 사진', 'Shin JiYoung Professional Headshot')}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                /* Styled Technical Fallback Container (Clean, no broken frame) */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100 dark:bg-slate-900">
                  <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-4">
                    <User className="w-10 h-10" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {t('신지영', 'Shin JiYoung')}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t('백엔드 / 소프트웨어 엔지니어', 'Backend / Software Engineer')}
                  </p>
                  <div className="mt-4 text-[11px] text-slate-400 font-mono">
                    {t('증명사진 플레이스홀더', 'Profile Placeholder')}
                  </div>
                </div>
              )}

              {/* Photo customization button on hover / touch */}
              <button
                onClick={onOpenPhotoModal}
                title={t('사진 관리 및 교체', 'Manage / Change Photo')}
                className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm opacity-90 hover:opacity-100 transition-opacity flex items-center gap-1.5"
              >
                <Camera className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                <span>{t('사진 관리', 'Photo')}</span>
              </button>
            </div>

            {/* Direct caption below photo */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{t('신지영 프로필', 'Shin JiYoung profile')}</span>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Highlights Strip (Full-width row below the hero split) */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
              {t('학력 및 전공', 'Education')}
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t('중부대 정보보안공학과', 'Joongbu Univ. InfoSec')}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t('2027년 2월 졸업 예정', 'Exp. Feb 2027')}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
              {t('웹 개발 학습', 'Web development studies')}
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Java · Spring Boot
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t('게시판 · 회원 관리 실습', 'Board & member-management exercises')}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
              {t('대표 프로젝트', 'Featured project')}
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Meetup Log · 2026
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t('채팅 기반 영화 추천 서비스', 'Chat-based movie recommendations')}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
              {t('BookCast 담당 업무', 'BookCast responsibilities')}
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t('공공데이터 도서 검색', 'Public-data book search')}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t('사용자 등업 · 권한', 'Membership upgrades & permissions')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
