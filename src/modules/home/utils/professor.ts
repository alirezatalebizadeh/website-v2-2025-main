
export const professorToCardProps = (
  professor: Professor
): ProfessorCardProps => {
  const {
    user: {
      firstName,
      lastName,
      position,
      avatar: { url, alternativeText },
    },
  } = professor;

  return {
    fullName: `${firstName} ${lastName}`,
    position,
    avatarUrl: url,
    avatarAlt: alternativeText,
  };
};
