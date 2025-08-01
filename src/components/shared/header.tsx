'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useModalStore } from '@/stores/modal-store';

const navigationMenuItems = [
  { title: 'وبینار ها', href: '/webinars' },
  { title: 'دوره ها', href: '/courses' },
  { title: 'درباه ما', href: '/about-us' },
  { title: 'مجله', href: '/blog' },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { openModal } = useModalStore();
  const footerClassName = showMenu
    ? 'z-50 fixed left-0 top-0 h-screen bg-white'
    : '';
  return (
    <nav
      className={cn(
        'px-4 flex flex-col lg:flex-row lg:justify-between items-center lg:w-full py-6 lg:relative w-screen lg:max-w-screen-xl lg:mx-auto gap-4',
        footerClassName,
      )}
    >
      <div className='flex justify-between items-center w-full'>
        <div className='lg:hidden'>
          <Image
            src={'/icon/menu.svg'}
            alt='menu'
            width={15}
            height={20}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList className='gap-8'>
            {navigationMenuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  className='hover:bg-primary px-2 py-1 rounded '
                  asChild
                >
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          href={'/'}
          className='lg:absolute left-1/2 lg:transform lg:-translate-x-1/2 '
        >
          <Image
            src='/icon/Logo.svg'
            alt='nextskill logo'
            height={32}
            width={73}
            className='logo object-contain w-[73] h-[32] lg:w-[90] lg:h-[40]'
          />
        </Link>
        <div className='actions flex justify-center items-center gap-6'>
          <div className='search'>
            <Image
              src={'/icon/search.svg'}
              alt='search'
              width={18}
              height={18}
            />
          </div>
          <div className='cta hidden lg:block'>
            <Button onClick={() => openModal('login')}>ورورد | ثبت نام</Button>
          </div>
        </div>
      </div>
      {showMenu && (
        <>
          <div className='flex flex-col gap-3 border-b border-gray-300 pb-5 w-full lg:hidden'>
            {navigationMenuItems.map((link) => (
              <Button className='w-full' variant={'outline'}>
                <Link href={link.href}>{link.title}</Link>
              </Button>
            ))}
          </div>
          <Button
            className='w-full bg-black text-white'
            onClick={() => openModal('signup')}
          >
            عضویت رایگان
          </Button>
          <Button
            className='w-full'
            variant={'outline'}
            onClick={() => openModal('login')}
          >
            ورورد
          </Button>
        </>
      )}
    </nav>
  );
};

export default Header;
