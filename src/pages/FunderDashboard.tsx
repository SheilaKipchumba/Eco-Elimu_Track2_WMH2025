import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import { dummySchools } from "@/data/dummyData";
import { MapPin, Download, TrendingUp, Users, DollarSign, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const FunderDashboard = () => {
  const totalTrees = dummySchools.reduce((acc, school) => acc + Math.floor(school.totalPoints / 100), 0);
  const totalPlastic = dummySchools.reduce((acc, school) => acc + Math.floor(school.totalPoints / 150), 0);
  const totalActions = dummySchools.reduce((acc, school) => acc + school.actionsCount, 0);

  const handleFundSchool = (schoolName: string) => {
    toast.success(`Funding initiated for ${schoolName}!`);
  };

  const handleDownloadReport = () => {
    toast.success("CSR Impact Report downloaded!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Sponsor Dashboard</h1>
            <p className="text-muted-foreground">Track impact and support Kenya's youth environmental movement</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link to="/impact-funding">
              <Button className="btn-eco w-full h-auto py-4 flex-col gap-2">
                <Heart className="w-6 h-6" />
                <span>Fund Leading Clubs</span>
              </Button>
            </Link>
            <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2 rounded-full" onClick={handleDownloadReport}>
              <Download className="w-6 h-6" />
              <span>Download CSR Report</span>
            </Button>
            <Link to="/leaderboard">
              <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2 rounded-full">
                <TrendingUp className="w-6 h-6" />
                <span>View Full Rankings</span>
              </Button>
            </Link>
          </div>

          {/* Overall Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={Users} label="Active Schools" value={dummySchools.length} iconColor="text-blue-600" />
            <StatCard icon={MapPin} label="Trees Planted" value={totalTrees.toLocaleString()} trend="+320 this month" iconColor="text-green-600" />
            <StatCard icon={MapPin} label="Plastic (kg)" value={totalPlastic} trend="+45 kg this month" iconColor="text-blue-500" />
            <StatCard icon={TrendingUp} label="Total Actions" value={totalActions} iconColor="text-purple-600" />
          </div>

          {/* Top Schools */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Top Performing Clubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dummySchools
                .sort((a, b) => b.totalPoints - a.totalPoints)
                .slice(0, 4)
                .map((school, idx) => (
                  <div key={school.id} className="card-eco p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                          #{idx + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{school.name}</h3>
                          <p className="text-sm text-muted-foreground">{school.county} County</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-2 bg-accent rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Points</div>
                        <div className="font-bold text-primary">{school.totalPoints.toLocaleString()}</div>
                      </div>
                      <div className="text-center p-2 bg-accent rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Students</div>
                        <div className="font-bold">{school.studentsCount}</div>
                      </div>
                      <div className="text-center p-2 bg-accent rounded-lg">
                        <div className="text-xs text-muted-foreground mb-1">Actions</div>
                        <div className="font-bold">{school.actionsCount}</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">🌳 Trees Est.</span>
                        <span className="font-semibold">{Math.floor(school.totalPoints / 100)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">♻️ Plastic (kg)</span>
                        <span className="font-semibold">{Math.floor(school.totalPoints / 150)}</span>
                      </div>
                    </div>

                    <Button 
                      className="btn-eco w-full"
                      onClick={() => handleFundSchool(school.name)}
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Fund This School
                    </Button>
                  </div>
                ))}
            </div>
          </div>

          {/* School Map */}
          <div className="mb-8 card-eco p-6">
            <h2 className="text-2xl font-bold mb-4">Participating Schools Map</h2>
            <div className="bg-accent h-96 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground mb-2">Interactive map showing {dummySchools.length} schools across Kenya</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {dummySchools.map(school => (
                    <div key={school.id} className="badge-eco text-xs">{school.county}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download Report */}
          <div className="card-eco p-8 bg-gradient-to-br from-primary/5 to-secondary/5 text-center">
            <div className="text-5xl mb-4">📊</div>
            <h2 className="text-2xl font-bold mb-3">Ready to Share Your Impact?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Download a comprehensive CSR report showcasing your contribution to youth environmental action across Kenya
            </p>
            <Button className="btn-eco" onClick={handleDownloadReport}>
              <Download className="w-4 h-4 mr-2" />
              Download Full Impact Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunderDashboard;
