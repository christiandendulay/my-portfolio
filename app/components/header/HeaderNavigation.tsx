import { getHeaderNavigation } from '@/lib/header-navigation';
import { NavigationBar } from './NavigationBar';

export async function HeaderNavigation() {
  const navigation = await getHeaderNavigation();

  // Fallback if Contentful is unavailable
  if (!navigation) {
    return null;
  }

  return <NavigationBar navigation={navigation} />;
}
