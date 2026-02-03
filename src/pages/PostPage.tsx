import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import MarkdownContent from "@/components/MarkdownContent";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ChevronLeft, Tag, Terminal, BookOpen, Eye } from "lucide-react";
import { getCategoryBySlug, getPostBySlug } from "@/data/utils";
import { Button } from "@/components/ui/button";

export default function PostPage() {
  const { categorySlug, postSlug } = useParams<{
    categorySlug: string;
    postSlug: string;
  }>();
  const navigate = useNavigate();
  const location = useLocation();

  const post = getPostBySlug(categorySlug || "", postSlug || "");
  const category = getCategoryBySlug(categorySlug || "");

  if (!post || !category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Go back home
          </Link>
        </div>
      </Layout>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Handle "Back to Category" button click
  const handleBackToCategory = () => {
    const categoryPath = `/category/${category.slug}`;
    
    // Check if we came from a category page
    const cameFromCategory = location.state?.fromCategory === true;
    
    if (cameFromCategory) {
      // Go back in history if we came from a category page
      navigate(-1);
    } else {
      // Navigate to category page (works for home page navigation or direct URL access)
      navigate(categoryPath);
    }
  };

  return (
    <Layout>
      <div className="relative min-h-screen mt-10">
        {/* Subtle Background - Non-distracting */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Very subtle gradient orbs - low opacity */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-30"></div>
          
          {/* Static grid - very subtle */}
          <div className="absolute inset-0 bg-grid-animated opacity-20"></div>
        </div>

        <article className="relative z-10 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Terminal-style breadcrumb */}
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-8 opacity-80">
              <Terminal className="w-4 h-4" />
              <Link to="/" className="hover:text-primary/80 transition-colors">
                ~
              </Link>
              <span>/</span>
              <Link
                to={`/category/${category.slug}`}
                className="hover:text-primary/80 transition-colors"
              >
                {category.slug}
              </Link>
              <span>/</span>
              <span className="text-muted-foreground">{postSlug}</span>
            </div>

            {/* Back to Category Button */}
            <Button
              variant="ghost"
              onClick={handleBackToCategory}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground 
                        hover:text-foreground hover:bg-muted/50
                        transition-all rounded-lg px-3 py-2
                        mb-8 -ml-3 h-auto border border-transparent hover:border-border"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to {category.name}
            </Button>

            {/* Post Header Card */}
            <header className="cyber-card rounded-2xl p-8 md:p-10 bg-card/95 backdrop-blur-sm border border-border mb-12 hover:border-primary/30 transition-all duration-300 animate-fade-in">
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <Badge 
                  variant="outline" 
                  className="text-primary border-primary/30 bg-primary/5 px-3 py-1 hover:bg-primary/10 transition-colors"
                >
                  <span className="mr-1.5">{category.icon}</span>
                  {category.name}
                </Badge>
                
                <div className="h-4 w-px bg-border"></div>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Eye className="w-3 h-3" />
                  <span className="font-mono">{post.readingTime}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border/50">
                <div className="flex items-center gap-2 cyber-border rounded-lg px-3 py-1.5 bg-muted/30">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-mono">{formattedDate}</span>
                </div>
                
                <div className="flex items-center gap-2 cyber-border rounded-lg px-3 py-1.5 bg-muted/30">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="font-mono">{post.readingTime}</span>
                </div>

                <div className="flex items-center gap-2 cyber-border rounded-lg px-3 py-1.5 bg-muted/30">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span className="font-mono text-xs">Article</span>
                </div>
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="font-mono text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Corner Accents - Subtle */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-primary/30"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-primary/30"></div>
            </header>

            {/* Post Content - Clean reading area */}
            <div className="cyber-card rounded-2xl p-8 md:p-12 bg-card/98 backdrop-blur-sm border border-border/50 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="prose-cyber max-w-none">
                <MarkdownContent content={post.content} />
              </div>
            </div>

            {/* Footer Navigation */}
            <footer className="cyber-card rounded-xl p-6 bg-card/95 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  to={`/category/${category.slug}`}
                  className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">More {category.name} posts</span>
                </Link>

                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Terminal className="w-3 h-3" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </footer>

            {/* Reading Progress Indicator - Optional */}
            <div className="fixed bottom-0 left-0 right-0 h-1 bg-border/30 z-50 pointer-events-none">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
                style={{
                  width: '0%', // This would be controlled by scroll progress with JS
                }}
              ></div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}