'use client';



import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LearningIntro from '@/modules/learning/components/LearningIntro';
import LearningTeacher from '@/modules/learning/components/LearningTeacher';
import LearningHeadline from '@/modules/learning/components/LearningHeadline';
import LearningAudience from '@/modules/learning/components/LearningAudience';
import Image from 'next/image';
import LearningComments from './LearningComments';
type Tab = {
  label: string;
};

const tabs: Tab[] = [
  { label: 'معرفی دوره' },
  { label: 'مدرس دوره' },
  { label: 'سرفصل‌های دوره' },
  { label: 'مخاطبان' },
  { label: 'دیدگاه و نظرات' },
];
export default function LearningSingleDetail({
  learningItem,
}: {
  learningItem: SingleLearningItem;
}) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <div className='flex flex-col gap-4 w-11/12 mx-auto mb-4'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-2xl'>{learningItem.title}</h1>
          <div className='flex items-center gap-3'>
            <Button className='flex flex-row-reverse items-center justify-center gap-2 bg-[#e7e7e7] w-40'>
              <span>اشتراک‌گذاری</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M6.74658 4H10.2108C10.625 4 10.9608 4.33579 10.9608 4.75C10.9608 5.12969 10.6786 5.44349 10.3126 5.49315L10.2108 5.5H6.74658C5.55572 5.5 4.58094 6.42516 4.50177 7.59595L4.49658 7.75V17.25C4.49658 18.4409 5.42174 19.4156 6.59253 19.4948L6.74658 19.5H16.2473C17.4382 19.5 18.413 18.5748 18.4921 17.404L18.4973 17.25V16.7522C18.4973 16.338 18.8331 16.0022 19.2473 16.0022C19.627 16.0022 19.9408 16.2844 19.9905 16.6504L19.9973 16.7522V17.25C19.9973 19.2543 18.425 20.8913 16.4465 20.9948L16.2473 21H6.74658C4.74232 21 3.10531 19.4276 3.00178 17.4492L2.99658 17.25V7.75C2.99658 5.74574 4.56894 4.10873 6.54742 4.0052L6.74658 4H10.2108H6.74658ZM14.5006 6.51985V3.75C14.5006 3.12603 15.2074 2.78995 15.6876 3.1398L15.7697 3.20874L21.7643 8.95874C22.0441 9.22709 22.0696 9.65811 21.8407 9.95607L21.7644 10.0412L15.7698 15.793C15.3196 16.2251 14.5877 15.9477 14.5077 15.3589L14.5006 15.2519V12.5265L14.1571 12.5566C11.7574 12.807 9.45735 13.8879 7.24253 15.8174C6.72342 16.2696 5.92029 15.842 6.00567 15.1588C6.67046 9.8393 9.45233 6.9073 14.2012 6.5395L14.5006 6.51985V3.75V6.51985ZM16.0006 5.50864V7.25C16.0006 7.66421 15.6648 8 15.2506 8C11.3772 8 8.97655 9.67613 7.93931 13.1572L7.86025 13.4358L8.21244 13.1989C10.4489 11.7372 12.7983 11 15.2506 11C15.6303 11 15.9441 11.2822 15.9937 11.6482L16.0006 11.75V13.4928L20.1618 9.50009L16.0006 5.50864Z'
                  fill='#242424'
                />
              </svg>
            </Button>
            <Button className='flex flex-row-reverse items-center justify-center gap-2 bg-[#e7e7e7] w-40'>
              <span>ذخیره</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M6.19045 21.8539C5.69432 22.2109 5.00244 21.8563 5.00244 21.2451V6.24918C5.00244 4.45425 6.45752 2.99918 8.25244 2.99918H15.7508C17.5458 2.99918 19.0008 4.45425 19.0008 6.24918V21.2451C19.0008 21.8563 18.309 22.2109 17.8128 21.8539L12.0016 17.673L6.19045 21.8539ZM17.5008 6.24918C17.5008 5.28268 16.7173 4.49918 15.7508 4.49918H8.25244C7.28594 4.49918 6.50244 5.28268 6.50244 6.24918V19.7816L11.5636 16.1402C11.8253 15.952 12.178 15.952 12.4397 16.1402L17.5008 19.7816V6.24918Z'
                  fill='#242424'
                />
              </svg>
            </Button>
            <Button className='flex flex-row-reverse items-center justify-center gap-2 text-white w-40'>
              <span>شرکت در دوره</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M7.42505 2.83052C7.60245 2.33254 8.07392 2 8.60256 2H15.0562C15.9094 2 16.5118 2.83587 16.242 3.64528L14.7905 8H18.7492C19.8534 8 20.4153 9.32683 19.647 10.1198L8.586 21.536C7.53226 22.6236 5.71405 21.6422 6.04495 20.1645L7.31418 14.4964L5.74573 14.4904C4.53898 14.4858 3.69895 13.2899 4.10392 12.1532L7.42505 2.83052ZM8.77889 3.5L5.51693 12.6565C5.45908 12.8189 5.57909 12.9898 5.75148 12.9904L8.25277 13C8.47997 13.0009 8.69453 13.1047 8.83621 13.2823C8.97789 13.4599 9.03142 13.6922 8.98177 13.9139L7.50871 20.4923L18.1589 9.5H13.7499C13.5088 9.5 13.2824 9.38411 13.1415 9.18853C13.0005 8.99296 12.9622 8.74154 13.0384 8.51283L14.7093 3.5H8.77889Z'
                  fill='#F6F6F6'
                />
              </svg>
            </Button>
          </div>
        </div>
        <div>{learningItem.members} نفر در این دوره شرکت کرده اند.</div>
        <div>
          <Image
            src={learningItem.thumbnail.url}
            alt={learningItem.thumbnail.alternativeText}
            width={100}
            height={100}
          />
        </div>
        <div className='flex items-center justify-start gap-4'>
          <div className='flex items-center justify-center bg-[#f1f1f1] text-black rounded-md border border-[#DBDBDC] p-2'>
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
            {learningItem.chapters.length} فصل - ? قسمت
          </div>
          <div className='flex items-center justify-center bg-[#f1f1f1] text-black rounded-md border border-[#DBDBDC] p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
            >
              <path
                d='M8.5 5.73001C8.5 4.48737 9.50736 3.48001 10.75 3.48001H13.25C14.4926 3.48001 15.5 4.48737 15.5 5.73001V7.50001H18.75C19.9926 7.50001 21 8.50737 21 9.75001V20.75C21 21.1642 20.6642 21.5 20.25 21.5H3.75C3.33579 21.5 3 21.1642 3 20.75V12.75C3 11.5074 4.00736 10.5 5.25 10.5H8.5V5.73001ZM10 20H14V5.73001C14 5.3158 13.6642 4.98001 13.25 4.98001H10.75C10.3358 4.98001 10 5.3158 10 5.73001V20ZM8.5 12H5.25C4.83579 12 4.5 12.3358 4.5 12.75V20H8.5V12ZM15.5 20H19.5V9.75001C19.5 9.33579 19.1642 9.00001 18.75 9.00001H15.5V20Z'
                fill='#1E1E1F'
              />
            </svg>
            {learningItem.level}
          </div>
          <div className='flex items-center justify-center bg-[#f1f1f1] text-black rounded-md border border-[#DBDBDC] p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
            >
              <path
                d='M10.7878 3.60254C11.283 2.59916 12.7138 2.59916 13.209 3.60254L15.567 8.38026L20.8395 9.14641C21.9468 9.30731 22.3889 10.6681 21.5877 11.4491L17.7724 15.168L18.6731 20.4193C18.8622 21.5221 17.7047 22.3631 16.7143 21.8424L11.9984 19.3631L7.28252 21.8424C6.29213 22.3631 5.13459 21.5221 5.32374 20.4193L6.2244 15.168L2.40916 11.4491C1.60791 10.6681 2.05005 9.30731 3.15735 9.14641L8.42988 8.38026L10.7878 3.60254ZM11.9984 4.53894L9.74008 9.11483C9.54344 9.51327 9.16332 9.78944 8.72361 9.85333L3.67382 10.5871L7.32788 14.1489C7.64606 14.4591 7.79125 14.9059 7.71614 15.3439L6.85353 20.3733L11.3702 17.9987C11.7635 17.7919 12.2333 17.7919 12.6266 17.9987L17.1433 20.3733L16.2807 15.3439C16.2056 14.9059 16.3508 14.4591 16.6689 14.1489L20.323 10.5871L15.2732 9.85333C14.8335 9.78944 14.4534 9.51327 14.2568 9.11483L11.9984 4.53894Z'
                fill='#1E1E1F'
              />
            </svg>
            {learningItem.comments[0]?.rate}
          </div>
        </div>
        <div className='flex items-center justify-start gap-4 border-b border-b-[#DBDBDC]'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`p-3 cursor-pointer border-b-2 transition-colors duration-200 ${
                activeTab === index
                  ? 'border-b-primary font-bold'
                  : 'border-b-transparent hover:border-b-primary'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        {activeTab === 0 && (
          <LearningIntro description={learningItem.description} />
        )}
        {activeTab === 1 && <LearningTeacher teacher={learningItem.teacher} />}
        {activeTab === 2 && learningItem.state === 'course' && (
          <LearningHeadline chapters={learningItem.chapters} />
        )}
        {activeTab === 3 && (
          <LearningAudience audience={learningItem.audiences} />
        )}
        {activeTab === 4 && (
          <LearningComments comments={learningItem.comments} />
        )}
      </div>
      <div className='w-full bg-gradient-to-r from-[#047857] to-[#059669] flex flex-col items-center justify-center gap-4 py-4 text-white'>
        <h2 className='font-bold text-2xl'>
          آماده‌اید تا سفر یادگیری‌تان را آغاز کنید؟
        </h2>
        <div>
          <div className='relative text-center'>
            ۱ میلیون تومان
            <span className='absolute -translate-x-1/2 left-1/2 -top-6 rotate-[75deg]  bg-red-600 w-[1.5px] h-20'></span>
          </div>
          <span className='mt-2 block'>
            خرید دوره تنها با قیمت {learningItem.price} هزار تومن{' '}
          </span>
        </div>
        <Button className='flex flex-row-reverse items-center justify-center border border-[#C4C4C4] gap-2 bg-[#F6F6F6] hover:bg-[#F6F6F6] text-black'>
          <span>شرکت در دوره</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M7.42505 2.83052C7.60245 2.33254 8.07392 2 8.60256 2H15.0562C15.9094 2 16.5118 2.83587 16.242 3.64528L14.7905 8H18.7492C19.8534 8 20.4153 9.32683 19.647 10.1198L8.586 21.536C7.53226 22.6236 5.71405 21.6422 6.04495 20.1645L7.31418 14.4964L5.74573 14.4904C4.53898 14.4858 3.69895 13.2899 4.10392 12.1532L7.42505 2.83052ZM8.77889 3.5L5.51693 12.6565C5.45908 12.8189 5.57909 12.9898 5.75148 12.9904L8.25277 13C8.47997 13.0009 8.69453 13.1047 8.83621 13.2823C8.97789 13.4599 9.03142 13.6922 8.98177 13.9139L7.50871 20.4923L18.1589 9.5H13.7499C13.5088 9.5 13.2824 9.38411 13.1415 9.18853C13.0005 8.99296 12.9622 8.74154 13.0384 8.51283L14.7093 3.5H8.77889Z'
              fill='black'
            />
          </svg>
        </Button>
      </div>
    </>
  );
}
