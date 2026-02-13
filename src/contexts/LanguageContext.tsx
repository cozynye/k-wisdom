'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import type { SupportedLanguage } from '@/types/proverb';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  // 초기 로드: LocalStorage에서 설정 불러오기
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as SupportedLanguage | null;
    if (savedLang) {
      setLanguageState(savedLang);
    } else {
      // 브라우저 언어 감지
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ko')) setLanguageState('en'); // 한국어는 한글 원문 + 영어
      else if (browserLang.startsWith('ja')) setLanguageState('ja');
      else if (browserLang.startsWith('zh')) setLanguageState('zh');
      else if (browserLang.startsWith('es')) setLanguageState('es');
      else if (browserLang.startsWith('fr')) setLanguageState('fr');
      else if (browserLang.startsWith('id')) setLanguageState('id');
      else if (browserLang.startsWith('th')) setLanguageState('th');
      else if (browserLang.startsWith('vi')) setLanguageState('vi');
      else setLanguageState('en');
    }
  }, []);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
