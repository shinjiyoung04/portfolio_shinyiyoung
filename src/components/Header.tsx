import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenQuickScan: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuickScan }) => {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', labelKo: '소개', labelEn: 'About' },
    { href: '#projects', labelKo: '프로젝트', labelEn: 'Projects' },
    { href: '#problem-solving', labelKo: '문제 해결', labelEn: 'Case Studies' },
    { href: '#education', labelKo: '학력·자격', labelEn: 'Education' },
    { href: '#resume', labelKo: '이력서', labelEn: 'Resume' },
    { href: '#contact', labelKo: '연락처', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-2 text-slate-900 dark:text-white font-bold tracking-tight text-base sm:text-lg whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          <span>신지영</span>
          <span className="text-slate-300 dark:text-slate-700 font-normal">/</span>
          <span className="font-medium text-slate-600 dark:text-slate-400 text-sm sm:text-base">Shin JiYoung</span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t(item.labelKo, item.labelEn)}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* 30-Second Recruiter Quick Scan Button */}
          <button
            onClick={onOpenQuickScan}
            title={t('채용담당자를 위한 30초 핵심 요약', '30-Second Recruiter Summary')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors whitespace-nowrap"
          >
            <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{t('30초 요약', '30s Summary')}</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="px-2.5 py-1.5 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            {lang === 'ko' ? 'EN' : '한국어'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-5 space-y-2">
          <div className="pb-2 border-b border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickScan();
              }}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 rounded-md"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{t('30초 핵심 요약', '30s Summary')}</span>
            </button>
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t(item.labelKo, item.labelEn)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
