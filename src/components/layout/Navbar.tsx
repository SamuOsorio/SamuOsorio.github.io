import { useLanguage } from '../../context/LanguageContext';
import { ThemeToggle } from '../controls/ThemeToggle';
import { LanguageToggle } from '../controls/LanguageToggle';

const NAV_LINKS = [
  { href: '#skills', key: 'nav.skills' as const },
  { href: '#projects', key: 'nav.projects' as const },
  { href: '#education', key: 'nav.education' as const },
  { href: '#contact', key: 'nav.contact' as const },
];

export function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Samuel Osorio
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      <nav className="flex items-center gap-4 overflow-x-auto border-t border-slate-200/80 px-4 py-2 sm:hidden dark:border-slate-800/80">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            {t(link.key)}
          </a>
        ))}
      </nav>
    </header>
  );
}
