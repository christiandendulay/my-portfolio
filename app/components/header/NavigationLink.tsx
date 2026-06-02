import Link from 'next/link';
import { NavigationItem } from '@/types/contentful';

export function NavigationLink({
  item,
  onClick,
}: {
  item: NavigationItem | null;
  onClick?: () => void;
}) {
  if (!item) return null;

  const { label, url, isExternal } = item;

  const baseClasses = 'text-sm font-medium transition-colors duration-200';
  const colorClasses =
    'text-[#3D4F4F] dark:text-[#C4C4BE] hover:text-[#4A8B8B] dark:hover:text-[#5CA8A8]';

  if (!url) {
    return <span className={`${baseClasses} ${colorClasses} cursor-default`}>{label}</span>;
  }
  // External link
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

  // Anchor link — smooth scroll
  if (url?.startsWith('#')) {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      onClick?.();
    };

    return (
      <a href={url} onClick={handleClick} className={`${baseClasses} ${colorClasses}`}>
        {label}
      </a>
    );
  }

  // Internal page link
  return (
    <Link href={url} onClick={onClick} className={`${baseClasses} ${colorClasses}`}>
      {label}
    </Link>
  );
}
