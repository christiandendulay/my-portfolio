import { getProjectBySlug, getAllSlugs } from '@/lib/project';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 60;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/" className="mb-6 block text-blue-600 hover:underline">
        ← Back to projects
      </Link>

      <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>

      {!!project.description?.json && (
        <pre className="overflow-auto rounded bg-gray-100 p-4">
          {JSON.stringify(project.description.json, null, 2)}
        </pre>
      )}
    </main>
  );
}
