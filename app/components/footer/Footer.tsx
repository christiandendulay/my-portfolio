// app/components/Footer.tsx
import { getContactMe } from '@/lib/contact-me';
import { Icon, IconName } from '../icons';

export async function Footer() {
  const contact = await getContactMe();

  if (!contact) return null;

  const { socialLinksCollection } = contact;

  return (
    <footer className="border-border mt-24 border-t py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-muted text-sm">
          <p>© 2026 Christian Dennis Dulay. Built with Next.js & Tailwind CSS.</p>
        </div>
        <ul className="flex items-center gap-4" aria-label="Social links">
          {socialLinksCollection?.items?.map((link) => (
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
