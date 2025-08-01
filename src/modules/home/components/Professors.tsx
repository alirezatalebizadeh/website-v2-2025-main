'use client';

import ProfessorsCard from './ProfessorsCard';
import { useKeenSlider } from 'keen-slider/react';
import { professorToCardProps } from '@/modules/home/utils/professor';

export default function Professors({
  professors,
}: {
  professors: Professor[];
}) {
  // Initialize Keen Slider with responsive breakpoints
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1.5,
      spacing: 16,
      origin: 'center',
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 3.8, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 4.2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 5, spacing: 16 },
      },
    },
  });

  return (
    <div className='flex flex-col gap-6 sm:gap-8 w-full px-4 sm:w-11/12 lg:w-10/12 mx-auto'>
      {/* Header Section */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0'>
        <div className='flex flex-col gap-4 w-full sm:w-auto items-center sm:items-start'>
          <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-right'>
            اساتید نکست‌اسکیل
          </h1>
          <p className='text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed text-right max-w-none sm:max-w-2xl'>
            نکست‌اسکیل، جای افرادی است که تک‌تک کلماتشان، مسیر شما را تغییر
            می‌دهد! 
          </p>
        </div>
      </div>

      {/* Slider container */}
      <div ref={sliderRef} className='keen-slider overflow-hidden'>
        {(professors as Professor[])?.map((professor) => (
          <div key={professor.documentId} className='keen-slider__slide'>
            <ProfessorsCard {...professorToCardProps(professor)} />
          </div>
        ))}
      </div>
    </div>
  );
}
