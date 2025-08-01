import graphql from '@/lib/graphql';
import { GET_SINGLE_LEARNING_ITEM } from '@/lib/graphql/queries';

export const getSingleLearningItem = async (
  slug: string,
): Promise<SingleLearningItem> => {
  const data: any = await graphql(GET_SINGLE_LEARNING_ITEM, { slug });
  return data.courses?.[0];
};
