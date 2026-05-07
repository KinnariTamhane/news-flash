export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  source: string;
  image: string;
};

export type NewsData = {
  [category: string]: NewsArticle[];
};