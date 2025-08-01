export const blogToCardProps = (blog: BlogPost): BlogCardProps => {
  return {
    title: blog.title,
    summery: blog.summery,
    readingTime: blog.readingTime,
    authorName: `${blog.author.user.firstName} ${blog.author.user.lastName}`,
    authorAvatarUrl: blog.author.user.avatar?.url,
    authorAvatarAlt: blog.author.user.avatar?.alternativeText,
    coverImageUrl: blog.cover?.url,
    coverImageAlt: blog.cover?.alternativeText,
    coverWidth: blog.cover?.width,
    coverHeight: blog.cover?.height,
    category: blog.category?.title,
  };
};
