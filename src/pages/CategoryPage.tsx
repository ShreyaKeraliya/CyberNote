
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { getCategoryBySlug, getPostsByCategory } from "@/data/utils";
import { ChevronLeft, Terminal, Layers, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug || "");
  const posts = getPostsByCategory(categorySlug || "");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold text-foreground">Category not found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Go back home
          </Link>
        </div>
      </Layout>
    );
  }

function getRelativeTime(date: string | Date) {
  const now = new Date();
  const past = new Date(date);

  const diffMs = now.getTime() - past.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) return "just now";
  if (diffMinutes < 60) return `${diffMinutes} min ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;

  // Same day
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 5) return `${diffWeeks} weeks ago`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) return `${diffMonths} months ago`;

  const diffYears = Math.floor(diffDays / 365);
  return `${diffYears} years ago`;
}



  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${15 + Math.random() * 10}s`
  }));
  
const latestPost = posts.length
  ? posts.reduce((latest, post) =>
      new Date(post.date) > new Date(latest.date) ? post : latest
    )
  : null;


  return (
    <Layout>
      <div className="relative overflow-hidden min-h-screen mt-10">
        {/* Animated Background Layers */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Animated Grid */}
          <div className="bg-grid-animated"></div>
          
          {/* Floating Particles */}
          <div className="particles-container">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration
                }}
              ></div>
            ))}
          </div>

          {/* Mouse Follow Gradient */}
          <div 
            className="pointer-events-none fixed w-96 h-96 rounded-full bg-primary/5 blur-3xl transition-all duration-1000 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          ></div>

          {/* Scan Line Effect */}
          <div className="scan-line"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              {/* Back Link */}
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors cyber-card rounded-lg px-4 py-2 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
              
              {/* Category Header Card */}
              <div className="cyber-card rounded-2xl p-8 md:p-10 bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Category Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 animate-pulse-slow"></div>
                    <div className="relative cyber-card rounded-2xl p-6 bg-primary/10 border-2 border-primary/30">
                      <span className="text-6xl md:text-7xl block">{category.icon}</span>
                    </div>
                  </div>
                  
                  {/* Category Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-primary font-mono text-sm mb-3">
                      <Terminal className="w-4 h-4" />
                      <span>~/categories/{categorySlug}</span>
                      <span className="animate-cursor-blink">_</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                      {category.name}
                    </h1>
                    
                    <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                      {category.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="cyber-border rounded-lg px-4 py-2 bg-muted/30 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" />
                          <span className="text-sm font-mono text-foreground font-semibold">
                            {posts.length} {posts.length === 1 ? "Post" : "Posts"}
                          </span>
                        </div>
                      </div>
                      
                      
                      <div className="cyber-border rounded-lg px-4 py-2 bg-muted/30 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-accent" />
                          <span className="text-sm font-mono text-foreground font-semibold">
                            Category
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/50"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/50"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/50"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/50"></div>
              </div>
            </div>
          </section>

          {/* Posts Grid */}
          <section className="py-12 pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
              {posts.length === 0 ? (
                <div className="cyber-card rounded-2xl p-12 bg-card/50 backdrop-blur-sm text-center animate-fade-in">
                  <div className="inline-block cyber-card rounded-full p-6 bg-muted/30 mb-6">
                    <FileText className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    No posts yet
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    This category doesn't have any posts yet. Check back soon for new content!
                  </p>
                  
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    Explore Other Categories
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Posts Count Header */}
                  <div className="flex items-center justify-between cyber-card rounded-xl px-6 py-4 bg-card/50 backdrop-blur-sm border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-sm font-mono text-muted-foreground">
                        Showing {posts.length} {posts.length === 1 ? "post" : "posts"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>
                        {latestPost
                          ? `Updated ${getRelativeTime(latestPost.date)}`
                          : "No recent updates"}
                      </span>
                    </div>
                  </div>

                  {/* Posts Grid with Stagger Animation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map((post, index) => (
                      <div
                        key={post.slug}
                        className="animate-fade-in"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        <PostCard post={post} fromCategoryPage={true} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
