import { AboutMe } from './components/about-me/AboutMe';
import { HowIWork } from './components/how-i-work/HowIWork';
import { JourneyTimeLine } from './components/experiences/JourneyTimeLine';
import { ContactMe } from './components/contact-me/ContactMe';
import { Divider } from './components/divider/Divider';

export const revalidate = 60;

export default async function Home() {
  return (
    <main className="mx-auto max-w-4xl space-y-24 px-6">
      <AboutMe />
      <Divider />
      <HowIWork />
      <Divider />
      <JourneyTimeLine />
      <Divider />
      <ContactMe />
    </main>
  );
}
