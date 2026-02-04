import { Link } from "react-router-dom";
import { ArrowRight, Search, BookOpen, Users, Download } from "lucide-react";
import Layout from "@/components/Layout";

// Mock data for featured subjects
const subjects = [
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    notesCount: 24,
    color: "from-blue-400 to-blue-600",
    description: "Fundamentals to advanced Python programming"
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    icon: "📊",
    notesCount: 18,
    color: "from-purple-400 to-purple-600",
    description: "Master DSA for interview preparation"
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    notesCount: 22,
    color: "from-yellow-400 to-yellow-600",
    description: "From ES6 to modern frameworks"
  },
  {
    id: "webdev",
    name: "Web Development",
    icon: "🌐",
    notesCount: 31,
    color: "from-green-400 to-green-600",
    description: "Frontend and backend web technologies"
  },
  {
    id: "database",
    name: "Databases",
    icon: "🗄️",
    notesCount: 15,
    color: "from-red-400 to-red-600",
    description: "SQL, NoSQL, and database design"
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "☁️",
    notesCount: 12,
    color: "from-cyan-400 to-cyan-600",
    description: "Docker, Kubernetes, and cloud platforms"
  }
];

// Mock data for latest notes
const latestNotes = [
  {
    id: 1,
    title: "Python List Comprehensions Explained",
    subject: "Python",
    author: "Sarah Chen",
    date: "2 days ago",
    tags: ["basics", "syntax", "tips"],
    views: 342,
    favorites: 45
  },
  {
    id: 2,
    title: "Understanding Binary Search Trees",
    subject: "Data Structures & Algorithms",
    author: "Mike Johnson",
    date: "4 days ago",
    tags: ["trees", "algorithms", "interview"],
    views: 521,
    favorites: 89
  },
  {
    id: 3,
    title: "React Hooks Deep Dive",
    subject: "JavaScript",
    author: "Emma Wilson",
    date: "1 week ago",
    tags: ["react", "hooks", "state-management"],
    views: 812,
    favorites: 156
  },
  {
    id: 4,
    title: "CSS Grid Layout Complete Guide",
    subject: "Web Development",
    author: "Alex Rodriguez",
    date: "1 week ago",
    tags: ["css", "layout", "responsive"],
    views: 634,
    favorites: 98
  }
];

const stats = [
  { label: "Active Students", value: "12,345", icon: Users },
  { label: "Study Notes", value: "2,847", icon: BookOpen },
  { label: "Resources Downloaded", value: "45K+", icon: Download }
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Your Academic Hub for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Collaborative Learning
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students sharing and organizing study materials, notes, and resources across all academic disciplines.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search subjects, notes, resources..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors shadow-sm">
                Search
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link to="/browse" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors">
                Browse Subjects <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                Create Note
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Subjects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Subjects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive collection of study materials organized by academic discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <Link
                  key={subject.id}
                  to={`/subject/${subject.id}`}
                  className="group rounded-lg border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center text-2xl shadow-md`}>
                      {subject.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {subject.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {subject.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {subject.notesCount} notes
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link
                to="/browse"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors shadow-sm"
              >
                Explore All Subjects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Notes Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest Notes from Community</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover recently shared notes and study materials from students like you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestNotes.map((note) => (
                <div
                  key={note.id}
                  className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {note.subject}
                        </span>
                        <span className="text-xs text-muted-foreground">{note.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {note.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {note.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 rounded text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
                      <span>By {note.author}</span>
                      <div className="flex gap-4">
                        <span>👁️ {note.views}</span>
                        <span>❤️ {note.favorites}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link
                to="/my-notes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-medium transition-colors"
              >
                View All Notes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-8 md:p-12 overflow-hidden">
            <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Join Our Learning Community Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Start sharing your notes, accessing resources, and collaborating with thousands of students worldwide.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors shadow-md">
                Create Free Account <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
