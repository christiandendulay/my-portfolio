import { ThemeProvider, ThemeToggle } from './components/theme';
import './globals.css';
import { HeaderNavigation } from './components/header/HeaderNavigation';
import { Footer } from './components/footer/Footer';
import type { Metadata } from 'next';
import { AUTHOR, SITE_NAME, SITE_URL } from '@/site/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${AUTHOR} `,
  },
  description: 'Software Engineer Building Systems That Last',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = saved === 'dark' || (!saved && prefersDark);
                
                // Add class immediately, before paint
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
                
                // Set CSS variable to block rendering until we decide
                document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <HeaderNavigation />
          <main>{children}</main>
          <ThemeToggle />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
