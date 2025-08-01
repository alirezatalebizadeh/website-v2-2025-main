import type {
  Testimonial,
  TestimonialCardProps,
} from '@/modules/home/types/testimonial';

export const testimonialToCardProps = (
  testimonial: Testimonial,
): TestimonialCardProps => {
  const {
    description,
    publicUserInformation: { firstName, lastName, position, avatar },
  } = testimonial;

  return {
    name: `${firstName} ${lastName}`,
    role: position,
    feedback: description,
    avatar: avatar?.url,
  };
};
