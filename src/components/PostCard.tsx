import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/types";

interface PostCardProps {
  post: BlogPost;
  showCategory?: boolean;
  fromCategoryPage?: boolean;
}

export default function PostCard({ post, showCategory = false, fromCategoryPage = false }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Generate absolute path for post
  const postPath = `/post/${post.categorySlug}/${post.slug}`;
  
  const linkState = fromCategoryPage ? { fromCategory: true } : undefined;

  return (
    <article className="group cyber-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:translate-y-[-2px]">
      <Link to={postPath} state={linkState} className="flex flex-col h-full">
        <div className="flex flex-col h-full">
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors flex items-start gap-2">
            {post.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground mb-4 flex-1">
            {post.excerpt}
          </p>

          {/* Tags & Category */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {showCategory && (
              <Badge variant="outline" className="text-primary border-primary/30">
                {post.category}
              </Badge>
            )}
            {post.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-mono"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
