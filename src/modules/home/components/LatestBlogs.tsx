import { Button } from '../../../components/ui/button';
import SingleBlogCard from './SingleBlogCard';
import { blogToCardProps } from '@/modules/home/utils/blog';

export default function LatestBlog({ blogs }: { blogs: BlogPost[] }) {
  return (
    <div className='flex flex-col gap-6 sm:gap-8 w-full px-4 sm:w-11/12 lg:w-10/12 mx-auto'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0'>
        <div className='flex flex-col gap-4 w-full sm:w-auto'>
          <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-right'>
            آخرین مطالب وبلاگ
          </h1>
          <p className='text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed text-right max-w-none sm:max-w-2xl'>
            مسیر یادگیری خود را از اینجا آغاز کنید!
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
        {blogs.map((blog) => (
          <SingleBlogCard key={blog.documentId} {...blogToCardProps(blog)} />
        ))}
      </div>

      {/* CTA Button */}
      <div className='flex justify-center mt-4'>
        <Button className='flex items-center justify-center gap-3 bg-black hover:bg-gray-500 text-white border border-gray-200 px-6 py-3 rounded-lg transition-colors duration-200'>
          <span className='text-sm font-medium'>همه مقاله‌ها</span>
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
