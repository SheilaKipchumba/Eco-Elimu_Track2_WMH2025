import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import { 
  Leaf, 
  DollarSign, 
  Award, 
  TrendingUp, 
  Recycle, 
  TreePine, 
  BookOpen, 
  Droplets,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";

const TeacherHome = () => {
  const { profile } = useAuth();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  // Mock data - replace with real data from backend
  const stats = {
    totalEarnings: "KSh 12,450",
    activitiesCompleted: 28,
    impactScore: {
      plastic: "156 kg",
      trees: "42 trees",
    },
    pendingVerification: 3,
  };

  const modules = [
    {
      id: "plastic",
      name: "Plastic Recovery",
      icon: Recycle,
      color: "text-impact-plastic",
      bgColor: "bg-impact-plastic/10",
      points: "50-100 KSh/kg",
      description: "Collect and document plastic waste recovery",
    },
    {
      id: "trees",
      name: "Tree Nurseries",
      icon: TreePine,
      color: "text-impact-trees",
      bgColor: "bg-impact-trees/10",
      points: "20 KSh/tree",
      description: "Plant and nurture indigenous trees",
    },
    {
      id: "climate",
      name: "Climate Content",
      icon: BookOpen,
      color: "text-impact-climate",
      bgColor: "bg-impact-climate/10",
      points: "100 KSh/lesson",
      description: "Teach climate action lessons",
    },
    {
      id: "water",
      name: "Water Protection",
      icon: Droplets,
      color: "text-impact-water",
      bgColor: "bg-impact-water/10",
      points: "75 KSh/activity",
      description: "Water conservation activities",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {profile?.full_name || "Teacher"}! 🌍
          </h1>
          <p className="text-muted-foreground text-lg">
            Your environmental impact is making a real difference.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={DollarSign}
            label="Total Earnings"
            value={stats.totalEarnings}
            trend="+12% this month"
            iconColor="text-primary"
          />
          <StatCard
            icon={CheckCircle}
            label="Activities Completed"
            value={stats.activitiesCompleted}
            iconColor="text-status-verified"
          />
          <StatCard
            icon={Recycle}
            label="Plastic Collected"
            value={stats.impactScore.plastic}
            trend="Making waves"
            iconColor="text-impact-plastic"
          />
          <StatCard
            icon={TreePine}
            label="Trees Planted"
            value={stats.impactScore.trees}
            trend="Growing impact"
            iconColor="text-impact-trees"
          />
        </div>

        {/* Pending Verification Alert */}
        {stats.pendingVerification > 0 && (
          <div className="bg-status-pending/10 border border-status-pending/30 rounded-xl p-4 flex items-center gap-4">
            <Clock className="w-6 h-6 text-status-pending flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-foreground">
                {stats.pendingVerification} {stats.pendingVerification === 1 ? "activity" : "activities"} pending verification
              </p>
              <p className="text-sm text-muted-foreground">
                Your submissions are being reviewed. You'll be notified once approved.
              </p>
            </div>
            <Link to="/teacher-dashboard">
              <Button variant="outline" size="sm">
                View Status
              </Button>
            </Link>
          </div>
        )}

        {/* Call to Action */}
        <div className="impact-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Plus className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Log Your Next Activity
                </h3>
                <p className="text-muted-foreground">
                  Turn your environmental work into verified impact
                </p>
              </div>
            </div>
            <Link to="/log-activity">
              <Button size="lg" className="btn-eco">
                <Plus className="w-5 h-5 mr-2" />
                Log New Activity
              </Button>
            </Link>
          </div>
        </div>

        {/* Available Modules */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Available Activity Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link to="/log-activity" key={module.id}>
                  <div className="card-eco group cursor-pointer hover:scale-[1.02] transition-transform">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${module.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${module.color}`} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {module.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="badge-eco text-xs">
                            {module.points}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/teacher-dashboard">
            <div className="stat-card cursor-pointer group">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">My Earnings</p>
                  <p className="text-sm text-muted-foreground">View payment history</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/leaderboard">
            <div className="stat-card cursor-pointer group">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">Leaderboard</p>
                  <p className="text-sm text-muted-foreground">See school rankings</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/teacher-resources">
            <div className="stat-card cursor-pointer group">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">Resources</p>
                  <p className="text-sm text-muted-foreground">Teaching materials</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
