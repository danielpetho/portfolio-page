export type FilterPage = {
  cursor: string;
  filter: Filter;
};

export type Filter = {
  name: string;
  id: string;
  createdAt: string;
  instagramLink?: string;
  snapchatLink?: string;
  tiktokLink?: string;
  webLink?: string;
  preview: {
    url: string;
  };
  slug: string;
};

export type Query = {
  query: string;
  first: number;
  after: string;
};
