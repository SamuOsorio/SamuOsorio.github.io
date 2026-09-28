import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translate, type Locale, type TranslationKey } from '../i18n/translations';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'locale';

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through to default
  }
  if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('es')) {
    return 'es';
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore persistence failures
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);
  const toggleLocale = () => setLocaleState((prev) => (prev === 'en' ? 'es' : 'en'));
  const t = (key: TranslationKey) => translate(locale, key);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
