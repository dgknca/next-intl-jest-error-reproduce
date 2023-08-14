import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));

export const routesByLocale: Record<string, Record<string, string>> = {
  '/sepet': {
    alias: '/cart',
  },
};
