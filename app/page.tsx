import { getAllProjects } from '@/lib/project';
import Link from 'next/link';

export const revalidate = 60;

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="space-y-6">
        <h1 className="text-heading text-5xl leading-tight font-bold">
          Hi, I'm <span className="text-teal">Your Name</span>
        </h1>
        <p className="text-foreground max-w-2xl text-xl leading-relaxed">
          Full-stack developer building things with React, TypeScript, and Node.js.
        </p>
      </section>

      <section id="projects" className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ul>
            {projects.map((project) => {
              if (!project) return null;
              return (
                <li key={project.sys.id}>
                  <Link
                    href={`/project/${project.slug}`}
                    className="block overflow-hidden rounded-lg border p-6 transition hover:shadow-lg"
                  >
                    <h2 className="text-teal">{project.title}</h2>
                    {!!project.description?.json && (
                      <p className="mt-2 line-clamp-3 text-gray-600">
                        {JSON.stringify(project.description.json).slice(0, 100)}...
                      </p>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
