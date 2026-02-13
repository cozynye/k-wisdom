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
      <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-text-main dark:text-white font-nanum flex items-center gap-2">
            <span>⚙️</span>
            <span>Settings</span>
          </SheetTitle>
        </SheetHeader>

        {/* Content */}
        <div className="py-6 space-y-6">
          {/* Dark Mode */}
          <div>
            <h3 className="text-sm font-semibold text-text-main dark:text-white mb-3 flex items-center gap-2">
              <span>🌙</span>
              <span>Dark Mode</span>
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => setTheme('light')}
                className={`flex-1 py-3 px-4 min-h-[48px] rounded-xl border-2 font-medium transition-all active:scale-95 ${
                  theme === 'light'
                    ? 'border-accent-blue bg-accent-blue text-white shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 text-text-main dark:text-gray-300 hover:border-accent-blue dark:hover:border-blue-400'
                }`}
              >
                ☀️ Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex-1 py-3 px-4 min-h-[48px] rounded-xl border-2 font-medium transition-all active:scale-95 ${
                  theme === 'dark'
                    ? 'border-accent-blue bg-accent-blue text-white shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 text-text-main dark:text-gray-300 hover:border-accent-blue dark:hover:border-blue-400'
                }`}
              >
                🌙 Dark
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`flex-1 py-3 px-4 min-h-[48px] rounded-xl border-2 font-medium transition-all active:scale-95 ${
                  theme === 'system'
                    ? 'border-accent-blue bg-accent-blue text-white shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 text-text-main dark:text-gray-300 hover:border-accent-blue dark:hover:border-blue-400'
                }`}
              >
                🖥️ Auto
              </button>
            </div>
          </div>

          {/* Language */}
          <div>
            <h3 className="text-sm font-semibold text-text-main dark:text-white mb-3 flex items-center gap-2">
              <span>🌍</span>
              <span>Language</span>
            </h3>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
              className="w-full p-4 min-h-[52px] rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white font-lora text-base focus:border-accent-blue dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all"
            >
              {Object.entries(LANGUAGE_OPTIONS).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <SheetFooter>
          <button
            onClick={onClose}
            className="w-full py-4 px-6 min-h-[56px] bg-accent-blue hover:bg-blue-800 text-white text-lg rounded-2xl font-semibold shadow-lg active:scale-95 transition-all"
          >
            Done
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
