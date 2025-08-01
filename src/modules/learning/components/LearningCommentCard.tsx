import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

export default function LearningCommentCard({ comment }: { comment: Comment }) {
  return (
    <div className='rounded-md border border-[#DFDFE1] p-4 flex flex-col gap-4'>
      <p className='text-[#555555]'>{comment.description}</p>
      <div className='flex items-center gap-4'>
        <Avatar className='w-12 h-12'>
          <AvatarImage
            src={comment.user.publicUserInformation.avatar?.url}
            alt={
              comment.user.publicUserInformation.avatar?.alternativeText ||
              'user avatar'
            }
          />
          <AvatarFallback className='bg-teal-100 text-teal-600 font-semibold'>
            {comment.user.publicUserInformation.firstName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-2'>
          <span>
            {comment.user.publicUserInformation.firstName}{' '}
            {comment.user.publicUserInformation.lastName}
          </span>
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
            <span className='text-[#555555]'>{comment.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
