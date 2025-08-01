type LearningItem = {
  documentId: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  webinarLink: string;
  comments: { rate: number }[];
  thumbnail: {
    alternativeText: string;
    url: string;
    width: number;
    height: number;
  };
  teacher: {
    user: {
      firstName: string;
      lastName: string;
    };
    documentId: string;
  };
  state: 'webinar' | 'course';
  price?: number;
  slug: string;
};

type LearningCardProps = {
  documentId: string;
  webinarLink: string;
  url: string;
  alternativeText: string;
  title: string;
  description: string;
  rate: number;
  duration: string;
  level: string;
  teacher: string;
  type: 'webinar' | 'course';
  price?: number;
  slug: string;
};
type SingleLearningItem = {
  documentId: string;
  slug: string;
  state: string;
  title: string;
  description: string;
  certificate?: string;
  members?: string;
  level: string;
  price: number;
  duration: string;
  webinarLink?: string;
  teacher: {
    documentId: string;
    user: {
      avatar?: {
        documentId: string;
        alternativeText: string;
        url: string;
      };
      bio?: string;
      position?: string;
      firstName: string;
      lastName: string;
    };
  };
  will_learn: { id: string; item: string }[];
  audiences: { id: string; item: string }[];
  skills: { id: string; item: string }[];
  chapters: {
    id: string;
    title: string;
    duration: string;
    video: string;
    description: string;
    tags: { id: string; item: string }[];
  }[];
  thumbnail: {
    documentId: string;
    alternativeText: string;
    url: string;
  };
  ejazeFields?: {
    id: string;
    courseId: string;
  }[];
  tags: {
    id: string;
    title: string;
  }[];
  comments: {
    documentId: string;
    rate: number;
    description: string;
    user: {
      publicUserInformation: {
        firstName: string;
        lastName: string;
        avatar: {
          alternativeText: string;
          url: string;
        };
      };
    };
  }[];
};

type GetSingleLearningItemResponse = {
  learningItem: SingleLearningItem;
};
