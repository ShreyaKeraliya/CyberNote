import { allPosts } from "./posts";
import { categories } from "./categories";
import { BlogPost, Category } from "./types";

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return allPosts.filter((post) => post.categorySlug === categorySlug);
}

export function getPostBySlug(
  categorySlug: string,
  postSlug: string
): BlogPost | undefined {
  return allPosts.find(
    (post) =>
      post.categorySlug === categorySlug && post.slug === postSlug
  );
}

export function getRecentPosts(count = 5): BlogPost[] {
  return [...allPosts]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, count);
}

export function getAllTags(): string[] {
  return Array.from(
    new Set(allPosts.flatMap((post) => post.tags))
  ).sort();
}

export function getPostsByTag(tag: string): BlogPost[] {
  return allPosts.filter((post) => post.tags.includes(tag));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getPostCountByCategory(categorySlug: string): number {
  return allPosts.filter(
    (post) => post.categorySlug === categorySlug
  ).length;
}
