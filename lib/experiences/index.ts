import { client } from '../client';
import { GET_EXPERIENCES } from './experiences-query';
import { Experiences } from '@/types/contentful';

export async function getExperiences(): Promise<Experiences> {
  const data = await client.request(GET_EXPERIENCES);
  return data.experiencesCollection?.items?.[0] ?? null;
}
