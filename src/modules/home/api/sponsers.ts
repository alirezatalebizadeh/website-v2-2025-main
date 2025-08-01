import graphql from "@/lib/graphql";
import { GET_SPONSERS } from "@/lib/graphql/queries";


type GetSponserResponse = {
  sponsers: Sponser[];
};

export const getSponser = async (): Promise<Sponser[]> => {
  const data: GetSponserResponse = await graphql(GET_SPONSERS);
  return data.sponsers;
};
