import { useLocale } from 'next-intl';

import { routesByLocale } from '@/i18n';

export default function useLocaleRoutes(href: string) {
  let locale = useLocale();
  if (locale === 'en') locale = '';

  const newHref = locale
    ? routesByLocale[href]?.[locale] || routesByLocale[href]?.alias || href
    : href;

  return newHref;
}
