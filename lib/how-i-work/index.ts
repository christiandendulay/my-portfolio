import { client } from '../client';
import { GET_HOW_I_WORK } from './how-i-work-query';
import { HowIWork } from '@/types/contentful';

export async function getHowIWork(): Promise<HowIWork> {
  const data = await client.request(GET_HOW_I_WORK);
  return data.howIWorkCollection?.items?.[0] ?? null;
}
