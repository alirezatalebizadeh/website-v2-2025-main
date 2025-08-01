import { TestimonialsCard } from '@/modules/home';
import { testimonialToCardProps } from '@/modules/home/utils/testimonial';
import type { Testimonial } from '@/modules/home/types/testimonial';

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    // ! see if you are going to change style or is there the right image ?
    // <div className="bg-[url('/images/tetimonials-bg.png')] bg-opacity-95 bg-cover bg-center">
    <div className='flex flex-col gap-8 sm:gap-12 w-full py-8'>
      <div className='flex flex-col items-center md:items-start gap-4  sm:w-11/12 lg:w-10/12 mx-auto px-4 sm:py-16 '>
        <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-right'>
          از نکست‌اسکیل چه می‌گویند
        </h2>
        <p className='text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed text-right max-w-none sm:max-w-2xl'>
          پشتوانه و دلگرمی نکست‌اسکیل، فقط حمایت و حس خوب از طرف شماست!
        </p>
      </div>

      <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6  sm:w-11/12 lg:w-10/12 mx-auto px-4 sm:py-16 '>
        {(testimonials as Testimonial[]).map((item) => (
          <div key={item.documentId} className='break-inside-avoid'>
            <TestimonialsCard {...testimonialToCardProps(item)} />
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}
