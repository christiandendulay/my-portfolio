import { client } from '../client';
import { GET_ABOUT_ME, GET_RESUME } from './about-me-query';
import { AboutMe, Asset } from '@/types/contentful';

export async function getAboutMe(): Promise<AboutMe> {
  const data = await client.request(GET_ABOUT_ME);
  return data.aboutMeCollection?.items?.[0] ?? null;
}

export async function getResume(): Promise<Asset> {
  const data = await client.request(GET_RESUME);
  return data.assetCollection?.items?.[0] ?? null;
}
