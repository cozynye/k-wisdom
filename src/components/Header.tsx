'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SupportedLanguage } from '@/types/proverb';
import SettingsModal from './SettingsModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LANGUAGE_OPTIONS: Record<SupportedLanguage, string> = {
  en: 'English',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  id: 'Indonesia',
  th: 'ไทย',
  vi: 'Tiếng Việt',
};

const LANGUAGE_CODES: Record<SupportedLanguage, string> = {
  en: 'EN',
  ja: 'JA',
  zh: 'ZH',
  es: 'ES',
  fr: 'FR',
  id: 'ID',
  th: 'TH',
  vi: 'VI',
};

export default function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-b border-neon-pink/20 dark:border-electric-purple/20 shadow-lg shadow-neon-pink/5 dark:shadow-electric-purple/10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo with glow */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
            <Image
              src="/icons/k-wisdom-icon.png"
              alt="K-Wisdom Logo"
              width={40}
              height={40}
              className="relative rounded-xl transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Language Dropdown - Modern */}
            <DropdownMenu>
              <DropdownMenuTrigger className="h-10 flex items-center gap-2 px-4 rounded-full bg-gradient-to-r from-neon-pink/10 to-electric-purple/10 hover:from-neon-pink/20 hover:to-electric-purple/20 border border-neon-pink/20 dark:border-electric-purple/30 transition-all duration-300 hover:scale-105 focus:outline-none group">
                <span className="text-lg">🌍</span>
                <span className="text-sm font-display font-semibold text-gray-900 dark:text-white">
                  {LANGUAGE_CODES[language]}
                </span>
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-neon-pink dark:group-hover:text-electric-purple transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-neon-pink/20 dark:border-electric-purple/20 shadow-xl">
                {(Object.keys(LANGUAGE_OPTIONS) as SupportedLanguage[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`cursor-pointer font-body transition-all ${
                      language === lang
                        ? 'bg-gradient-to-r from-neon-pink to-electric-purple text-white font-semibold'
                        : 'text-gray-900 dark:text-gray-200 hover:bg-neon-pink/10 dark:hover:bg-electric-purple/10'
                    }`}
                  >
                    <span className="flex items-center justify-between w-full">
                      {LANGUAGE_OPTIONS[lang]}
                      {language === lang && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Settings Button - Modern */}
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10 hover:from-neon-pink/20 hover:to-neon-cyan/20 border border-neon-pink/20 dark:border-neon-cyan/30 transition-all duration-300 hover:scale-110 hover:rotate-90 group"
              aria-label="Settings"
              title="설정"
            >
              <svg
                className="w-5 h-5 text-gray-900 dark:text-white group-hover:text-neon-pink dark:group-hover:text-neon-cyan transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Settings Modal */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}
