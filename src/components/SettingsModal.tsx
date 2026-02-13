'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SupportedLanguage } from '@/types/proverb';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LANGUAGE_OPTIONS: Record<SupportedLanguage, string> = {
  en: 'English',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  id: 'Indonesia',
  th: 'ไทย',
  vi: 'Tiếng Việt',
};

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="bottom"
        className="max-h-[85vh] overflow-y-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t-2 border-neon-pink/30 dark:border-electric-purple/30"
      >
        <SheetHeader className="border-b border-neon-pink/20 dark:border-electric-purple/20 pb-4">
          <SheetTitle className="text-xl font-bold font-display bg-gradient-to-r from-neon-pink via-electric-purple to-neon-cyan bg-clip-text text-transparent flex items-center gap-2">
            <span>⚙️</span>
            <span>Settings</span>
          </SheetTitle>
        </SheetHeader>

        {/* Content */}
        <div className="py-6 space-y-6">
          {/* Dark Mode */}
          <div>
            <h3 className="text-sm font-semibold font-display text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span>🌙</span>
              <span>Dark Mode</span>
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => setTheme('light')}
                className={`flex-1 py-3 px-4 min-h-[48px] rounded-xl border-2 font-medium font-body transition-all active:scale-95 ${
                  theme === 'light'
                    ? 'border-neon-pink bg-gradient-to-r from-neon-pink to-coral text-white shadow-lg shadow-neon-pink/30'
                    : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-300 hover:border-neon-pink dark:hover:border-neon-pink hover:scale-105'
                }`}
              >
                ☀️ Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex-1 py-3 px-4 min-h-[48px] rounded-xl border-2 font-medium font-body transition-all active:scale-95 ${
                  theme === 'dark'
                    ? 'border-electric-purple bg-gradient-to-r from-electric-purple to-soft-lavender text-white shadow-lg shadow-electric-purple/30'
                    : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-300 hover:border-electric-purple dark:hover:border-electric-purple hover:scale-105'
                }`}
              >
                🌙 Dark
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`flex-1 py-3 px-4 min-h-[48px] rounded-xl border-2 font-medium font-body transition-all active:scale-95 ${
                  theme === 'system'
                    ? 'border-neon-cyan bg-gradient-to-r from-neon-cyan to-electric-purple text-white shadow-lg shadow-neon-cyan/30'
                    : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-300 hover:border-neon-cyan dark:hover:border-neon-cyan hover:scale-105'
                }`}
              >
                🖥️ Auto
              </button>
            </div>
          </div>

          {/* Language */}
          <div>
            <h3 className="text-sm font-semibold font-display text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span>🌍</span>
              <span>Language</span>
            </h3>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
              className="w-full p-4 min-h-[52px] rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white font-body text-base focus:border-neon-pink dark:focus:border-electric-purple focus:outline-none focus:ring-2 focus:ring-neon-pink/20 dark:focus:ring-electric-purple/20 transition-all hover:scale-[1.02]"
            >
              {Object.entries(LANGUAGE_OPTIONS).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <SheetFooter className="border-t border-neon-pink/20 dark:border-electric-purple/20 pt-4">
          <button
            onClick={onClose}
            className="w-full py-4 px-6 min-h-[56px] bg-gradient-to-r from-neon-pink via-electric-purple to-neon-cyan hover:shadow-2xl hover:shadow-neon-pink/40 text-white text-lg rounded-2xl font-semibold font-display shadow-lg active:scale-95 transition-all duration-300 hover:scale-[1.02]"
          >
            Done
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
