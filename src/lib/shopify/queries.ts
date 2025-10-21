export const PRODUCT_CARD_QUERY = /* GraphQL */ `
  query ProductCard($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      tags
      featuredImage {
        url
        altText
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;

export const FEATURED_COLLECTION_QUERY = /* GraphQL */ `
  query FeaturedCollection($handle: String!, $first: Int = 8) {
    collection(handle: $handle) {
      id
      title
      description
      products(first: $first) {
        nodes {
          id
          title
          handle
          description
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export const PRODUCT_PAGE_QUERY = /* GraphQL */ `
  query ProductPage($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      tags
      featuredImage {
        url
        altText
        width
        height
      }
      media(first: 8) {
        nodes {
          ... on MediaImage {
            image {
              url
              altText
              width
              height
            }
          }
        }
      }
      variants(first: 20) {
        nodes {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          image {
            url
            altText
          }
        }
      }
      options {
        id
        name
        values
      }
    }
  }
`;
