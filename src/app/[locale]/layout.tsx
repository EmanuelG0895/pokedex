import { NextIntlClientProvider, hasLocale } from "next-intl";
import Navbar from "@/components/navbar";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <NextIntlClientProvider>
      <Navbar />
      {children}
    </NextIntlClientProvider>
  );
}
