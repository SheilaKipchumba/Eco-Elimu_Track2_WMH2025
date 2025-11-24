import { Link, useLocation } from "react-router-dom";
import { Home, Target, User, GraduationCap, BookOpen, Heart, TrendingUp, BarChart3, LogOut, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  const { profile, signOut } = useAuth();

  const getNavItems = () => {
    const baseItems = [
      { path: "/", label: "Home", icon: Home },
      { path: "/action-center", label: "Actions", icon: Target },
      { path: "/leaderboard", label: "Rankings", icon: BarChart3 },
      { path: "/content-hub", label: "Learn", icon: BookOpen },
    ];

    if (profile?.role === "student") {
      return [...baseItems, { path: "/student-dashboard", label: "Dashboard", icon: User }];
    } else if (profile?.role === "teacher") {
      return [
        ...baseItems,
        { path: "/teacher-dashboard", label: "Dashboard", icon: GraduationCap },
        { path: "/teacher-resources", label: "Resources", icon: BookOpen },
        { path: "/teacher-community", label: "Community", icon: Users },
      ];
    } else if (profile?.role === "sponsor") {
      return [
        ...baseItems,
        { path: "/funder-dashboard", label: "Dashboard", icon: TrendingUp },
        { path: "/impact-funding", label: "Funding", icon: Heart },
      ];
    }

    return baseItems;
  };

  const navItems = getNavItems();

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
              🌍
            </div>
            <span className="font-bold text-lg hidden sm:inline">Eco-Elimu</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={signOut}
              className="ml-2"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* Mobile menu - simplified icons only */}
          <div className="flex md:hidden gap-1 overflow-x-auto">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              onClick={signOut}
              className="p-2"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
