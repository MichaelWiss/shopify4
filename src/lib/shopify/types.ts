export type Money = {
  amount: number;
  currencyCode: string;
};

export type MediaImage = {
  url: string;
  altText?: string | null;
  width?: number | null;
  height?: number | null;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  image?: MediaImage | null;
  price: Money;
  compareAtPrice?: Money | null;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  tags: string[];
  featuredImage?: MediaImage | null;
  media: MediaImage[];
  status: "ACTIVE" | "DRAFT";
  options: ProductOption[];
  variants: ProductVariant[];
  priceRange: {
    min: Money;
    max: Money;
  };
};
