import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

import en from '@/messages/en.json';
import tr from '@/messages/tr.json';

const defaultProviderProps: any = {
  locale: 'en',
  messages: {
    tr,
    en,
  },
};

test.customRender = (
  ui: ReactNode,
  { providerProps, ...renderOptions }: any = {},
) => {
  const locale = providerProps?.locale || defaultProviderProps.locale;
  return render(
    <NextIntlClientProvider
      locale={locale}
      messages={{
        ...defaultProviderProps.messages[locale],
        ...(providerProps?.messages || {}),
      }}>
      {ui}
    </NextIntlClientProvider>,
    renderOptions,
  );
};

test.genProviderProps = (locale: string, messages: any = {}) => ({
  providerProps: {
    locale,
    messages,
  },
});
