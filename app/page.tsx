import { AboutMe } from './components/about-me/AboutMe';
import { HowIWork } from './components/how-i-work/HowIWork';
import { JourneyTimeLine } from './components/experiences/JourneyTimeLine';
import { ContactMe } from './components/contact-me/ContactMe';
import { Divider } from './components/divider/Divider';
import { Metadata } from 'next';
import { AUTHOR, SITE_NAME, SITE_URL } from '@/site/site';

export const metadata: Metadata = {
  title: 'Your Name — Portfolio',
  description: 'Full-stack developer building fast, accessible web experiences.',
  keywords: ['portfolio', 'web developer', 'full-stack', 'react', 'next.js'],
  authors: [{ name: AUTHOR }],
  creator: AUTHOR,
  openGraph: {
    title: SITE_NAME,
    description: 'Full-stack developer building fast, accessible web experiences.',
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};
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
