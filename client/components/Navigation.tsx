import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, BookMarked, Library } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <Home className="w-5 h-5" />,
  },
  {
    label: "Browse",
    href: "/browse",
    icon: <Library className="w-5 h-5" />,
  },
  {
    label: "My Notes",
    href: "/my-notes",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    label: "Resources",
    href: "/resources",
    icon: <BookMarked className="w-5 h-5" />,
  },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto py-0">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
