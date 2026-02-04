import { useParams } from "react-router-dom";
import {
  Search,
  Filter,
  BookmarkIcon,
  Share2,
  Download,
  ThumbsUp,
} from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";

const subjectDetails: Record<
  string,
  { name: string; icon: string; color: string; description: string }
> = {
  python: {
    name: "Python",
    icon: "🐍",
    color: "from-blue-400 to-blue-600",
    description:
      "Master Python programming from fundamentals to advanced concepts",
  },
  dsa: {
    name: "Data Structures & Algorithms",
    icon: "📊",
    color: "from-purple-400 to-purple-600",
    description:
      "Comprehensive guide to DSA for coding interviews and competitive programming",
  },
  javascript: {
    name: "JavaScript",
    icon: "⚡",
    color: "from-yellow-400 to-yellow-600",
    description: "Learn modern JavaScript, ES6+, and web development",
  },
  webdev: {
    name: "Web Development",
    icon: "🌐",
    color: "from-green-400 to-green-600",
    description: "Full-stack web development with modern tools and frameworks",
  },
  database: {
    name: "Databases",
    icon: "🗄️",
    color: "from-red-400 to-red-600",
    description: "SQL, NoSQL databases, and data management systems",
  },
  devops: {
    name: "DevOps & Cloud",
    icon: "☁️",
    color: "from-cyan-400 to-cyan-600",
    description:
      "Cloud computing, containerization, and infrastructure automation",
  },
};

// Mock notes data
const mockNotes = [
  {
    id: 1,
    title: "Python List Comprehensions Explained",
    description:
      "Deep dive into list comprehensions, generator expressions, and their performance implications.",
    author: "Sarah Chen",
    date: "2 days ago",
    tags: ["basics", "syntax", "tips"],
    views: 342,
    favorites: 45,
    downloads: 28,
  },
  {
    id: 2,
    title: "Working with Decorators",
    description:
      "Understanding decorators in Python, creating custom decorators, and practical use cases.",
    author: "Mike Johnson",
    date: "5 days ago",
    tags: ["advanced", "functions", "metaprogramming"],
    views: 521,
    favorites: 89,
    downloads: 67,
  },
  {
    id: 3,
    title: "Async Programming with asyncio",
    description:
      "Master async/await patterns, event loops, and concurrent programming in Python.",
    author: "Emma Wilson",
    date: "1 week ago",
    tags: ["async", "concurrency", "performance"],
    views: 812,
    favorites: 156,
    downloads: 94,
  },
  {
    id: 4,
    title: "Database Connectivity with SQLAlchemy",
    description:
      "ORM basics, relationships, migrations, and best practices for database operations.",
    author: "Alex Rodriguez",
    date: "1 week ago",
    tags: ["databases", "orm", "advanced"],
    views: 634,
    favorites: 98,
    downloads: 56,
  },
  {
    id: 5,
    title: "Web Scraping Best Practices",
    description:
      "Ethical scraping, handling rate limits, parsing HTML and JSON data.",
    author: "Lisa Park",
    date: "2 weeks ago",
    tags: ["web", "scraping", "practical"],
    views: 445,
    favorites: 67,
    downloads: 42,
  },
  {
    id: 6,
    title: "Testing and Debugging",
    description:
      "Unit testing, pytest, debugging techniques, and code quality tools.",
    author: "David Brown",
    date: "2 weeks ago",
    tags: ["testing", "debugging", "quality"],
    views: 378,
    favorites: 52,
    downloads: 31,
  },
];

export default function Subject() {
  const { id } = useParams<{ id: string }>();
  const subject = subjectDetails[id || "python"] || subjectDetails.python;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"recent" | "popular" | "trending">(
    "recent",
  );

  // Get all unique tags
  const allTags = Array.from(new Set(mockNotes.flatMap((note) => note.tags)));

  // Filter notes based on search and tags
  const filteredNotes = mockNotes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => note.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  // Sort notes
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (sortBy === "popular") return b.favorites - a.favorites;
    if (sortBy === "trending") return b.views - a.views;
    return 0; // recent is default order
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-6">
            <div
              className={`w-16 h-16 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center text-4xl shadow-lg`}
            >
              {subject.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {subject.name}
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                {subject.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-24">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search notes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                {/* Sort */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="popular">Most Liked</option>
                    <option value="trending">Most Viewed</option>
                  </select>
                </div>

                {/* Tags Filter */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-foreground">
                      Tags
                    </label>
                    {selectedTags.length > 0 && (
                      <button
                        onClick={() => setSelectedTags([])}
                        className="text-xs text-primary hover:text-primary/80"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedTags.includes(tag)
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-border space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">
                      {sortedNotes.length}
                    </strong>{" "}
                    notes found
                  </p>
                </div>
              </div>
            </div>

            {/* Notes List */}
            <div className="lg:col-span-3">
              {sortedNotes.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No notes found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedTags([]);
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {sortedNotes.map((note) => (
                    <div
                      key={note.id}
                      className="rounded-lg border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition-all group cursor-pointer"
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 space-y-2">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {note.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {note.description}
                            </p>
                          </div>
                          <button className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
                            <BookmarkIcon className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {note.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                selectedTags.includes(tag)
                                  ? "bg-primary/20 text-primary"
                                  : "bg-secondary text-secondary-foreground"
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="pt-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
                          <div className="space-y-1">
                            <p>
                              By{" "}
                              <strong className="text-foreground">
                                {note.author}
                              </strong>
                            </p>
                            <p>{note.date}</p>
                          </div>
                          <div className="flex gap-4 md:gap-6">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{note.favorites}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Share2 className="w-4 h-4" />
                              <span>{note.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              <span>{note.downloads}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
