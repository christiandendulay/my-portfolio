import { client } from '../client';
import { GET_CONTACT_ME } from './contact-me-query';
import { ContactMe } from '@/types/contentful';

export async function getContactMe(): Promise<ContactMe> {
  const data = await client.request(GET_CONTACT_ME);
  return data.contactMeCollection?.items?.[0] ?? null;
}
