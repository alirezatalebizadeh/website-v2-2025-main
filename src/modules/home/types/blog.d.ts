type BlogPost = {
  documentId: string;
  title: string;
  summery: string;
  readingTime: number;
  author: {
    user: {
      firstName: string;
      lastName: string;
      avatar?: {
        alternativeText?: string;
        url: string;
      };
    };
  };
  cover: {
    alternativeText?: string;
    url: string;
    width: number;
    height: number;
  };
  category?: {
    title: string;
  };
};

type BlogCardProps = {
  title: string;
  summery: string;
  readingTime: number;
  authorName: string;
  authorAvatarUrl?: string;
  authorAvatarAlt?: string;
  coverImageUrl: string;
  coverImageAlt?: string;
  coverWidth: number;
  coverHeight: number;
  category?: string;
};
