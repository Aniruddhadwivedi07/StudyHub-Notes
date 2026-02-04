import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const subjects = [
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    notesCount: 24,
    color: "from-blue-400 to-blue-600",
    description: "Fundamentals to advanced Python programming",
    contributors: 142
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    icon: "📊",
    notesCount: 18,
    color: "from-purple-400 to-purple-600",
    description: "Master DSA for interview preparation",
    contributors: 87
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    notesCount: 22,
    color: "from-yellow-400 to-yellow-600",
    description: "From ES6 to modern frameworks",
    contributors: 156
  },
  {
    id: "webdev",
    name: "Web Development",
    icon: "🌐",
    notesCount: 31,
    color: "from-green-400 to-green-600",
    description: "Frontend and backend web technologies",
    contributors: 203
  },
  {
    id: "database",
    name: "Databases",
    icon: "🗄️",
    notesCount: 15,
    color: "from-red-400 to-red-600",
    description: "SQL, NoSQL, and database design",
    contributors: 95
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "☁️",
    notesCount: 12,
    color: "from-cyan-400 to-cyan-600",
    description: "Docker, Kubernetes, and cloud platforms",
    contributors: 67
  },
  {
    id: "cs",
    name: "Computer Science Fundamentals",
    icon: "🖥️",
    notesCount: 28,
    color: "from-pink-400 to-pink-600",
    description: "Core CS concepts and theory",
    contributors: 112
  },
  {
    id: "ml",
    name: "Machine Learning",
    icon: "🤖",
    notesCount: 19,
    color: "from-orange-400 to-orange-600",
    description: "ML algorithms and deep learning",
    contributors: 78
  }
];

export default function Browse() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Browse All Subjects
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive collection of study materials organized by discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map(subject => (
              <Link
                key={subject.id}
                to={`/subject/${subject.id}`}
                className="group rounded-lg border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center text-3xl shadow-md`}>
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
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>📝 {subject.notesCount} notes</span>
                      <span>👥 {subject.contributors}</span>
                    </div>
                    <div className="flex items-center justify-between text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
