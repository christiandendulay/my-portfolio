import { getContactMe } from '@/lib/contact-me';
import { MarkdownContent } from '../mark-down/MarkDown';
import { Icon } from '../icons';

export async function ContactMe() {
  const contact = await getContactMe();

  if (!contact) return null;

  const { title, description, email } = contact;

  return (
    <section id="contact" className="space-y-8">
      <h2 className="text-heading mb-8 text-center text-3xl font-bold md:text-4xl">{title}</h2>

      <div className="bg-surface border-border space-y-6 rounded-lg border p-6 md:p-8">
        <div className="space-y-4">{description && <MarkdownContent content={description} />}</div>

        <a
          href={`mailto:${email}`}
          className="text-teal hover:text-teal-hover flex flex-col items-start gap-2 font-medium transition-colors hover:underline md:inline-flex md:flex-row md:items-center"
        >
          <Icon name="email" className="h-5 w-5 flex-shrink-0" />
          <span className="break-all">{email}</span>
        </a>
      </div>
    </section>
  );
}
