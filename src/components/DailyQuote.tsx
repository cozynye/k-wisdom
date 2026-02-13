'use client';

import type { Proverb } from '@/types/proverb';
import AudioButton from './AudioButton';
import { useLanguage } from '@/contexts/LanguageContext';

interface DailyQuoteProps {
  proverb: Proverb;
}

export default function DailyQuote({ proverb }: DailyQuoteProps) {
  const { language } = useLanguage();
  const translation = proverb.translations[language];

  return (
    <div className="fade-in">
      {/* 날짜 헤더 */}
      <div className="text-center mb-8">
        <p className="text-sm text-text-sub dark:text-gray-400 font-lora">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h1 className="text-2xl font-bold text-accent-blue dark:text-blue-400 mt-2 font-nanum">
          오늘의 지혜 • Daily Wisdom
        </h1>
      </div>

      {/* 메인 카드 - 앱친화적 디자인 */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl dark:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
        {/* 한글 원문 */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white font-nanum leading-relaxed">
              {proverb.source.text}
            </h2>
            <AudioButton text={proverb.source.text} />
          </div>
          <p className="text-sm text-text-sub dark:text-gray-400 mt-2 font-lora italic">
            {proverb.source.romanization}
          </p>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

        {/* 번역 내용 */}
        <div className="text-center space-y-3">
          <p className="text-lg md:text-xl text-text-main dark:text-gray-100 font-lora font-semibold">
            {translation.text}
          </p>
          <p className="text-sm md:text-base text-text-sub dark:text-gray-300 font-lora leading-relaxed">
            {translation.meaning}
          </p>
        </div>

        {/* 태그 */}
        {proverb.tags && proverb.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {proverb.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-text-sub dark:text-gray-300 text-xs rounded-full font-lora"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 프로버브 ID 표시 (디버그용) */}
      <p className="text-center text-xs text-text-sub dark:text-gray-500 mt-4 font-lora">
        Proverb #{proverb.id} of 5
      </p>
    </div>
  );
}
