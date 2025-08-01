import graphql from '@/lib/graphql';
import { GET_TEAMMEMBERS } from '@/lib/graphql/queries';
import _ from 'lodash';

export const getTeamMembers = async (): Promise<MembersByTeam> => {
  const data: TeamsResponse = await graphql(GET_TEAMMEMBERS);
  const newData = data.teams.map((item) => ({
    ...item,
    links: [
      { key: 'instagram', value: item.instagram },
      { key: 'linkedin', value: item.linkedin },
      { key: 'site', value: item.site },
    ],
  }));
  const teamsByGroup = _.groupBy(newData, 'team');

  return teamsByGroup;
};
