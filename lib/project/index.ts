import { client } from '../client';
import { GET_ALL_PROJECTS, GET_PROJECT_BY_SLUG, GET_ALL_SLUGS } from './project-query';
import { Project } from '@/types/contentful';

export async function getAllProjects(): Promise<Project[]> {
  const data = await client.request(GET_ALL_PROJECTS);
  return (data as any).projectCollection?.items ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const data = await client.request(GET_PROJECT_BY_SLUG, { slug });
  return (data as any).projectCollection?.items?.[0] ?? null;
}

export async function getAllSlugs(): Promise<string[]> {
  const data = await client.request(GET_ALL_SLUGS);
  return (
    (data as any).projectCollection?.items?.map((item: Project) => item?.slug).filter(Boolean) ?? []
  );
}
