'use client';

import { useTTS } from '@/lib/useTTS';

interface AudioButtonProps {
  text: string;
  lang?: string;
}

export default function AudioButton({ text, lang = 'ko-KR' }: AudioButtonProps) {
  const { speak, isSpeaking } = useTTS();

  const handleClick = () => {
    speak(text, lang);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-red text-white hover:bg-red-700 transition-all ${
        isSpeaking ? 'pulse-animation' : ''
      }`}
      aria-label="Listen to pronunciation"
      title="한글 발음 듣기"
    >
      <span className="text-xl">{isSpeaking ? '🔊' : '🔈'}</span>
    </button>
  );
}
