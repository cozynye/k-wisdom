'use client';

import { useCallback, useState } from 'react';
import html2canvas from 'html2canvas';

export function useShareCard() {
  const [isGenerating, setIsGenerating] = useState(false);

  const shareCard = useCallback(async (cardElement: HTMLElement | null, title: string) => {
    if (!cardElement) {
      console.error('Share card element not found');
      return;
    }

    setIsGenerating(true);

    try {
      // html2canvas로 DOM을 이미지로 변환
      const canvas = await html2canvas(cardElement, {
        scale: 2, // 레티나 디스플레이 대응 (고해상도)
        backgroundColor: '#FFF9F0',
        useCORS: true, // CORS 이슈 방지
        logging: false,
      });

      // Canvas를 Blob으로 변환
      canvas.toBlob(async (blob) => {
        if (!blob) {
          throw new Error('Failed to generate image');
        }

        const file = new File([blob], 'daily-k-wisdom.png', { type: 'image/png' });

        // Web Share API 지원 확인 (모바일)
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: 'Daily K-Wisdom',
              text: title,
              files: [file],
            });
          } catch (error) {
            // 사용자가 공유 취소한 경우 무시
            if ((error as Error).name !== 'AbortError') {
              console.error('Share failed:', error);
            }
          }
        } else {
          // Web Share API 미지원 (PC 등): 다운로드 처리
          const link = document.createElement('a');
          link.download = 'daily-k-wisdom.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        }
      }, 'image/png');
    } catch (error) {
      console.error('Image generation failed:', error);
      alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return { shareCard, isGenerating };
}
