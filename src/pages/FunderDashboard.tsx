import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import { School, TreePine, Recycle, Users, Download } from "lucide-react";
import { dummySchools } from "@/data/dummyData";
import { Button } from "@/components/ui/button";

const FunderDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Impact Dashboard</h1>
            <p className="text-muted-foreground">Track environmental impact across Kenya's 4K Clubs</p>
          </div>

          {/* Overall Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={School} label="Active Schools" value={dummySchools.length} iconColor="text-blue-600" />
            <StatCard icon={TreePine} label="Trees Planted" value="12,450" trend="+320 this month" iconColor="text-green-600" />
            <StatCard icon={Recycle} label="Plastic (kg)" value="850" trend="+45 kg this month" iconColor="text-blue-500" />
            <StatCard icon={Users} label="Youth Engaged" value="1,240" iconColor="text-purple-600" />
          </div>

          {/* Map Section (Placeholder) */}
          <div className="card-eco p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Participating Schools Map</h2>
            <div className="bg-muted rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                {dummySchools.map((school, idx) => (
                  <div
                    key={school.id}
                    className="absolute w-3 h-3 bg-primary rounded-full animate-pulse"
                    style={{
                      left: `${20 + idx * 20}%`,
                      top: `${30 + (idx % 3) * 20}%`,
                      animationDelay: `${idx * 0.2}s`
                    }}
                  />
                ))}
              </div>
              <div className="text-center z-10">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-muted-foreground">Interactive map showing {dummySchools.length} schools</p>
                <p className="text-sm text-muted-foreground">Across 4 counties in Kenya</p>
              </div>
            </div>
          </div>

          {/* School Performance */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">School Performance</h2>
              <Button variant="outline" size="sm" className="rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Export CSR Report
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dummySchools.map((school) => (
                <div key={school.id} className="card-eco p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{school.name}</h3>
                      <p className="text-sm text-muted-foreground">{school.county} County</p>
                    </div>
                    <div className="badge-eco">{school.totalPoints} pts</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <div className="text-muted-foreground">Students</div>
                      <div className="font-semibold">{school.studentsCount}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Actions</div>
                      <div className="font-semibold">{school.actionsCount}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Avg/Student</div>
                      <div className="font-semibold">{Math.round(school.totalPoints / school.studentsCount)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="card-eco p-6">
            <h2 className="text-2xl font-bold mb-6">Monthly Impact Trends</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Verified Environmental Actions</span>
                  <span className="text-muted-foreground">382 actions</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-4/5"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Youth Engagement Rate</span>
                  <span className="text-muted-foreground">87%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Community Impact Score</span>
                  <span className="text-muted-foreground">92/100</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunderDashboard;
