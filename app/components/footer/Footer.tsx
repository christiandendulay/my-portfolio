import { getSocialLinks } from '@/lib/contact-me';
import { Icon, IconName } from '../icons';
import { getHeaderNavigation } from '@/lib/header-navigation';

export async function Footer() {
  const socials = await getSocialLinks();
  const { logoText } = await getHeaderNavigation();

  if (!socials) return null;

  return (
    <footer className="border-border mt-24 border-t py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-muted text-sm">
          <a
            href={'/#about'}
            className="text-md font-bold tracking-tight text-[#2C3E3E] transition-colors duration-200 hover:text-[#4A8B8B] hover:underline dark:text-[#E8E4DC] dark:hover:text-[#5CA8A8]"
          >
            {logoText}
          </a>
        </div>
        <ul className="flex items-center gap-4" aria-label="Social links">
          {socials.map((link) => (
            <li key={link?.sys.id}>
              <a
                href={link?.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-teal transition-colors"
                title={link?.platformName!}
              >
                <Icon
                  name={(link?.platformName?.toLowerCase() as IconName) || 'fallback'}
                  className="h-5 w-5"
                />
                <span className="sr-only">{link?.platformName}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
