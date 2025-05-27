import { NextIntlClientProvider, hasLocale } from "next-intl";


export default  function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
