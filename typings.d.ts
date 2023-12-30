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
  previewImage: {
    url: string;
  };
  snapcode: {
    url: string;
  };
  instacode: {
    url: string;
  };
  tikcode: {
    url: string;
  };
  slug: string;
};

export type Query = {
  query: string;
  first: number;
  after: string;
};

export type SelectedWorkType = {
  title: string;
  imgUrl: string;
  imgAlt: string;
  link: string;
  year: string;
  internalLink: boolean;
}
