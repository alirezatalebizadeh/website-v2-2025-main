export const learningToCardProps = (item: LearningItem): LearningCardProps => {
  return {
    documentId: item.documentId,
    webinarLink: item.webinarLink,
    url: item.thumbnail.url,
    alternativeText: item.thumbnail.alternativeText,
    title: item.title,
    description: item.description,
    rate: item.comments?.[0]?.rate || 0,
    duration: item.duration,
    level: item.level,
    teacher: `${item.teacher.user.firstName} ${item.teacher.user.lastName}`,
    type: item.state,
    price: item.price,
    slug: item.slug,
  };
};
