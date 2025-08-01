'use client';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

const animation = {
  duration: 30000,
  easing: (t: number) => t,
};

export default function Sponsers({ sponsers }: { sponsers: Sponser[] }) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 2, spacing: 16 } },
      '(min-width: 768px)': { slides: { perView: 3.5, spacing: 16 } },
      '(min-width: 1024px)': { slides: { perView: 5, spacing: 16 } },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className='flex flex-col gap-6 sm:gap-8 w-full px-4 sm:w-11/12 lg:w-10/12 mx-auto'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0'>
        <div className='flex flex-col gap-4 w-full sm:w-auto items-center sm:items-start'>
          <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-right'>
            همراه چه برندهایی ایستاده‌ایم
          </h2>
          <p className='text-sm text-center sm:text-base lg:text-xl text-gray-600 leading-relaxed sm:text-right max-w-none sm:max-w-2xl'>
            نکست‌اسکیل، جای افرادی است که تک‌تک کلماتشان، مسیر شما را تغییر
            می‌دهد!
          </p>
        </div>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className='keen-slider'>
        {(sponsers as Sponser[]).map((brand) => (
          <div key={brand.documentId} className='keen-slider__slide'>
            <div className='relative aspect-square mx-auto flex items-center justify-center'>
              <Image
                src={brand.image.url}
                alt={brand.image.alternativeText ? brand.image.alternativeText : 'Brand Logo'}
                className='object-contain'
                sizes='120px'
                loading='lazy'
                width={120}
                height={120}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
