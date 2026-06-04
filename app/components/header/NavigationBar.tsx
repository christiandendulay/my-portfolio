'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '../theme/ThemeToggle';
import { HeaderNavigation } from '@/types/contentful';
import { NavigationLink } from './NavigationLink';
import { MenuNavigation } from './MenuNavigation';

export function NavigationBar({ navigation }: { navigation: HeaderNavigation }) {
  const { logoText, logoLink, navigationItemsCollection } = navigation;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (logoLink?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(logoLink);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#D4CFC7] bg-[#FFFFFF]/90 backdrop-blur-md transition-colors duration-300 dark:border-[#3A3A38] dark:bg-[#242422]/90">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex h-16 items-center justify-between">
          {logoLink?.startsWith('#') ? (
            <a
              href={logoLink}
              onClick={handleLogoClick}
              className="text-lg font-bold tracking-tight text-[#2C3E3E] transition-colors duration-200 hover:text-[#4A8B8B] dark:text-[#E8E4DC] dark:hover:text-[#5CA8A8]"
            >
              {logoText}
            </a>
          ) : (
            <Link
              href={logoLink ?? '/'}
              className="text-lg font-bold tracking-tight text-[#2C3E3E] transition-colors duration-200 hover:text-[#4A8B8B] dark:text-[#E8E4DC] dark:hover:text-[#5CA8A8]"
            >
              {logoText}
            </Link>
          )}

          <div className="hidden items-center gap-8 md:flex">
            {navigationItemsCollection?.items.map((navItem) => (
              <NavigationLink key={navItem?.sys.id} item={navItem} />
            ))}
          </div>
          <MenuNavigation navItems={navigationItemsCollection} />
        </div>
      </div>
    </nav>
  );
}
