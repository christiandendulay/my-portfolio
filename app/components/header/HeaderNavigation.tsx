import { getHeaderNavigation } from '@/lib/header-navigation';
import { NavigationBar } from './NavigationBar';

export async function HeaderNavigation() {
  const navigation = await getHeaderNavigation();

  // Fallback if Contentful is unavailable
  if (!navigation) {
    return (
      <nav className="sticky top-0 z-50 border-b border-[#D4CFC7] bg-[#FFFFFF] dark:border-[#3A3A38] dark:bg-[#242422]">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <span className="font-bold text-[#2C3E3E] dark:text-[#E8E4DC]">Your Name</span>
        </div>
      </nav>
    );
  }

  return <NavigationBar navigation={navigation} />;
}
