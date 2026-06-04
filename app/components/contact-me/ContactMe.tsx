import { getContactMe } from '@/lib/contact-me';
import { MarkdownContent } from '../mark-down/MarkDown';
import { Icon } from '../icons';

export async function ContactMe() {
  const contact = await getContactMe();

  if (!contact) return null;

  const { title, description, email } = contact;

  return (
    <section id="contact" className="space-y-8">
      <h2 className="text-heading text-3xl font-bold">{title}</h2>

      <div className="bg-surface border-border space-y-6 rounded-lg border p-8">
        <div className="space-y-4">{description && <MarkdownContent content={description} />}</div>

        <a
          href={`mailto:${email}`}
          className="text-teal hover:text-teal-hover inline-flex items-center gap-2 font-medium transition-colors"
        >
          <Icon name="email" className="h-5 w-5" />
          {email}
        </a>
      </div>
    </section>
  );
}
