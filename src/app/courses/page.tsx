import LearningList from '@/modules/learning/components/LearningList';

export default function CoursesPage() {
  return (
    <main className='container py-8 w-full px-4 sm:w-11/12 lg:w-10/12 mx-auto'>
      <h1 className='text-2xl font-bold mb-6 text-right'>
        دوره‌های نکست اسکیل
      </h1>
      <LearningList type='ejaze' />
    </main>
  );
}
