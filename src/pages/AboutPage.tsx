import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Terminal, Shield, BookOpen, Code, Cloud, Target, Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [activeInterest, setActiveInterest] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const interests = [
    { 
      icon: Target, 
      label: "Penetration Testing",
      description: "Ethical hacking and vulnerability assessment"
    },
    { 
      icon: Shield, 
      label: "Defensive Security",
      description: "Security monitoring and incident response"
    },
    { 
      icon: Cloud, 
      label: "Cloud Security",
      description: "Securing cloud infrastructure and services"
    },
    { 
      icon: Code, 
      label: "Security Automation",
      description: "Building tools to automate security tasks"
    },
    { 
      icon: BookOpen, 
      label: "Continuous Learning",
      description: "Always exploring new security concepts"
    },
  ];

  const contentTypes = [
    { 
      icon: "📚", 
      title: "Concepts", 
      description: "Fundamental security concepts explained clearly",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      icon: "🛠️", 
      title: "Projects", 
      description: "Hands-on labs and home lab setups",
      color: "from-purple-500/20 to-pink-500/20"
    },
    { 
      icon: "⚡", 
      title: "Tools", 
      description: "Deep dives into security tools and their usage",
      color: "from-orange-500/20 to-red-500/20"
    },
    { 
      icon: "📝", 
      title: "Notes", 
      description: "Quick references and cheat sheets",
      color: "from-green-500/20 to-emerald-500/20"
    },
  ];

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${15 + Math.random() * 10}s`
  }));

  return (
    <Layout>
      {/* Animated Background Layers */}
      <div className="fixed inset-0 z-0   ">
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

      <div className="relative z-10">
        <section className="relative py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header with Animation */}
            <div className="mb-16 animate-fade-in">
              <div className="flex items-center gap-2 text-primary font-mono text-sm mb-6 group">
                <Terminal className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary/80 transition-colors">~/about</span>
                <span className="animate-cursor-blink">_</span>
              </div>
              
              <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text animate-gradient">
                About This Blog
              </h1>
              <p className="text-xl text-muted-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                A journey through cybersecurity
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="space-y-8">
              {/* Learning in Public - Hero Card */}
              <div className="cyber-card rounded-xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary backdrop-blur-sm bg-card/80">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg animate-pulse-subtle">
                    <Terminal className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      Learning in Public
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
                  </div>
                </div>
                <p className="text-secondary-foreground leading-relaxed text-lg">
                  This blog is my personal documentation of learning cybersecurity. I'm a student 
                  pursuing a path toward a master's degree in cybersecurity, and I believe in the 
                  power of learning in public.
                </p>
                <p className="text-secondary-foreground leading-relaxed mt-4">
                  Every post here represents something I've learned, experimented with, or built. 
                  This isn't a polished portfolio—it's a raw, evolving record of my journey.
                </p>
              </div>

              {/* What You'll Find - Interactive Cards */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-primary">→</span>
                  What You'll Find Here
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {contentTypes.map((item, index) => (
                    <div
                      key={item.title}
                      className={`cyber-card rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer group relative overflow-hidden backdrop-blur-sm bg-card/80`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="relative z-10">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 animate-bounce-subtle">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas of Interest - Interactive Tags */}
              <div className="cyber-card rounded-xl p-8 backdrop-blur-sm bg-card/80">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary animate-spin-slow" />
                  Areas of Interest
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interests.map(({ icon: Icon, label, description }, index) => (
                    <div
                      key={label}
                      className={`relative group cursor-pointer`}
                      onMouseEnter={() => setActiveInterest(index)}
                      onMouseLeave={() => setActiveInterest(null)}
                    >
                      <div className={`
                        flex items-center gap-3 bg-muted/50 backdrop-blur-sm px-5 py-4 rounded-xl
                        border border-border hover:border-primary/50
                        transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                        ${activeInterest === index ? 'bg-primary/5 border-primary scale-105 shadow-primary/20' : ''}
                      `}>
                        <Icon className={`w-5 h-5 transition-all duration-300 ${
                          activeInterest === index ? 'text-primary scale-110 animate-pulse' : 'text-primary/70'
                        }`} />
                        <span className="text-sm font-medium text-foreground">{label}</span>
                      </div>
                      
                      {/* Tooltip */}
                      {activeInterest === index && (
                        <div className="absolute z-20 left-0 right-0 top-full mt-2 p-3 bg-popover/95 backdrop-blur-md border border-border rounded-lg shadow-xl animate-slide-up">
                          <p className="text-xs text-muted-foreground">{description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect Section - Enhanced Links */}
              <div className="cyber-card rounded-xl p-8 bg-gradient-to-br from-card/80 to-muted/30 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                  Let's Connect
                </h2>
                <p className="text-secondary-foreground mb-6 text-lg">
                  If you're also learning cybersecurity or have feedback on any of my posts, 
                  I'd love to connect.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/ShreyaKeraliya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-foreground/20"
                  >
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">GitHub</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shreya-keraliya-5737b3279/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">LinkedIn</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Back Link with Animation */}
            <div className="mt-16 pt-8 border-t border-border">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <span className="group-hover:underline">Back to Home</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}