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
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-coral rounded-full opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300" />

      <Button
        onClick={handleClick}
        size="icon"
        className={`relative w-12 h-12 rounded-full bg-gradient-to-r from-neon-pink to-coral hover:from-coral hover:to-neon-pink text-white border-2 border-neon-pink/30 hover:border-neon-pink transition-all duration-300 shadow-lg shadow-neon-pink/30 hover:shadow-xl hover:shadow-neon-pink/50 active:scale-95 hover:scale-110 ${
          isSpeaking ? 'animate-pulse' : ''
        }`}
        aria-label="Listen to pronunciation"
        title="한글 발음 듣기"
      >
        <span className="text-2xl">{isSpeaking ? '🔊' : '🔈'}</span>
      </Button>
    </div>
  );
}
