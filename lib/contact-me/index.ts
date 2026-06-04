import { client } from '../client';
import { GET_CONTACT_ME, GET_SOCIAL_LINKS } from './contact-me-query';
import { ContactMe, SocialLink } from '@/types/contentful';

export async function getContactMe(): Promise<ContactMe> {
  const data = await client.request(GET_CONTACT_ME);
  return data.contactMeCollection?.items?.[0] ?? null;
}
export async function getSocialLinks(): Promise<SocialLink[]> {
  const data = await client.request(GET_SOCIAL_LINKS);
  return data.contactMeCollection?.items?.[0].socialLinksCollection?.items ?? [];
}
