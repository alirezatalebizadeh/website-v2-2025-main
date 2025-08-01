import graphql from '@/lib/graphql';
import { GET_BLOGS } from '@/lib/graphql/queries';

type GetBlogsResponse = {
  blogs: BlogPost[];
};

export const getBlogs = async (): Promise<BlogPost[]> => {
  const data: GetBlogsResponse = await graphql(GET_BLOGS);
  return data.blogs;
};
