export interface Translation {
  text: string;
  meaning: string;
}

export interface Proverb {
  id: number;
  type: "proverb";
  tags: string[];
  source: {
    text: string;
    romanization: string;
    author: string | null;
  };
  translations: {
    en: Translation;
    ja: Translation;
    zh: Translation;
    es: Translation;
    fr: Translation;
    id: Translation;
    th: Translation;
    vi: Translation;
  };
}

export type SupportedLanguage = keyof Proverb['translations'];
