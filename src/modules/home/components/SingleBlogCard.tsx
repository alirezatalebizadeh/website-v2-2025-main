import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import testImage from '@/../public/images/about-us.png';
export default function SingleBlogCard({
  title,
  summery,
  readingTime,
  authorName,
  authorAvatarUrl,
  authorAvatarAlt,
  coverImageUrl,
  coverImageAlt,
  coverWidth,
  coverHeight,
  category,
}: BlogCardProps) {
  return (
    <Card className='justify-between gap-[unset] py-0 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 mb-4 sm:mb-6 overflow-hidden'>
      {/* Image */}
      {authorAvatarUrl && (
        <div className='relative'>
          {coverImageUrl ? (
            <Image
              src={coverImageUrl}
              alt={coverImageAlt ? coverImageAlt : 'Cover image'}
              className='w-full object-cover'
              width={coverWidth}
              height={coverHeight}
            />
          ) : (
            // ! remove after getting all images
            <Image
              src={testImage}
              alt='Random cover'
              className='w-full h-48 sm:h-56 object-cover'
            />
          )}
          {category && (
            <div className='absolute top-4 right-4'>
              <span className='bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm'>
                {category}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <CardContent className='p-6'>
        <h2 className='text-lg sm:text-xl font-bold text-gray-800 mb-3 text-right leading-tight line-clamp-2'>
          {title}
        </h2>

        {summery && (
          <p className='text-gray-600 text-sm sm:text-base leading-relaxed mb-6 text-right line-clamp-2'>
            {summery}
          </p>
        )}

        {/* Footer */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Avatar className='w-10 h-10'>
              <AvatarImage src={authorAvatarUrl} alt={authorAvatarAlt ? authorAvatarAlt : 'Author Avatar'} />
              <AvatarFallback className='bg-teal-100 text-teal-600 font-semibold text-sm'>
                {authorAvatarUrl?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h4 className='font-medium text-gray-800 text-sm'>{authorName}</h4>
          </div>

          {readingTime && (
            <div className='flex items-center gap-1 text-gray-500'>
              <Clock className='w-4 h-4' />
              <span className='text-xs font-medium'>{readingTime} دقیقه</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
