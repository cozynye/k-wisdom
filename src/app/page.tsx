import { getTodayProverb } from '@/lib/getProverb';
import DailyQuote from '@/components/DailyQuote';
import Header from '@/components/Header';

export default function Home() {
  const todayProverb = getTodayProverb();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12 pt-24">
        <div className="w-full max-w-3xl mx-auto">
          <DailyQuote proverb={todayProverb} />
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 right-0 text-center text-xs text-text-sub dark:text-gray-400">
          <p className="font-lora">
            © 2025 Daily K-Wisdom • Made with{' '}
            <span className="text-accent-red dark:text-red-400">♥</span> for Korean culture lovers
          </p>
        </footer>
      </main>
    </>
  );
}
