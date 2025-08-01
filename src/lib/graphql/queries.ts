export const GET_SINGLE_LEARNING_ITEM = `
query Courses($slug: String!) {
    courses(filters: { slug: { eq: $slug } }) {
        documentId
        title
        description
        slug
        certificate
        members
        level
        price
        duration
        webinarLink
        state
        comments {
            documentId
            rate
            description
            user {
                publicUserInformation {
                    firstName
                    lastName
                    avatar {
                        alternativeText
                        url
                    }
                }
            }
        }
        teacher {
            documentId
            user {
                avatar {
                    documentId
                    alternativeText
                    url
                }
                bio
                position
                firstName
                lastName
            }
        }
        will_learn {
            id
            item
        }
        audiences {
            id
            item
        }
        skills {
            id
            item
        }
        chapters {
            id
            title
            duration
            video
            description
            tags {
                id
                item
            }
        }
        thumbnail {
            documentId
            alternativeText
            url
        }
        ejazeFields {
            id
            courseId
        }
        tags {
            id
            title
        }
    }
}

`;

export const GET_COURSES_FOR_PAGE = `
query GetCourses(
  $filters: CourseFiltersInput
  $pagination: PaginationArg
  $sort: [String]
) {
  courses(filters: $filters, pagination: $pagination, sort: $sort) {
    documentId
    title
    description
    level
    duration
    webinarLink
    state
    price
    slug
    comments {
      rate
    }
    teacher {
      user {
        firstName
        lastName
      }
      documentId
    }
    thumbnail {
      alternativeText
      url
    }
  }
  courses_connection(filters: $filters) {
    pageInfo {
      total
      page
      pageSize
      pageCount
    }
  }
}
`;

export const GET_COURSES = `
query Courses {
    courses {
        documentId
        title
        description
        level
        duration
        comments {
            rate
        }
        webinarLink
        thumbnail {
            alternativeText
            url
        }
        teacher {
            user {
                firstName
                lastName
            }
        }
        state
        price
        slug
    }
}
`;
export const GET_PROFESSORS = `
query Teachers {
    teachers {
        documentId
        user {
            firstName
            lastName
            position
            avatar {
                alternativeText
                url
            }
        }
    }
}
`;

export const GET_TESTIMONIALS = `
query Testimonials {
    testimonials {
        documentId
        description
        publicUserInformation {
            avatar {
                alternativeText
                url
            }
            position
            firstName
            lastName
        }
    }
}`;

export const GET_SPONSERS = `
query Sponsers {
    sponsers {
        documentId
        image {
            alternativeText
            url
        }
    }
}
`;
export const GET_BLOGS = `
 query GET_BLOGS {
    blogs {
        documentId
        title
        summery
        readingTime
        author {
            user {
                firstName
                lastName
                avatar {
                    alternativeText
                    url
                }
            }
        }
        cover {
            alternativeText
            url
            width
            height
        }
        category {
            title
        }
    }
}
`;

export const GET_SEO = `
query Seo($path: String!) {
    seos(filters: { pathname: { eq: $path } }) {
        seo {
            id
            metaTitle
            metaDescription
            metaRobots
            canonicalURL
            structuredData
            openGraph {
                id
                og_title
                og_description
                og_url
                og_type
                og_image {
                    alternativeText
                    documentId
                    url
                }
            }
            metaImage {
                documentId
                alternativeText
                url
            }
        }
    }
}
    `;

export const GET_TEAMMEMBERS = `
query Teams {
    teams {
        documentId
        firstName
        lastName
        role
        team
        linkedin
        instagram
        site
        avatar {
            width
            height
            mime
            url
        }
    }
}
    `;
