import { useLanguage } from '../../context/LanguageContext';

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t('language.toggleLabel')}
      title={t('language.toggleLabel')}
      className="inline-flex h-9 items-center justify-center rounded-full border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
