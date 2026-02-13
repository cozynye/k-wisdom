'use client';

import { useTTS } from '@/lib/useTTS';
import { Button } from '@/components/ui/button';

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
    <Button
      onClick={handleClick}
      size="icon"
      className={`w-12 h-12 rounded-full bg-accent-red hover:bg-red-700 text-white transition-all shadow-lg active:scale-95 ${
        isSpeaking ? 'pulse-animation' : ''
      }`}
      aria-label="Listen to pronunciation"
      title="한글 발음 듣기"
    >
      <span className="text-2xl">{isSpeaking ? '🔊' : '🔈'}</span>
    </Button>
  );
}
