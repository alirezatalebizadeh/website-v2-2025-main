import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { TestimonialCardProps } from '@/modules/home/types/testimonial';

export default function TestimonialsCard({
  name,
  role,
  company,
  feedback,
  avatar,
}: TestimonialCardProps) {
  return (
    <Card className='bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 mb-4 sm:mb-6'>
      <CardContent className='p-6'>
        <div className='mb-4'>
          <Image src='/icon/quote.svg' alt='quoteIcon' width={32} height={32} />
        </div>

        <p className='text-gray-700 text-sm sm:text-base leading-relaxed mb-6 text-right'>
          {feedback}
        </p>

        <div className='flex items-center gap-3'>
          <Avatar className='w-12 h-12'>
            <AvatarImage src={avatar} alt={name ? name : 'user avatar'} />
            <AvatarFallback className='bg-teal-100 text-teal-600 font-semibold'>
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className='flex flex-col text-right flex-1'>
            <h4 className='font-semibold text-gray-800 text-sm sm:text-base'>
              {name}
            </h4>
            {role && (
              <p className='text-gray-500 text-xs sm:text-sm'>
                {role}
                {company && ` در ${company}`}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
