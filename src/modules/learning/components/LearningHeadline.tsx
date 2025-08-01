import { Lock, Check } from 'lucide-react';
// when log in works add this and then other
// import { useSession } from 'next-auth/react';

interface Chapter {
  id: string;
  title: string;
  duration: string;
  video: string;
  description?: string;
  tags?: { id: string; item: string }[];
}

interface LearningHeadlineProps {
  chapters: Chapter[];
}

function LearningHeadline({ chapters }: LearningHeadlineProps) {
  // uncomment this when login works
  // const { data: session } = useSession();

  // 🔐 Simulate login status here
  const isUserLoggedIn = false; // <-- change this manually for now
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('لطفا وارد حساب کاربری خود شوید');
  };
  // check this instead of that true false
  //     if (!session?.jwt) {
  //   return <p>لطفاً وارد شوید</p>;
  // }
  return (
    <div className='space-y-4 mt-8'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>سرفصل‌های دوره</h1>
        <p>
          در عصر تحول دیجیتال، ابزارهای سنتی تحقیق کلمات کلیدی دیگر به‌تنهایی
          کافی نیستند. با افزایش رقابت در فضای آنلاین و تغییر مداوم الگوریتم‌های
          موتورهای جستجو، نیاز به رویکردی هوشمندانه‌تر از همیشه احساس می‌شود. در
          این دوره آموزشی، تمرکز ما بر ترکیب قدرت تحلیل داده و توانایی پیش‌بینی
          الگوریتم‌های سئو با کمک هوش مصنوعی است.
        </p>
      </div>
      {chapters.map((chapter, index) => {
        return (
          <details
            key={chapter.id}
            open={isUserLoggedIn && index === 0} // auto-open only first if unlocked
            className='rounded-xl border overflow-hidden border-[#DBDBDC]'
            {...(!isUserLoggedIn ? { onClick: handleClick } : {})}
          >
            <summary className='cursor-pointer flex items-center justify-between px-4 py-3 text-sm font-medium border border-[#DBDBDC] bg-[#F1F1F1] hover:bg-gray-100 transition-all'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4 sm:gap-4'>
                {isUserLoggedIn ? (
                  <Check className='w-5 h-5 text-green-500' />
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M12 2.00024C14.2091 2.00024 16 3.79111 16 6.00024V8.00024H18.5C19.3284 8.00024 20 8.67182 20 9.50024V20.5002C20 21.3287 19.3284 22.0002 18.5 22.0002H5.5C4.67157 22.0002 4 21.3287 4 20.5002V9.50024C4 8.67182 4.67157 8.00024 5.5 8.00024H8V6.00024C8 3.79111 9.79086 2.00024 12 2.00024ZM12.0001 13.5002C11.1717 13.5002 10.5001 14.1718 10.5001 15.0002C10.5001 15.8287 11.1717 16.5002 12.0001 16.5002C12.8286 16.5002 13.5001 15.8287 13.5001 15.0002C13.5001 14.1718 12.8286 13.5002 12.0001 13.5002ZM12 4.00024C10.8954 4.00024 10 4.89567 10 6.00024V8.00024H14V6.00024C14 4.89567 13.1046 4.00024 12 4.00024Z'
                      fill='#121213'
                    />
                  </svg>
                )}
                <span className='text-base font-medium text-gray-900'>
                  {chapter.title}
                </span>
                <span className='text-xs text-[#007AFF] bg-[#E6F2FF] p-3'>
                  {chapter.duration}
                </span>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  d='M3.20041 5.73991C3.48226 5.43638 3.95681 5.4188 4.26034 5.70065L8 9.22677L11.7397 5.70065C12.0432 5.4188 12.5177 5.43638 12.7996 5.73991C13.0815 6.04344 13.0639 6.51799 12.7603 6.79984L8.51034 10.7998C8.22258 11.067 7.77743 11.067 7.48967 10.7998L3.23966 6.79984C2.93613 6.51799 2.91856 6.04344 3.20041 5.73991Z'
                  fill='#121213'
                />
              </svg>
            </summary>

            {isUserLoggedIn && (
              <div className='p-4 bg-white'>
                <video
                  className='w-full rounded-lg shadow-lg'
                  controls
                  src={chapter.video}
                  poster='/video-placeholder.jpg'
                />
                {/* {chapter.description && (
                  <div
                    className='mt-3 text-sm text-gray-700 leading-relaxed space-y-2 [&>a]:text-blue-600 [&>a]:underline'
                    dangerouslySetInnerHTML={{ __html: chapter.description }}
                  />
                )} */}
              </div>
            )}
          </details>
        );
      })}
    </div>
  );
}

export default LearningHeadline;
