import { client } from '../client';
import { GET_ABOUT_ME } from './about-me-query';
import { AboutMe } from '@/types/contentful';

export async function getAboutMe(): Promise<AboutMe> {
  const data = await client.request(GET_ABOUT_ME);
  return (data as any).aboutMeCollection?.items?.[0] ?? null;
}
