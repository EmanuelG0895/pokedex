import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
 
export default function HomePage() {
  const t = useTranslations('Navbar');
  return (
    <div>
      <h1>{t('home')}</h1>
      <Link href="/">{t('favorites')}</Link>
    </div>
  );
}