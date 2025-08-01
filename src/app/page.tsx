import {
  Sponsers,
  Hero,
  Professors,
  Testimonials,
  Learning,
  LatestBlogs,
} from '@/modules/home';
import { getBlogs } from '@/modules/home/api/blog';
import { getAllLearningItems } from '@/modules/learning/api/homepageLearning';
import { getProfessors } from '@/modules/home/api/professors';
import { getSponser } from '@/modules/home/api/sponsers';
import { getTestimonials } from '@/modules/home/api/testimonials';

export default async function Home() {
  const [
    webinarData,
    courseData,
    blogData,
    professorData,
    sponserData,
    testimonialData,
  ] = await Promise.all([
    getAllLearningItems('webinar'),
    getAllLearningItems('course'),
    getBlogs(),
    getProfessors(),
    getSponser(),
    getTestimonials(),
  ]);

  return (
    <div className='flex flex-col gap-16 max'>
      <Hero />
      <Learning items={webinarData.slice(0, 4)} type='webinar' />
      <Learning items={courseData.slice(0, 4)} type='course' />
      <Professors professors={professorData} />
      <Sponsers sponsers={sponserData} />
      <Testimonials testimonials={testimonialData} />
      <LatestBlogs blogs={blogData.slice(0, 3)} />
    </div>
  );
}
