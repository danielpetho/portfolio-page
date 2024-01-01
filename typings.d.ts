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

export type BlogPostPage = {
  cursor: string;
  blogPost: BlogPost;
};

export type BlogPost = {
  title: string;
  id: string;
  createdAt: string;
  date: string;
  external: boolean;
  externalLink: string;
  keywords: string[];
  content: {
    raw: raw | string;
  };
  slug: string;
  thumbnail: {
    url: string;
  };
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
  contractor: string;
  internalLink: boolean;
}
