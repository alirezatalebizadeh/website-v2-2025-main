type Avatar = {
  width: number;
  height: number;
  mime: string;
  url: string;
};

type Links = { key: string; value: string | null };

type TeamMember = {
  documentId: string;
  firstName: string;
  lastName: string;
  role: string;
  team: string;
  linkedin: string | null;
  instagram: string | null;
  site: string | null;
  avatar: Avatar;
  links: Links[];
};

type TeamsResponse = {
  teams: TeamMember[];
};

type MembersByTeam = {
  [teamName: string]: TeamMember[];
};
