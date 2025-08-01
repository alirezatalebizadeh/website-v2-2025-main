import DescriptionCard from './DescriptionCard';
import Image from 'next/image';

import HomeDes1 from '@/../public/images/home-des-1.svg';
import HomeDes2 from '@/../public/images/home-des-2.svg';
import HomeDes3 from '@/../public/images/home-des-3.svg';
import HomeDes4 from '@/../public/images/home-des-4.svg';

import desktopBg from '@/../public/images/next-dek-bg.png';
import mobileBg from '@/../public/images/next-mob-bg.png';

export default function Description() {
  return (
    <div className='w-full bg-white relative'>
      {/* Background Images */}
      <Image
        src={desktopBg}
        alt='Background'
        fill
        className='object-contain lg:object-cover hidden md:block absolute inset-x-0 !top-[-35rem] z-[-1] pointer-events-none'
        loading='lazy'
      />

      <Image
        src={mobileBg}
        alt='Mobile Background'
        fill
        className='object-contain sm:object-cover block md:hidden absolute inset-x-0 !top-[-53rem] z-[-1] pointer-events-none'
        loading='lazy'
      />

      <div className='w-11/12 flex flex-col lg:flex-row items-center justify-between gap-6 mx-auto py-16 mt-20'>
        {/* Left Text Block */}
        <div className='w-full lg:w-1/2'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-20'>
            رسالت ما
          </h2>
          <p className='text-gray-600 md:text-lg'>
            ما معتقدیم در مسیر یادگیری، هیچ مسئله مالی و یا جغرافیایی نباید مانع
            بهره‌مندی از فرصت‌های آموزشی برابر باشد...
          </p>
        </div>

        {/* Right Feature Cards */}
        <div className='relative w-full lg:w-1/2 mx-auto'>
          <div className='absolute inset-0 z-0 bg-[radial-gradient(120%_120%_at_50%_50%,rgba(50,205,153,0.2)_0%,transparent_70%)]' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 relative'>
            <DescriptionCard
              title='آموزش‌های رایگان بدون محدودیت'
              description='افراد باتجربه و شنیدنی صنعت'
              icon={<Image src={HomeDes1} alt='آموزش رایگان' />}
            />
            <DescriptionCard
              title='مهارت‌های واقعاً کاربردی در بازار کار'
              description='بررسی مهارت‌ها و چالش‌های واقعی'
              icon={<Image src={HomeDes2} alt='مهارت‌های کاربردی' />}
            />
            <DescriptionCard
              title='شبکه‌سازی با افراد دغدغه‌مند و فعال'
              description='آشنایی با اساتید و فعالان درجه یک صنعت'
              icon={<Image src={HomeDes3} alt='شبکه‌سازی' />}
            />
            <DescriptionCard
              title='سرعت بالا و کیفیت عالی'
              description='بهترین کیفیت آموزش با سرعت بارگذاری بالا'
              icon={<Image src={HomeDes4} alt='سرعت و کیفیت' />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
