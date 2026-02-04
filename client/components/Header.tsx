import { Link } from "react-router-dom";
import { Search, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">📚</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold text-foreground">StudyHub</span>
              <span className="text-xs text-muted-foreground">Learn Together</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm">
            <div
              className={`w-full flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors ${
                searchFocused ? "border-primary bg-primary/5" : "border-border bg-secondary/30"
              }`}
            >
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search notes, subjects..."
                className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
              Sign In
            </button>
            <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm">
              Join Now
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="w-full flex items-center gap-2 rounded-lg border border-border bg-secondary/30 px-4 py-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
