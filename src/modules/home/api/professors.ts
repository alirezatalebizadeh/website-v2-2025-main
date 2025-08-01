import graphql from "@/lib/graphql";
import { GET_PROFESSORS } from "@/lib/graphql/queries";


type GetProfessorsResponse = {
  teachers: Professor[];
};

export const getProfessors = async (): Promise<Professor[]> => {
  const data: GetProfessorsResponse = await graphql(GET_PROFESSORS);
  return data.teachers;
};
