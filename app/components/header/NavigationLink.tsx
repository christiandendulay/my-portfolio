import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { NavigationItem } from '@/types/contentful';

export function NavigationLink({
  item,
  onClick,
}: {
  item: NavigationItem | null;
  onClick?: () => void;
}) {
  if (!item) return null;

  const router = useRouter();
  const pathname = usePathname();
  const { label, url, isExternal } = item;

  const baseClasses = 'hover:underline text-sm font-medium transition-colors duration-200';
  const colorClasses =
    'text-[#3D4F4F] dark:text-[#C4C4BE] hover:text-[#4A8B8B] dark:hover:text-[#5CA8A8]';

  if (!url) {
    return <span className={`${baseClasses} ${colorClasses} cursor-default`}>{label}</span>;
  }

  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`${baseClasses} ${colorClasses}`}
      >
        {label}
      </a>
    );
  }

  if (url?.startsWith('#')) {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();

      // If already on home page, just scroll
      if (pathname === '/') {
        const element = document.querySelector(url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        onClick?.();
        return;
      }

      // If on another page, navigate to home first, then scroll after navigation
      router.push(`/${url}`);
      onClick?.();
    };

    return (
      <a href={`/${url}`} onClick={handleClick} className={`${baseClasses} ${colorClasses}`}>
        {label}
      </a>
    );
  }

  return (
    <Link href={url} onClick={onClick} className={`${baseClasses} ${colorClasses}`}>
      {label}
    </Link>
  );
}
