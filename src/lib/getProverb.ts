import proverbsData from '@/../../public/data/proverbs.json';
import type { Proverb } from '@/types/proverb';

const proverbs = proverbsData as Proverb[];

export function getTodayProverb(): Proverb {
  const today = new Date();

  // 자정(00:00) 기준으로 날짜 계산
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // 연도 시작부터의 일수 계산
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = startOfDay.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  // 순환 인덱스 계산
  const index = dayOfYear % proverbs.length;

  return proverbs[index];
}

export function getProverbById(id: number): Proverb | undefined {
  return proverbs.find(p => p.id === id);
}

export function getAllProverbs(): Proverb[] {
  return proverbs;
}
