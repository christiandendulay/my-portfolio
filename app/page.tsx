import { getAllProjects } from '@/lib/project';
import Link from 'next/link';

export const revalidate = 60;

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">My Work</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          if (!project) return null;
          return (
            <Link
              key={project.sys.id}
              href={`/project/${project.slug}`}
              className="block overflow-hidden rounded-lg border p-6 transition hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              {!!project.description?.json && (
                <p className="mt-2 line-clamp-3 text-gray-600">
                  {JSON.stringify(project.description.json).slice(0, 100)}...
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
