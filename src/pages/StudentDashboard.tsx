import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import { Trophy, Flame, Award, TrendingUp } from "lucide-react";
import { dummyStudent } from "@/data/dummyData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {dummyStudent.name}! 👋</h1>
            <p className="text-muted-foreground">{dummyStudent.school}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={Trophy} label="Total Points" value={dummyStudent.points} iconColor="text-yellow-600" />
            <StatCard icon={Flame} label="Day Streak" value={dummyStudent.streak} trend="Keep it up!" iconColor="text-orange-600" />
            <StatCard icon={Award} label="Badges" value={dummyStudent.badges.length} iconColor="text-purple-600" />
            <StatCard icon={TrendingUp} label="School Rank" value="#3" trend="Top 10%" iconColor="text-blue-600" />
          </div>

          {/* Badges */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Badges</h2>
            <div className="flex flex-wrap gap-3">
              {dummyStudent.badges.map((badge) => (
                <div key={badge} className="badge-eco text-base px-4 py-2">
                  🏅 {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recent Activities</h2>
              <Link to="/action-center">
                <Button variant="outline" size="sm" className="rounded-full">Log New Action</Button>
              </Link>
            </div>
            <div className="space-y-4">
              {dummyStudent.recentActions.map((action) => (
                <div key={action.id} className="card-eco p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{action.category}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                    <div className={`badge-eco ${action.verified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {action.verified ? '✓ Verified' : '⏳ Pending'}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>📍 {action.location}</span>
                    <span>👥 {action.participants} participants</span>
                    <span>📅 {action.date}</span>
                    <span className="font-semibold text-primary">+{action.points} pts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Section */}
          <div className="card-eco p-6">
            <h2 className="text-2xl font-bold mb-4">This Month's Progress</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Points Goal</span>
                  <span className="text-sm text-muted-foreground">750 / 1000</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Actions Logged</span>
                  <span className="text-sm text-muted-foreground">12 / 15</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
