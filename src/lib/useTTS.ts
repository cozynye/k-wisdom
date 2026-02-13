'use client';

import { useState, useCallback } from 'react';

interface TTSOptions {
  onWordChange?: (wordIndex: number) => void;
  onComplete?: () => void;
}

export function useTTS() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);

  const speak = useCallback((text: string, lang: string = 'ko-KR', options?: TTSOptions) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.warn('Web Speech API is not supported in this browser.');
      return;
    }

    // 기존 발화 중지
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9; // 약간 느리게
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // 텍스트를 단어/음절로 분리 (한글 처리)
    const words = text.split(/(\s+|[,.!?;:])/g).filter(word => word.trim().length > 0);
    const totalWords = words.length;

    // 평균 음절당 재생 시간 (초) - rate 0.9 기준
    const syllableTime = lang.startsWith('ko') ? 0.35 : 0.25;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentWordIndex(0);
      options?.onWordChange?.(0);

      // 단어별 하이라이트 타이밍 계산
      let currentTime = 0;
      let wordIndex = 0;

      const highlightWords = () => {
        if (wordIndex < totalWords) {
          const currentWord = words[wordIndex];
          // 한글 음절 수 계산 (한글: 2-3자당 1초, 영어: 3-4자당 1초)
          const syllableCount = lang.startsWith('ko')
            ? currentWord.length
            : Math.ceil(currentWord.length / 1.5);

          const wordDuration = syllableCount * syllableTime * 1000; // ms

          setTimeout(() => {
            setCurrentWordIndex(wordIndex);
            options?.onWordChange?.(wordIndex);
            wordIndex++;
            highlightWords();
          }, currentTime);

          currentTime += wordDuration;
        }
      };

      highlightWords();
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentWordIndex(-1);
      options?.onWordChange?.(-1);
      options?.onComplete?.();
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
      setCurrentWordIndex(-1);
      options?.onWordChange?.(-1);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentWordIndex(-1);
    }
  }, []);

  return { speak, stop, isSpeaking, currentWordIndex };
}
