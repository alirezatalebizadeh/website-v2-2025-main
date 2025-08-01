import { getSingleLearningItem } from '@/modules/learning/api/getSingleLearningItem';
import LearningSingleDetail from '@/modules/learning/components/LearningSingleDetail';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetail({ params }: PageProps) {
  const { slug } = await params;
  const learningItem = await getSingleLearningItem(slug);

  return <LearningSingleDetail learningItem={learningItem} />;
}
