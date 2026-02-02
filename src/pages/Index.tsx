import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import PostCard from "@/components/PostCard";
import { categories } from "@/data/categories";
import { getRecentPosts } from "@/data/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FallingLetters from "@/components/FallingLetters";
import { useState } from "react";

export default function Index() {
  const recentPosts = getRecentPosts(4);
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${15 + Math.random() * 10}s`
  }));

  return (
    <Layout>
      {/* Hero Section with Falling Letters Background */}
      <div className="relative z-10">
        <FallingLetters />
        <Hero />
      </div>

        <div>
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

      {/* Categories Section with Gradient Background */}
      <section className="py-26 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-cyber -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground mt-4">
              Explore by Category
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section with Alternative Gradient */}
      <section className="py-16 relative overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-mesh-gradient -z-10"></div>
        <div className="absolute inset-0 bg-card/30 -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Recent Posts
            </h2>
            <Link
              to="/category/cybersecurity-projects"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} showCategory />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Neon Glow Background */}
      <section className="py-16 relative overflow-hidden">
        {/* Neon Glow Gradient Background */}
        <div className="absolute inset-0 bg-neon-glow -z-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="cyber-border rounded-lg p-8 md:p-12 max-w-2xl mx-auto backdrop-blur-sm bg-background/30">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Follow the Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              This blog documents my path from cybersecurity student to professional. 
              Every post is a step forward in understanding this field.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              About Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}