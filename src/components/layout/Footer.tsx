'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { CurrentYear } from '@/components/ui/CurrentYear';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, PinIcon } from '@/components/ui/icons';
import { RouteConstants, CompanyConstants } from '@constants';
import { getDictionary, localePath, type Locale } from '@/i18n';

const socialLinks = [
  {
    name: 'WhatsApp',
    href: CompanyConstants.WHATSAPP,
    color:
      'text-[#128c4a] bg-[#25d366]/12 border-[#25d366]/40 dark:text-[#42be65] dark:bg-[#42be65]/10 dark:border-[#42be65]/30 hover:bg-[#25d366] hover:text-white dark:hover:bg-[#42be65] dark:hover:text-slate-900',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const navLinks = {
    company: [
      { name: t.nav.home, href: localePath(locale, RouteConstants.HOME) },
      { name: t.nav.about, href: localePath(locale, RouteConstants.ABOUT) },
      { name: t.nav.services, href: localePath(locale, RouteConstants.SERVICES) },
      { name: t.nav.clients, href: localePath(locale, RouteConstants.CLIENTS) },
      { name: t.nav.contact, href: localePath(locale, RouteConstants.CONTACT) },
    ],
  };

  return (
    <footer className="relative bg-white dark:bg-[#161616] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors pt-20">
      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* ── Brand & Description ── */}
          <div className="lg:col-span-1 space-y-8">
            <Link href={localePath(locale, RouteConstants.HOME)}>
              <Logo locale={locale} />
            </Link>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">
              {t.footer.description}
            </p>

            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-150 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Exploration Links ── */}
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-6 text-xs uppercase tracking-[0.2em] rtl:tracking-normal">
              {t.footer.explore}
            </h3>
            <ul className="space-y-4">
              {navLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-500 text-sm font-medium transition-all flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-orange-500 me-0 group-hover:me-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Reach Us ── */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-[0.2em] rtl:tracking-normal">
              {t.footer.reachUs}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-sm">
                <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                  <PhoneIcon className="h-5 w-5 text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider rtl:tracking-normal text-slate-600 dark:text-slate-400 font-bold">
                    {t.footer.callCenter}
                  </span>
                  <a
                    href={`tel:${CompanyConstants.PHONE_HREF}`}
                    className="hover:text-orange-500 font-bold transition-colors"
                  >
                    <bdi dir="ltr">{CompanyConstants.PHONE}</bdi>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-sm">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <MailIcon className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider rtl:tracking-normal text-slate-600 dark:text-slate-400 font-bold">
                    {t.footer.inquiries}
                  </span>
                  <a
                    href={`mailto:${CompanyConstants.EMAIL}`}
                    className="hover:text-orange-500 font-bold transition-colors truncate max-w-[180px]"
                  >
                    <bdi dir="ltr">{CompanyConstants.EMAIL}</bdi>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-sm">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <PinIcon className="h-5 w-5 text-green-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider rtl:tracking-normal text-slate-600 dark:text-slate-400 font-bold">
                    {t.footer.mainOffice}
                  </span>
                  <span className="font-bold">{t.company.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Final Credits ── */}
        <div className="border-t border-slate-200 dark:border-white/[0.06] pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-slate-600 dark:text-slate-400 text-xs font-medium uppercase tracking-widest rtl:tracking-normal text-center md:text-start">
                © <CurrentYear /> {t.company.fullName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
