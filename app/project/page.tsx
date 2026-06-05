import { getAllProjects } from '@/lib/project';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '../components/icons';
import { SITE_URL, AUTHOR, SITE_NAME } from '@/site/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Projects | ${AUTHOR}`,
  description:
    'A collection of my recent work — web apps, experiments, and open source contributions.',
  openGraph: {
    title: `Projects | ${AUTHOR}`,
    description: 'A collection of my recent work.',
    url: `${SITE_URL}/projects`,
    siteName: SITE_NAME,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  if (!projects || projects.length === 0) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col items-center justify-center px-6">
        <p className="text-muted">No projects yet. Check back soon.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-[calc(100vh-80px)] max-w-4xl px-6 py-16">
      <div className="mb-12 space-y-2">
        <h1 className="text-heading text-3xl font-bold md:text-4xl">Projects</h1>
        <p className="text-muted">Things I've built along the way.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.sys.id!}
            className="bg-surface border-border group hover:border-teal/30 flex flex-col overflow-hidden rounded-lg border transition-all duration-200"
          >
            {project.thumbnail?.url && (
              <div className="bg-border/50 relative aspect-video overflow-hidden">
                <Image
                  src={project.thumbnail.url}
                  alt={project.thumbnail.title!}
                  loading="eager"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <ul className="mb-3 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <li
                    key={tag}
                    className="bg-teal/10 text-teal rounded-full px-2.5 py-0.5 text-xs font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex-1">
                <Link
                  href={`/project/${project.slug}`}
                  className="text-heading mb-2 block text-lg font-semibold hover:underline"
                >
                  {project.title}
                </Link>
              </div>

              <div className="flex items-center gap-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:text-teal-hover inline-flex items-center gap-1 text-sm font-medium transition-colors hover:underline"
                  >
                    Live Demo
                    <Icon name="external-link" className="h-3.5 w-3.5" />
                  </a>
                )}

                <a
                  href={project.repoUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-teal inline-flex items-center gap-1 text-sm font-medium transition-colors hover:underline"
                >
                  Source
                  <Icon name="github" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
