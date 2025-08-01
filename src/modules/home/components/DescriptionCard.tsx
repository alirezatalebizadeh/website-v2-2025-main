import { Card, CardContent } from '@/components/ui/card';

export default function DescriptionCard(props: Description) {
  const { title, description, icon } = props;
  return (
    <Card className='bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group'>
      <CardContent className='p-6 flex flex-row items-center md:flex-col md:items-start gap-4'>
        <div className='w-12 h-12'>{icon}</div>
        <div className='flex flex-col items-start gap-4'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2 whitespace-nowrap'>
            {title}
          </h3>
          <p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
