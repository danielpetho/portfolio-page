import { Query } from "@/typings";
import { gql } from "graphql-request";

const makeFiltersQueryWithRelay = (withCursor: boolean = false) => {
  const fields = `
            name
            id
            createdAt
            instagramLink
            snapchatLink
            tiktokLink
            webLink
            preview {
              url
            }
            previewImage {
              url
            }
            snapcode {
              url
            }
            instacode {
              url
            }
            tikcode {
              url
            }
            slug
            }`;

const query = (inputVariables: string) => gql`
 query Filters(${inputVariables}) {
    pages: filtersConnection(
      ${withCursor ? "after: $after" : ""}
      first: $first
      orderBy: createdAt_DESC
    ) {
      filters: edges {
        cursor
        filter: node {${fields}
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

const filterBySlugQuery = gql`
  query FilterBySlug($slug: String!) {
    filter: filter(where: { slug: $slug }) {
      name
      id
      createdAt
      instagramLink
      snapchatLink
      tiktokLink
      webLink
      preview {
        url
      }
      previewImage {
        url
      }
      snapcode {
        url
      }
      instacode {
        url
      }
      tikcode {
        url
      }
      slug
    }
  }
`;

export { makeFiltersQueryWithRelay, filterBySlugQuery };
