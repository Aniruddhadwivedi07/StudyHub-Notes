import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Home } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="flex-1 flex items-center justify-center py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* 404 Display */}
            <div className="space-y-4">
              <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                404
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Page Not Found
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
              </p>
            </div>

            {/* Helpful Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/"
                className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="text-2xl">🏠</div>
                  <h3 className="font-semibold text-foreground">Home</h3>
                  <p className="text-sm text-muted-foreground">
                    Return to the main page
                  </p>
                </div>
              </Link>
              <Link
                to="/browse"
                className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="text-2xl">📚</div>
                  <h3 className="font-semibold text-foreground">Browse</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore all subjects
                  </p>
                </div>
              </Link>
              <Link
                to="/my-notes"
                className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="text-2xl">📝</div>
                  <h3 className="font-semibold text-foreground">My Notes</h3>
                  <p className="text-sm text-muted-foreground">
                    View your notes
                  </p>
                </div>
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors shadow-sm"
            >
              <Home className="w-5 h-5" />
              Go to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
