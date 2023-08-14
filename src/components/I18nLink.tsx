import Link from 'next-intl/link';
import { ComponentProps } from 'react';

import useLocaleRoutes from '@/hooks/useLocaleRoutes';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function I18nLink({ href, ...props }: Props) {
  const newHref = useLocaleRoutes(href);
  return <Link href={newHref} {...props} />;
}
