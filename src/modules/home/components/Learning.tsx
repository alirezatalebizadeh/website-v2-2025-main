import { Button } from '../../../components/ui/button';
import LearningCard from '@/modules/learning/components/LearningCard';
import { learningToCardProps } from '@/modules/learning/utils/learning';
import Link from 'next/link';
const LEARNING_TEXTS = {
  webinar: {
    title: 'آخرین وبینارها',
    subtitle:
      'وبینارهای مارکتینگ رایگان ما که توسط کارشناسان این حوزه ایجاد شده است، ببینید.',
    cta: 'همه وبینارها',
  },
  course: {
    title: 'دوره‌ها',
    subtitle:
      'بهترین دوره‌های مارکتینگ که شامل به‌روزترین آموزش‌های موجود در دنیا هستند را اینجا در دکست‌اسکیل پیدا کنید.',
    cta: 'همه دوره‌ها',
  },
};

export default function Learning({
  items,
  type,
}: {
  items: LearningItem[];
  type: 'webinar' | 'course';
}) {
  const { title, subtitle, cta } = LEARNING_TEXTS[type];
  return (
    <div className='flex flex-col gap-6 sm:gap-8 w-full px-4 sm:w-11/12 lg:w-10/12 mx-auto'>
      {/* Header Section with title and description */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0'>
        <div className='flex flex-col gap-4 w-full sm:w-auto'>
          <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-right'>
            {title}
          </h1>
          <p className='text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed text-right max-w-none sm:max-w-2xl whitespace-normal sm:whitespace-nowrap'>
            {subtitle}
          </p>
        </div>

        {/* CTA Button - hidden on small screens */}
        <Button className='hidden sm:flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black border border-gray-200 px-6 py-2 rounded-lg transition-colors duration-200'>
          <Link href={`/${type}s`} className='text-sm font-medium'>
            {cta}
          </Link>
          {/* Left-pointing arrow icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M19 12H6M12 5l-7 7 7 7' />
          </svg>
        </Button>
      </div>

      {/* Webinars Card Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
        {(items as LearningItem[])?.map((item) => (
          <LearningCard key={item.documentId} {...learningToCardProps(item)} />
        ))}
      </div>

      {/* Mobile-only CTA Button */}
      <div className='flex sm:hidden justify-center mt-4'>
        <Button className='flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black border border-gray-200 px-6 py-3 rounded-lg transition-colors duration-200'>
          <span className='text-sm font-medium'>مشاهده {cta}</span>
          {/* Left-pointing arrow icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M19 12H6M12 5l-7 7 7 7' />
          </svg>
        </Button>
      </div>
    </div>
  );
}
