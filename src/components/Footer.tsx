import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/60 backdrop-blur">
      {/* subtle glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left */}
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono text-sm tracking-wide">
              Learning cybersecurity, one commit at a time
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {[
              {
                href: "https://github.com/ShreyaKeraliya",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/shreya-keraliya-5737b3279/",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:shreyakeraliya0@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-primary/10"
              >
                <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground tracking-wide">
             {new Date().getFullYear()}{" "}
            <span className="text-foreground font-medium">cyber.notes</span> — 
            All content for educational purposes
          </p>
        </div>
      </div>
    </footer>
  );
}
