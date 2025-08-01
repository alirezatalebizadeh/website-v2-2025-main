import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Teacher = {
  user: {
    avatar?: {
      url: string;
      alternativeText: string;
    };
    firstName: string;
    lastName: string;
    position?: string;
    bio?: string | null;
  };
  documentId: string;
};

export default function LearningTeacher({ teacher }: { teacher: Teacher }) {
  const { user } = teacher;
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>مدرس دوره</h1>
      <div className='flex items-center justify-start gap-4'>
        <div>
          <Avatar className='w-12 h-12'>
            <AvatarImage
              src={user.avatar?.url}
              alt={user.avatar?.alternativeText || 'user avatar'}
            />
            <AvatarFallback className='bg-teal-100 text-teal-600 font-semibold'>
              {user.firstName.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className='flex flex-col gap-2'>
          <span>
            {user.firstName} {user.lastName}
          </span>
          <span className='text-xs'>{user.position || ''}</span>
        </div>
      </div>
      <p>{user.bio || ''}</p>
    </div>
  );
}
