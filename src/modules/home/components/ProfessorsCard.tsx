import Image from 'next/image';
import Link from 'next/link';
import workImage from '@/../public/images/nobitext.png';

export default function ProfessorsCard({
  fullName,
  position,
  avatarUrl,
  avatarAlt,
}: ProfessorCardProps) {
  return (
    <Link
      href='#'
      className='relative bg-gradient-to-t from-[#32CD99] to-[#106246] rounded-lg block w-full h-[400px] overflow-hidden'
    >
      <div className='relative w-full h-full'>
        <Image
          src={avatarUrl}
          alt={avatarAlt ? avatarAlt : 'Professor Avatar'}
          fill
          className='object-cover'
          loading='lazy'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
        />
      </div>

      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 px-6 py-2 text-center">
        <h3 className="text-white font-semibold text-xl mb-2">{fullName}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{position}</p>
        <div className="flex justify-center">
          <Image
            src={workImage}
            alt="Company logo"
            className="h-12 w-auto object-contain"
          />
        </div>
      </div> */}
    </Link>
  );
}
