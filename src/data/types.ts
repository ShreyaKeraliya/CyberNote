export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  categorySlug: string;
  tags: string[];
  excerpt: string;
  content: string;
  readingTime: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
}
