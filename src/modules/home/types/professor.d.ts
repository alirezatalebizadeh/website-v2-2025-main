type Professor = {
  documentId: string;
  user: {
    firstName: string;
    lastName: string;
    position: string;
    avatar: {
      alternativeText: string;
      url: string;
    };
  };
};
type ProfessorCardProps = {
  fullName: string;
  avatarUrl: string;
  avatarAlt: string;
  position: string;
};
