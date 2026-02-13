'use client';

import { useRef } from 'react';
import type { Proverb } from '@/types/proverb';
import AudioButton from './AudioButton';
import ShareCard from './ShareCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useShareCard } from '@/lib/useShareCard';

interface DailyQuoteProps {
  proverb: Proverb;
}

export default function DailyQuote({ proverb }: DailyQuoteProps) {
  const { language } = useLanguage();
  const translation = proverb.translations[language];
  const shareCardRef = useRef<HTMLDivElement>(null);
  const { shareCard, isGenerating } = useShareCard();

  const handleShare = () => {
    shareCard(shareCardRef.current, proverb.source.text);
  };

  return (
    <div className="fade-in space-y-8">
      {/* 날짜 헤더 - Modernized */}
      <div className="text-center space-y-2">
        <p className="text-sm font-body text-gray-600 dark:text-gray-400 tracking-wide uppercase">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold font-nanum bg-gradient-to-r from-neon-pink via-electric-purple to-neon-cyan bg-clip-text text-transparent">
          오늘의 지혜 • Daily Wisdom
        </h1>
      </div>

      {/* Glassmorphism Card */}
      <div className="group relative">
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-electric-purple to-neon-cyan rounded-[2rem] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

        {/* Main card */}
        <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-800/50 transition-all duration-500 hover:shadow-neon-pink/20 hover:scale-[1.02]">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-pink/20 to-electric-purple/20 rounded-bl-[4rem] rounded-tr-[2rem] blur-2xl" />

          {/* 한글 원문 */}
          <div className="relative text-center mb-8 space-y-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <h2 className="text-3xl md:text-4xl font-bold font-nanum text-gray-900 dark:text-white leading-relaxed tracking-tight">
                {proverb.source.text}
              </h2>
              <AudioButton text={proverb.source.text} />
            </div>
            <p className="text-sm font-body text-gray-500 dark:text-gray-400 tracking-wider">
              {proverb.source.romanization}
            </p>
          </div>

          {/* Gradient divider */}
          <div className="relative h-[2px] w-full my-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent" />
          </div>

          {/* 번역 내용 */}
          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl font-display font-semibold text-gray-900 dark:text-white">
              {translation.text}
            </p>
            <p className="text-base md:text-lg font-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {translation.meaning}
            </p>
          </div>

          {/* 태그 - Vibrant pills */}
          {proverb.tags && proverb.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {proverb.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-neon-pink/10 to-electric-purple/10 hover:from-neon-pink/20 hover:to-electric-purple/20 border border-neon-pink/20 dark:border-electric-purple/30 text-neon-pink dark:text-electric-purple text-xs font-display font-semibold rounded-full transition-all duration-300 hover:scale-110 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* 액션 버튼 - 카드 하단 */}
          <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-purple to-neon-cyan rounded-full opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300" />
              <button
                onClick={handleShare}
                disabled={isGenerating}
                className="relative flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-electric-purple to-neon-cyan hover:from-neon-cyan hover:to-electric-purple text-white border-2 border-electric-purple/30 hover:border-neon-cyan transition-all duration-300 shadow-lg shadow-electric-purple/30 hover:shadow-xl hover:shadow-neon-cyan/50 active:scale-95 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-display font-semibold"
                aria-label="Share quote as image"
                title="이미지로 공유하기"
              >
                <span className="text-xl">{isGenerating ? '⏳' : '📤'}</span>
                <span className="text-sm">이미지로 공유</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Debug info - Subtle */}
      <p className="text-center text-xs font-body text-gray-400 dark:text-gray-600">
        Proverb #{proverb.id} of 5
      </p>

      {/* Hidden ShareCard for image generation */}
      <ShareCard ref={shareCardRef} proverb={proverb} translation={translation.text} />
    </div>
  );
}
