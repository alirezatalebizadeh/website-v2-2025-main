import graphql from '@/lib/graphql';
import { GET_COURSES_FOR_PAGE } from '@/lib/graphql/queries';

type GetLearningItemsOptions = {
  type: 'course' | 'webinar' | 'ejaze';
  level?: string;
  category?: string;
  page?: number;
  pageSize?: number;
  sort?: string;
};

export const getLearningItems = async ({
  type,
  level,
  category,
  page = 1,
  pageSize = 12,
  sort,
}: GetLearningItemsOptions): Promise<{
  items: LearningItem[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    pageCount: number;
  };
}> => {
  const filters = {
    state: { eq: type },
    ...(level && { level: { eq: level } }),
    ...(category && { category: { eq: category } }),
  };

  if (level && level !== 'all') filters.level = { eq: level };
  if (category && category !== 'all') filters.category = { eq: category };

  const variables = {
    filters,
    pagination: { page, pageSize },
    sort: sort ? [sort] : ['createdAt:desc'],
  };

  const data: any = await graphql(GET_COURSES_FOR_PAGE, variables);

  const items: LearningItem[] = data.courses.map((course: any) => ({
    documentId: course.documentId,
    title: course.title,
    description: course.description,
    level: course.level,
    duration: course.duration,
    webinarLink: course.webinarLink,
    comments: course.comments,
    state: course.state,
    price: course.price,
    teacher: course.teacher,
    thumbnail: course.thumbnail,
    slug: course.slug,
  }));

  const pagination = data.courses_connection.pageInfo;

  return { items, pagination };
};
