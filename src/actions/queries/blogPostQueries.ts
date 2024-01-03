import { gql } from "graphql-request";

const makeBlogPostsQueryWithRelay = (withCursor: boolean = false) => {
  const blogPosts = `
            title
            id
            createdAt
            date
            external
            externalLink
            keywords
            content {
              raw
            }
            thumbnail {
              url
            }
            slug
            }`;

const query = (inputVariables: string) => gql`
 query BlogPosts(${inputVariables}) {
    pages: blogPostsConnection(
      ${withCursor ? "after: $after" : ""}
      first: $first
      orderBy: createdAt_DESC
    ) {
      blogPosts: edges {
        cursor
        blogPost: node {${blogPosts}
        }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
    }
  }
}`;

  let variables = withCursor ? "$first: Int!, $after: String!" : "$first: Int!";

  const q = query(variables);

  return q;
};

const blogPostBySlugQuery = gql`
  query BlogPostBySlug($slug: String!) {
    blogPost: blogPost(where: { slug: $slug }) {
      title
      id
      createdAt
      date
      external
      externalLink
      keywords
      content {
        raw
      }
      thumbnail {
        url
      }
      slug
    }
  }
`;

export { makeBlogPostsQueryWithRelay, blogPostBySlugQuery }
