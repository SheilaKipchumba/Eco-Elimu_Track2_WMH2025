import { Link } from "react-router-dom";
import { TreePine, Recycle, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block mb-6">
            <div className="text-6xl md:text-8xl animate-float">🌍</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Youth-Powered Environmental Action
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join Kenya's 4K Clubs movement. Take action, earn rewards, and make a real impact on our planet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/action-center">
              <Button size="lg" className="btn-eco w-full sm:w-auto">
                Start Logging Actions
              </Button>
            </Link>
            {profile?.role === "teacher" && (
              <Link to="/teacher-dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full">
                  Teacher Dashboard
                </Button>
              </Link>
            )}
            {profile?.role === "sponsor" && (
              <Link to="/funder-dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full">
                  Sponsor Dashboard
                </Button>
              </Link>
            )}
            <Link to="/sms-concept">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full">
                Offline Logging
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatCard
            icon={TreePine}
            label="Trees Planted"
            value="12,450"
            trend="+320 this week"
            iconColor="text-green-600"
          />
          <StatCard
            icon={Recycle}
            label="Plastic Collected"
            value="850 kg"
            trend="+45 kg this week"
            iconColor="text-blue-600"
          />
          <StatCard
            icon={Award}
            label="Top School"
            value="Greenfields"
            trend="8,500 points"
            iconColor="text-yellow-600"
          />
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile?.role === "student" && (
              <Link to="/student-dashboard" className="card-eco p-6 hover:scale-105 transition-all">
                <div className="text-3xl mb-3">👨‍🎓</div>
                <h3 className="font-semibold text-lg mb-2">My Dashboard</h3>
                <p className="text-sm text-muted-foreground">Track your actions, earn points, and compete with friends</p>
              </Link>
            )}
            
            {profile?.role === "teacher" && (
              <>
                <Link to="/teacher-dashboard" className="card-eco p-6 hover:scale-105 transition-all">
                  <div className="text-3xl mb-3">👩‍🏫</div>
                  <h3 className="font-semibold text-lg mb-2">My Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Manage your 4K Club and verify student activities</p>
                </Link>
                
                <Link to="/teacher-community" className="card-eco p-6 hover:scale-105 transition-all">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="font-semibold text-lg mb-2">Teacher Community</h3>
                  <p className="text-sm text-muted-foreground">Connect with fellow teachers and share ideas</p>
                </Link>
              </>
            )}
            
            {profile?.role === "sponsor" && (
              <Link to="/funder-dashboard" className="card-eco p-6 hover:scale-105 transition-all">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-semibold text-lg mb-2">Sponsor Dashboard</h3>
                <p className="text-sm text-muted-foreground">View impact metrics and fund top-performing schools</p>
              </Link>
            )}
            
            <Link to="/content-hub" className="card-eco p-6 hover:scale-105 transition-all">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold text-lg mb-2">Learn More</h3>
              <p className="text-sm text-muted-foreground">Access climate education and environmental resources</p>
            </Link>
            
            <Link to="/leaderboard" className="card-eco p-6 hover:scale-105 transition-all">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-semibold text-lg mb-2">Rankings</h3>
              <p className="text-sm text-muted-foreground">See how your school ranks across Kenya</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
