import { getTodayProverb } from '@/lib/getProverb';
import DailyQuote from '@/components/DailyQuote';

export default function Home() {
  const todayProverb = getTodayProverb();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-3xl mx-auto">
        <DailyQuote proverb={todayProverb} />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 text-center text-xs text-text-sub">
        <p className="font-lora">
          © 2025 Daily K-Wisdom • Made with{' '}
          <span className="text-accent-red">♥</span> for Korean culture lovers
        </p>
      </footer>
    </main>
  );
}
