export type Testimonial = {
  documentId: string;
  description: string;
  publicUserInformation: {
    firstName: string;
    lastName: string;
    position?: string;
    avatar?: {
      url: string;
      alternativeText?: string;
    };
  };
};
export type TestimonialCardProps = {
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
  feedback: string;
};
