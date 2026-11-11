'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { CurrentYear } from '@/components/ui/CurrentYear';
import { MailIcon, PinIcon } from '@/components/ui/icons';
import { RouteConstants, CompanyConstants } from '@constants';
import { getDictionary, localePath, type Locale } from '@/i18n';

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
