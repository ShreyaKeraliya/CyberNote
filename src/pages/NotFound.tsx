import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Terminal, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm mb-6">
            <Terminal className="w-4 h-4" />
            <span>error: 404</span>
            <span className="animate-cursor-blink">_</span>
          </div>
          
          <h1 className="text-6xl font-bold text-foreground mb-4 font-mono">
            404
          </h1>
          
          <p className="text-xl text-muted-foreground mb-2">
            Page not found
          </p>
          
          <p className="text-sm text-muted-foreground mb-8 font-mono">
            The requested resource could not be located on this server.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
