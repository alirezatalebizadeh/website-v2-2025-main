import graphql from '@/lib/graphql';
import { GET_TESTIMONIALS } from '@/lib/graphql/queries';
import type { Testimonial } from '@/modules/home/types/testimonial';

type GetTestimonialsResponse = {
  testimonials: Testimonial[];
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const data: GetTestimonialsResponse = await graphql(GET_TESTIMONIALS);
  return data.testimonials;
};
