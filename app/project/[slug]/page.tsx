import { getProjectBySlug, getAllSlugs } from '@/lib/project';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RichTextRenderer } from '@/app/components/rich-text/RichText';
import { Icon } from '@/app/components/icons';
import { Divider } from '@/app/components/divider/Divider';

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 60;
export const dynamicParams = true; // Allow on-demand generation
export const dynamic = 'force-static'; // Required for ISR to work properly

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/project"
        className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:underline"
      >
        <Icon name="arrow-left" className="h-5 w-5" />
        Back to projects
      </Link>
      <h2 className="mb-4 text-4xl font-bold">{project.title}</h2>
      <RichTextRenderer content={project.description?.json} />
      <Divider />
      <div className="flex items-center justify-end gap-4">
        {project.liveDemo && (
          <a
            href={project.liveDemo ?? ''}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-teal-hover inline-flex items-center gap-1 text-sm font-medium transition-colors hover:underline"
          >
            Live Demo
            <Icon name="external-link" className="h-4 w-4" />
          </a>
        )}

        <a
          href={project.repoUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-teal inline-flex items-center gap-1 text-sm font-medium transition-colors hover:underline"
        >
          Github repo
          <Icon name="github" className="h-4 w-4" />
        </a>
      </div>
    </main>
  );
}
