'use client';

import { useState } from 'react';
import type { Proverb, SupportedLanguage } from '@/types/proverb';
import AudioButton from './AudioButton';

interface DailyQuoteProps {
  proverb: Proverb;
}

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  en: 'English',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  id: 'Indonesia',
  th: 'ไทย',
  vi: 'Tiếng Việt',
};

export default function DailyQuote({ proverb }: DailyQuoteProps) {
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>('en');

  const translation = proverb.translations[selectedLang];

  return (
    <div className="fade-in">
      {/* 날짜 헤더 */}
      <div className="text-center mb-8">
        <p className="text-sm text-text-sub font-lora">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h1 className="text-2xl font-bold text-accent-blue mt-2 font-nanum">
          오늘의 지혜 • Daily Wisdom
        </h1>
      </div>

      {/* 메인 카드 */}
      <div className="bg-white rounded-lg p-8 md:p-12 card-shadow">
        {/* 한글 원문 */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main font-nanum leading-relaxed">
              {proverb.source.text}
            </h2>
            <AudioButton text={proverb.source.text} />
          </div>
          <p className="text-sm text-text-sub mt-2 font-lora italic">
            {proverb.source.romanization}
          </p>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* 언어 선택 버튼 */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {(Object.keys(proverb.translations) as SupportedLanguage[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedLang === lang
                  ? 'bg-accent-blue text-white'
                  : 'bg-gray-100 text-text-sub hover:bg-gray-200'
              }`}
            >
              {LANGUAGE_LABELS[lang]}
            </button>
          ))}
        </div>

        {/* 번역 내용 */}
        <div className="text-center space-y-3">
          <p className="text-lg md:text-xl text-text-main font-lora font-semibold">
            {translation.text}
          </p>
          <p className="text-sm md:text-base text-text-sub font-lora leading-relaxed">
            {translation.meaning}
          </p>
        </div>

        {/* 태그 */}
        {proverb.tags && proverb.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {proverb.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-paper text-text-sub text-xs rounded-full font-lora"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 프로버브 ID 표시 (디버그용, 나중에 제거 가능) */}
      <p className="text-center text-xs text-text-sub mt-4 font-lora">
        Proverb #{proverb.id} of 5
      </p>
    </div>
  );
}
