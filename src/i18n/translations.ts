import en from './en.json';
import es from './es.json';

export type Locale = 'en' | 'es';

export type TranslationSchema = typeof en;

export const translations: Record<Locale, TranslationSchema> = {
  en,
  es,
};

type Join<K extends string, P extends string> = P extends '' ? K : `${K}.${P}`;

type Paths<T> = T extends string
  ? ''
  : {
      [K in keyof T & string]: Join<K, Paths<T[K]>>;
    }[keyof T & string];

export type TranslationKey = Paths<TranslationSchema>;

function getByPath(source: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object' && segment in acc) {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, source);
}

export function translate(locale: Locale, key: TranslationKey): string {
  const value = getByPath(translations[locale], key);
  if (typeof value !== 'string') {
    if (import.meta.env.DEV) {
      console.warn(`[i18n] Missing translation for key "${key}" (locale: ${locale})`);
    }
    return key;
  }
  return value;
}
