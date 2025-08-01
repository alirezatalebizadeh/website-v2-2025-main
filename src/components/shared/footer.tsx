import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const footerLinks = [
  { title: 'سوالات متداول', href: '/faq' },
  { title: 'فرصت های شغلی', href: '/jobs' },
  { title: 'بلاگ', href: '/blog' },
  { title: 'نقشه سایت', href: '/sitemap' },
  { title: 'خیریه و کمک های مالی', href: '/donation' },
];

const socialMediaLinks = [
  { src: '/icon/socialMedia/linkedin.svg', alt: 'linkedin', href: '#' },
  { src: '/icon/socialMedia/telegram.svg', alt: 'telegram', href: '#' },
  { src: '/icon/socialMedia/youtube.svg', alt: 'youtube', href: '#' },
  { src: '/icon/socialMedia/instagram.svg', alt: 'instagram', href: '#' },
  { src: '/icon/socialMedia/x.svg', alt: 'x', href: '#' },
  { src: '/icon/socialMedia/whatsapp.svg', alt: 'whatsapp', href: '#' },
];
const Footer = () => {
  return (
    <footer className='footer-gradient p-12 mt-24'>
      <div className='footer-card py-16 px-8 rounded-3xl flex flex-col gap-8 lg:w-screen bg-white max-w-screen-xl mx-auto'>
        <section className='flex lg:justify-between flex-col lg:flex-row gap-4 lg:gap-0 items-center'>
          <Image
            src='/icon/Logo.svg'
            alt='nextskill logo'
            width={127}
            height={55}
            className='logo'
          ></Image>
          <NavigationMenu className='flex flex-col lg:flex-row-reverse justify-between w-full'>
            <NavigationMenuList className='lg:gap-8 flex-col gap-2 lg:flex-row'>
              {footerLinks.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    // className={navigationMenuTriggerStyle()}
                    asChild
                  >
                    <Link href={item.href} className='text-sm'>
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className='gap-6'>
              {socialMediaLinks.map((item) => (
                <NavigationMenuItem key={item.alt}>
                  <NavigationMenuLink
                    // className={navigationMenuTriggerStyle()}
                    asChild
                  >
                    <Link href={item.href}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={24}
                        height={24}
                      />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </section>
        <div className='gap-3 flex justify-between lg:hidden text-sm text-[#656566]'>
          <Link href='#'>شرایط خدمات</Link>
          <Link href='#'>سیاست حفظ حریم خصوصی</Link>
        </div>
        <Separator className='bg-[#656566]' />
        <section className='flex flex-col lg:flex-row lg:justify-between text-sm text-[#656566] '>
          <div className='gap-3 lg:flex hidden'>
            <Link href='#'>شرایط خدمات</Link>
            <Link href='#'>سیاست حفظ حریم خصوصی</Link>
          </div>
          <p className='text-center lg:text-right'>
            © کپی رایت تمامی حقوق این سایت برای نکست اسکیل محفوظ است.
          </p>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
