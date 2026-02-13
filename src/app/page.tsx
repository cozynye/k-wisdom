import { getTodayProverb } from '@/lib/getProverb';
import DailyQuote from '@/components/DailyQuote';
import Header from '@/components/Header';

export default function Home() {
  const todayProverb = getTodayProverb();

  return (
    <>
      <Header />

      {/* Dynamic Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-electric-purple/20 to-neon-cyan/20 dark:from-neon-pink/30 dark:via-electric-purple/30 dark:to-neon-cyan/30" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-pink/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-cyan/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl animate-pulse-slow" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-hanji-texture" />
      </div>

      <main className="relative flex min-h-screen flex-col items-center justify-center p-6 md:p-12 pt-24 pb-20">
        <div className="w-full max-w-3xl mx-auto">
          <DailyQuote proverb={todayProverb} />
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 right-0 text-center text-xs text-gray-600 dark:text-gray-400">
          <p className="font-body">
            © 2025 K-Wisdom • Made with{' '}
            <span className="text-neon-pink dark:text-coral">♥</span> for Korean culture lovers
          </p>
        </footer>
      </main>
    </>
  );
}
