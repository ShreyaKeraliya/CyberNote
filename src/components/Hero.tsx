import { categories } from "@/data/categories";
import { allPosts } from "@/data/posts";
import { Terminal } from "lucide-react";
import FallingLetters from "./FallingLetters";
import Animated3DElement from "./Animated3DElement";
import CyberIllustration from "./CyberIllustration";
import CyberGlobeIllustration from "./CyberGlobeIllustration";

export default function Hero() {
  const categoryCount = categories.length;
  const articleCount = allPosts.length;

  return (
    <section className="relative py-50 md:py-32 overflow-hidden isolate mt-16">
      <FallingLetters />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute inset-0 scanline opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="max-w-3xl">
            {/* Terminal-style prefix */}
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-6">
              <Terminal className="w-4 h-4" />
              <span>~/cybersecurity/notes</span>
              <span className="animate-cursor-blink">_</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Cybersecurity Learning</span>
              <br />
              <span className="gradient-text">Notes, Projects & Experiments</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Documenting my journey in offensive & defensive security, cloud security,
              and everything in between. Learning in public, one vulnerability at a time.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-10 mb-12">
              <div className="cyber-border rounded-lg px-4 py-3">
                <span className="block text-2xl font-bold text-primary font-mono">
                  {categoryCount}
                </span>
                <span className="text-sm text-muted-foreground">Categories</span>
              </div>

              <div className="cyber-border rounded-lg px-4 py-3">
                <span className="block text-2xl font-bold text-accent font-mono">
                  {articleCount}
                </span>
                <span className="text-sm text-muted-foreground">
                  {articleCount === 1 ? "Article" : "Articles"}
                </span>
              </div>

              <div className="cyber-border rounded-lg px-4 py-3">
                <span className="block text-2xl font-bold text-foreground font-mono">∞</span>
                <span className="text-sm text-muted-foreground">To Learn</span>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Animated Element */}
          <div className="hidden lg:flex justify-center items-center">
            {/* <CyberIllustration /> */}
            <CyberGlobeIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
