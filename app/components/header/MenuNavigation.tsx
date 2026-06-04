'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavigationLink } from './NavigationLink';
import { HeaderNavigation } from '@/types/contentful';
import { Icon } from '../icons';

interface MenuNavigationProps {
  navItems: HeaderNavigation['navigationItemsCollection'];
}

export function MenuNavigation({ navItems }: MenuNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll lock + resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  if (!mounted) return null;

  const panel = (
    <div
      className={`fixed top-0 right-0 bottom-0 z-[100] flex flex-col bg-[#FFFFFF] shadow-2xl transition-transform duration-300 ease-out md:hidden dark:bg-[#242422] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: 'min(100vw, 320px)' }}
    >
      <div className="flex items-center justify-end border-b border-[#D4CFC7] p-6 dark:border-[#3A3A38]">
        <button
          onClick={closeMenu}
          className="rounded-md p-2 text-[#3D4F4F] transition-colors duration-200 hover:bg-[#4A8B8B]/10 dark:text-[#C4C4BE] dark:hover:bg-[#5CA8A8]/10"
          aria-label="Close menu"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-6 p-6">
        <ul className="space-y-4">
          {navItems?.items.map((navItem) => (
            <li key={navItem?.sys.id}>
              <NavigationLink item={navItem} onClick={closeMenu} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <div className="flex items-center gap-3 md:hidden">
        <button
          onClick={openMenu}
          className="rounded-md p-2 text-[#3D4F4F] transition-colors duration-200 hover:bg-[#4A8B8B]/10 dark:text-[#C4C4BE] dark:hover:bg-[#5CA8A8]/10"
          aria-label="Open menu"
        >
          <Icon name="menu" className="h-6 w-6" />
        </button>
      </div>

      {createPortal(panel, document.body)}
    </>
  );
}
