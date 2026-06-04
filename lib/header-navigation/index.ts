import { client } from '../client';
import { GET_HEADER_NAVIGATION } from './header-navigation-query';
import { HeaderNavigation } from '@/types/contentful';

export async function getHeaderNavigation(): Promise<HeaderNavigation> {
  const data = await client.request(GET_HEADER_NAVIGATION);
  return data.headerNavigationCollection?.items?.[0] ?? null;
}
