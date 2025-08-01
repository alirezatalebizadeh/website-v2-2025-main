import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LearningCommentCard from './LearningCommentCard';

type Comment = {
  documentId: string;
  rate: number;
  description: string;
  user: {
    publicUserInformation: {
      firstName: string;
      lastName: string;
      avatar: {
        alternativeText: string;
        url: string;
      };
    };
  };
};

export default function LearningComments({
  comments,
}: {
  comments: Comment[];
}) {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>امتیاز و دیدگاه کاربران</h1>
        <div className='flex items-center justify-start gap-4'>
          <span>{comments.length} نفر</span>
          <div className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M7.10433 0.899719C7.47114 0.156471 8.53099 0.156476 8.8978 0.89972L10.8282 4.81122L15.1448 5.43846C15.9651 5.55764 16.2926 6.56561 15.699 7.14415L12.5755 10.1888L13.3129 14.488C13.453 15.3049 12.5956 15.9278 11.8619 15.5422L8.00106 13.5124L4.14018 15.5422C3.40655 15.9278 2.54913 15.3049 2.68924 14.488L3.4266 10.1888L0.303081 7.14415C-0.290438 6.56561 0.0370772 5.55764 0.857295 5.43845L5.17389 4.81122L7.10433 0.899719Z'
                fill='#FFCC00'
              />
            </svg>
            <span>
              {Math.round(
                comments.reduce((acc, comment) => acc + comment.rate, 0) /
                  comments.length,
              )}
            </span>
          </div>
          <span>(از مجموع ۲۰ امتیاز)</span>
        </div>
        <div className='flex items-center gap-4'>
          <Input placeholder='دیدگاه خود را بنویسید...' />
          <Button className='bg-black text-white'>ثبت دیدگاه</Button>
        </div>
        <div className='grid sm:grid-cols-2 gap-4'>
          {comments.map((comment) => (
            <LearningCommentCard key={comment.documentId} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
