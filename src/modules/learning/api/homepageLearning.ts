import graphql from "@/lib/graphql";
import { GET_COURSES } from "@/lib/graphql/queries";

type GetCoursesResponse = {
  courses: LearningItem[];
};

export const getAllLearningItems = async (
  type: "webinar" | "course"
): Promise<LearningItem[]> => {
  const data: GetCoursesResponse = await graphql(GET_COURSES);
  return data.courses.filter((item) => item.state === type);
};