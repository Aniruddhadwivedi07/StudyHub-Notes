import { Download, BookMarked, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const resources = [
  {
    title: "Python Documentation",
    description: "Official Python documentation with guides and references.",
    icon: "📚",
    category: "Documentation"
  },
  {
    title: "LeetCode",
    description: "Practice coding problems and prepare for interviews.",
    icon: "⚡",
    category: "Practice"
  },
  {
    title: "MDN Web Docs",
    description: "Comprehensive JavaScript, HTML, and CSS reference.",
    icon: "🌐",
    category: "Documentation"
  },
  {
    title: "GeeksforGeeks",
    description: "Tutorials, algorithms, and programming concepts.",
    icon: "📖",
    category: "Tutorial"
  },
  {
    title: "Stack Overflow",
    description: "Community-driven Q&A for developers.",
    icon: "❓",
    category: "Community"
  },
  {
    title: "GitHub",
    description: "Open source projects and code repositories.",
    icon: "🔗",
    category: "Code"
  }
];

export default function Resources() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Learning Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Curated collection of external resources to enhance your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Info */}
            <div className="mb-12 p-6 rounded-lg border border-border bg-card space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Recommended Resources</h2>
              <p className="text-muted-foreground">
                Here are some external resources that our community recommends for learning. Click on any resource to visit.
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group rounded-lg border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-3xl">{resource.icon}</div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {resource.category}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border flex items-center justify-between text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Visit</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Download Section */}
            <div className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Download Study Materials
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Access downloadable study guides, cheat sheets, and reference materials prepared by our community.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors shadow-sm">
                <Download className="w-5 h-5" />
                Browse Downloads
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
