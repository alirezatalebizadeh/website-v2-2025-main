import Image from 'next/image';
import Link from 'next/link';

const LearningCard = ({
  documentId,
  webinarLink,
  url,
  alternativeText,
  title,
  description,
  rate,
  duration,
  level,
  teacher,
  type,
  price,
  slug,
}: LearningCardProps) => {
  const route = type === 'webinar' ? `/webinars/${slug}` : `/courses/${slug}`;
  return (
    <Link
      href={route}
      className='shadow-md hover:shadow-lg transition-all duration-200 w-full max-w-full sm:max-w-[300px] bg-white overflow-hidden rounded-2xl border border-gray-200 flex flex-col'
    >
      <div className='w-full h-96 sm:h-72 overflow-hidden relative'>
        <Image
          src={url}
          alt={alternativeText ? alternativeText : 'Learning Thumbnail'}
          fill
          className='object-cover rounded-[1.5rem] p-3'
          loading='lazy'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
        />
        {/* Gradient overlay */}
        <div
          className='absolute inset-0 pointer-events-none rounded-br-2xl rounded-bl-2xl mx-3 mb-3'
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 40%)',
          }}
        />
        <span className='bg-[#00000099] p-1 text-xs absolute right-4 bottom-4 rounded-md text-white'>
          {level}
        </span>
      </div>

      {/* Card content */}
      <div className='flex flex-col flex-1 p-3 sm:p-4 gap-2 sm:gap-3'>
        <h3
          className={`text-right text-base sm:text-lg text-gray-900 font-bold leading-5 sm:leading-6 min-h-[2.5rem] sm:min-h-[3rem] ${
            type === 'webinar' ? 'line-clamp-2' : 'truncate'
          }`}
        >
          {title}
        </h3>
        {type === 'webinar' ? (
          <>
            <p className='text-right text-[#5F5F5F] text-sm font-normal leading-5 line-clamp-2 flex-1'>
              مدرس: {teacher}
            </p>
            <div className='flex justify-start gap-4 items-center pt-2 border-t border-gray-100'>
              <div className='flex items-center gap-1'>
                <span className='text-gray-900 text-sm font-semibold'>
                  {rate.toFixed(1)}
                </span>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 20 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0'
                >
                  <path
                    d='M9.10433 3.39899C9.47114 2.65574 10.531 2.65574 10.8978 3.39899L12.8282 7.31048L17.1448 7.93772C17.9651 8.05691 18.2926 9.06488 17.699 9.64342L14.5755 12.6881L15.3129 16.9872C15.453 17.8042 14.5956 18.4271 13.8619 18.0414L10.0011 16.0116L6.14018 18.0414C5.40655 18.4271 4.54913 17.8041 4.68924 16.9872L5.4266 12.6881L2.30308 9.64341C1.70956 9.06488 2.03708 8.05691 2.8573 7.93772L7.17389 7.31048L9.10433 3.39899Z'
                    fill='#FFCC00'
                  />
                </svg>
              </div>
              <div className='flex items-start gap-2 text-gray-500 text-xs'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <polyline points='12 6 12 12 16 14'></polyline>
                </svg>
                <span>{duration}</span>
              </div>
            </div>
          </>
        ) : (
          <div className='flex items-start gap-4 text-[#5F5F5F]'>
            <div className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <polyline points='12 6 12 12 16 14'></polyline>
              </svg>
              <span>فصل</span>
              <span>.</span>
              <span>قسمت</span>
            </div>
            <div className='flex items-center gap-1'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 20 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='flex-shrink-0'
              >
                <path
                  d='M9.10433 3.39899C9.47114 2.65574 10.531 2.65574 10.8978 3.39899L12.8282 7.31048L17.1448 7.93772C17.9651 8.05691 18.2926 9.06488 17.699 9.64342L14.5755 12.6881L15.3129 16.9872C15.453 17.8042 14.5956 18.4271 13.8619 18.0414L10.0011 16.0116L6.14018 18.0414C5.40655 18.4271 4.54913 17.8041 4.68924 16.9872L5.4266 12.6881L2.30308 9.64341C1.70956 9.06488 2.03708 8.05691 2.8573 7.93772L7.17389 7.31048L9.10433 3.39899Z'
                  fill='#FFCC00'
                />
              </svg>
              <span className='text-[#5F5F5F] text-sm font-semibold'>
                {rate.toFixed(1)}
              </span>
            </div>
          </div>
        )}
      </div>
      {type === 'course' && price !== undefined && (
        <div className='flex justify-end p-4 pt-0 text-[#111] font-bold'>
          {price === 0 && <span>رایگان</span>}
          {price !== 0 && price.toLocaleString() + 'تومان'}
        </div>
      )}
    </Link>
  );
};

export default LearningCard;
