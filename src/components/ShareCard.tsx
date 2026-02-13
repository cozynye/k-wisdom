'use client';

import { forwardRef } from 'react';
import type { Proverb } from '@/types/proverb';
import Image from 'next/image';

interface ShareCardProps {
  proverb: Proverb;
  translation: string;
}

const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  ({ proverb, translation }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute left-[-9999px] top-0"
        style={{
          width: '1080px',
          height: '1920px',
        }}
      >
        {/* Instagram Story 최적화 카드 (1080x1920px) */}
        <div
          className="relative w-full h-full flex flex-col items-center justify-center p-20"
          style={{
            background: 'linear-gradient(135deg, #FFF9F0 0%, #FFE8D6 100%)',
          }}
        >
          {/* 한지 텍스처 오버레이 */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05' /%3E%3C/svg%3E")`,
            }}
          />

          {/* 메인 콘텐츠 */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1">
            {/* 한글 명언 */}
            <h1
              className="font-nanum text-[120px] leading-[1.5] text-gray-900 text-center mb-12"
              style={{
                fontFamily: "'Nanum Myeongjo', serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              {proverb.source.text}
            </h1>

            {/* 로마자 발음 */}
            <p
              className="text-[48px] text-gray-600 text-center mb-16"
              style={{
                fontFamily: "'Lora', serif",
                fontStyle: 'italic',
              }}
            >
              {proverb.source.romanization}
            </p>

            {/* 영어 번역 */}
            <p
              className="text-[56px] text-gray-700 text-center max-w-[900px] leading-[1.6]"
              style={{
                fontFamily: "'Lora', serif",
              }}
            >
              {translation}
            </p>

            {/* 장식 요소 - 한국 전통 도장 느낌 */}
            <div className="mt-20">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #C62828 0%, #8B1010 100%)',
                  boxShadow: '0 4px 12px rgba(198, 40, 40, 0.4)',
                }}
              >
                <span className="text-white text-[64px] font-bold">智</span>
              </div>
            </div>
          </div>

          {/* 하단 브랜딩 */}
          <div className="relative z-10 flex flex-col items-center gap-6 pb-12">
            {/* 로고 */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/icons/k-wisdom-icon.png"
                  alt="K-Wisdom"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <span
                className="text-[44px] font-bold text-gray-800"
                style={{
                  fontFamily: "'Nanum Myeongjo', serif",
                }}
              >
                Daily K-Wisdom
              </span>
            </div>

            {/* URL */}
            <p className="text-[36px] text-gray-600">k-wisdom.vercel.app</p>

            {/* 태그라인 */}
            <p
              className="text-[32px] text-gray-500 italic"
              style={{
                fontFamily: "'Lora', serif",
              }}
            >
              Discover Korean wisdom daily
            </p>
          </div>
        </div>
      </div>
    );
  }
);

ShareCard.displayName = 'ShareCard';

export default ShareCard;
