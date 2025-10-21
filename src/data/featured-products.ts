import type { Product } from "@/lib/shopify/types";

export const featuredProducts: Product[] = [
  {
    id: "gid://shopify/Product/1",
    handle: "gouzle-stretch-block",
    title: "Gouzle Stretch Block",
    description: "Plant-based block cheese engineered to blister and pull.",
    featuredImage: {
      url: "/images/placeholder-block.svg",
      altText: "Gouzle stretch block"
    },
    media: [],
    tags: ["block", "melty", "plant-based"],
    status: "ACTIVE",
    options: [
      {
        id: "option-size",
        name: "Size",
        values: ["8oz"]
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/1",
        title: "Default",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "8oz"
          }
        ],
        image: {
          url: "/images/placeholder-block.svg",
          altText: "Gouzle stretch block"
        },
        price: {
          amount: 9.5,
          currencyCode: "USD"
        },
        compareAtPrice: null
      }
    ],
    priceRange: {
      min: {
        amount: 9.5,
        currencyCode: "USD"
      },
      max: {
        amount: 9.5,
        currencyCode: "USD"
      }
    }
  },
  {
    id: "gid://shopify/Product/2",
    handle: "night-market-shreds",
    title: "Night Market Shreds",
    description: "Micro shred blend that clings to noodles and melts clean.",
    featuredImage: {
      url: "/images/placeholder-shreds.svg",
      altText: "Night market shreds"
    },
    media: [],
    tags: ["shreds", "noodles", "ramen"],
    status: "ACTIVE",
    options: [
      {
        id: "option-size",
        name: "Size",
        values: ["8oz"]
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/2",
        title: "Default",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "8oz"
          }
        ],
        image: {
          url: "/images/placeholder-shreds.svg",
          altText: "Night market shreds"
        },
        price: {
          amount: 7.8,
          currencyCode: "USD"
        },
        compareAtPrice: null
      }
    ],
    priceRange: {
      min: {
        amount: 7.8,
        currencyCode: "USD"
      },
      max: {
        amount: 7.8,
        currencyCode: "USD"
      }
    }
  },
  {
    id: "gid://shopify/Product/3",
    handle: "umami-chili-oil",
    title: "Umami Chili Oil",
    description: "Gentle heat and laminated umami for every pan.",
    featuredImage: {
      url: "/images/placeholder-chili.svg",
      altText: "Umami chili oil"
    },
    media: [],
    tags: ["sauce", "pantry", "spicy"],
    status: "ACTIVE",
    options: [
      {
        id: "option-size",
        name: "Size",
        values: ["6oz"]
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/3",
        title: "Default",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "6oz"
          }
        ],
        image: {
          url: "/images/placeholder-chili.svg",
          altText: "Umami chili oil"
        },
        price: {
          amount: 6.2,
          currencyCode: "USD"
        },
        compareAtPrice: null
      }
    ],
    priceRange: {
      min: {
        amount: 6.2,
        currencyCode: "USD"
      },
      max: {
        amount: 6.2,
        currencyCode: "USD"
      }
    }
  },
  {
    id: "gid://shopify/Product/4",
    handle: "noodle-party-kit",
    title: "Noodle Party Kit",
    description: "Everything you need for a sheet-pan noodle party of four.",
    featuredImage: {
      url: "/images/placeholder-noodles.svg",
      altText: "Noodle party kit"
    },
    media: [],
    tags: ["bundle", "party"],
    status: "ACTIVE",
    options: [
      {
        id: "option-size",
        name: "Size",
        values: ["4 servings"]
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/4",
        title: "Default",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "4 servings"
          }
        ],
        image: {
          url: "/images/placeholder-noodles.svg",
          altText: "Noodle party kit"
        },
        price: {
          amount: 24,
          currencyCode: "USD"
        },
        compareAtPrice: null
      }
    ],
    priceRange: {
      min: {
        amount: 24,
        currencyCode: "USD"
      },
      max: {
        amount: 24,
        currencyCode: "USD"
      }
    }
  }
];
