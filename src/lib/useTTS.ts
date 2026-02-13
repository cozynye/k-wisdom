'use client';

import { useState, useCallback } from 'react';

export function useTTS() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback((text: string, lang: string = 'ko-KR') => {
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

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return { speak, stop, isSpeaking };
}
