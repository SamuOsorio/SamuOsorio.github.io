import { Mail, Phone } from 'lucide-react';
import { Section } from '../common/Section';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export function ContactSection() {
  const { t } = useLanguage();

  const links = [
    { key: 'contact.email', label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    {
      key: 'contact.phone',
      label: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, '')}`,
      icon: Phone,
    },
    {
      key: 'contact.linkedin',
      label: 'linkedin.com/in/samuel-osorio-rodriguez',
      href: profile.linkedin,
      icon: LinkedinIcon,
    },
    { key: 'contact.github', label: 'github.com/SamuOsorio', href: profile.github, icon: GithubIcon },
  ] as const;

  return (
    <Section id="contact" heading={t('contact.heading')} subheading={t('contact.invite')}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {links.map(({ key, label, href, icon: Icon }) => (
          <a
            key={key}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-indigo-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-700"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <Icon size={18} />
            </span>
            <span>
              <span className="block text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                {t(key)}
              </span>
              <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">{label}</span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
