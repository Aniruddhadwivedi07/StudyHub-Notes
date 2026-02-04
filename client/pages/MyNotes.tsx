import { Plus, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

export default function MyNotes() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              My Notes
            </h1>
            <p className="text-lg text-muted-foreground">
              Create, organize, and manage your personal study notes.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Empty State */}
            <div className="rounded-lg border border-border bg-card p-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen className="w-10 h-10" />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  No notes yet
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Start creating your first study note and organize your
                  learning materials.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors shadow-sm">
                <Plus className="w-5 h-5" />
                Create Your First Note
              </button>
            </div>

            {/* Info Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-border bg-card p-6 text-center space-y-3">
                <div className="text-3xl">📝</div>
                <h3 className="font-semibold text-foreground">Quick Notes</h3>
                <p className="text-sm text-muted-foreground">
                  Create notes with rich text formatting and syntax
                  highlighting.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center space-y-3">
                <div className="text-3xl">🏷️</div>
                <h3 className="font-semibold text-foreground">
                  Organize with Tags
                </h3>
                <p className="text-sm text-muted-foreground">
                  Use tags to categorize and quickly find your notes.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center space-y-3">
                <div className="text-3xl">🔄</div>
                <h3 className="font-semibold text-foreground">
                  Version Control
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track changes and revert to previous versions of your notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
