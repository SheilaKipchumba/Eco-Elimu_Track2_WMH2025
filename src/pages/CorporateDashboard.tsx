import Navigation from "@/components/Navigation";
import { 
  MapPin,
  TrendingUp,
  Leaf,
  Recycle,
  TreePine,
  School,
  Award,
  Download,
  DollarSign,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";

const CorporateDashboard = () => {
  // Mock data
  const impactMetrics = {
    activeSchools: 247,
    plasticCollected: "12,450 kg",
    treesPlanted: "3,240",
    co2Sequestered: "156 tonnes",
    totalInvestment: "KSh 2,450,000",
  };

  const topSchools = [
    { name: "Nairobi Green Primary", county: "Nairobi", impact: "450 kg plastic", rank: 1 },
    { name: "Mombasa Eco Academy", county: "Mombasa", impact: "380 kg plastic", rank: 2 },
    { name: "Kisumu Climate School", county: "Kisumu", impact: "325 kg plastic", rank: 3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Corporate Impact Dashboard</h1>
            <p className="text-muted-foreground">Real-time verified environmental outcomes</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              ESG Report
            </Button>
            <Button className="btn-eco gap-2">
              <DollarSign className="w-4 h-4" />
              Fund Activity
            </Button>
          </div>
        </div>

        {/* Zero Greenwashing Badge */}
        <div className="impact-card bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Zero Greenwashing Risk
              </h3>
              <p className="text-muted-foreground">
                Every metric below is verified with photo evidence, GPS data, and third-party validation
              </p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatCard
            icon={School}
            label="Active Schools"
            value={impactMetrics.activeSchools}
            trend="+12 this month"
            iconColor="text-primary"
          />
          <StatCard
            icon={Recycle}
            label="Plastic Collected"
            value={impactMetrics.plasticCollected}
            trend="Ocean impact"
            iconColor="text-impact-plastic"
          />
          <StatCard
            icon={TreePine}
            label="Trees Planted"
            value={impactMetrics.treesPlanted}
            trend="Forest regeneration"
            iconColor="text-impact-trees"
          />
          <StatCard
            icon={Leaf}
            label="CO₂ Sequestered"
            value={impactMetrics.co2Sequestered}
            trend="Carbon offset"
            iconColor="text-primary"
          />
          <StatCard
            icon={DollarSign}
            label="Total Investment"
            value={impactMetrics.totalInvestment}
            iconColor="text-primary"
          />
        </div>

        {/* Map Section */}
        <div className="card-eco">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Impact Map - Kenya
              </h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filter by County</Button>
              <Button variant="outline" size="sm">Filter by Activity</Button>
            </div>
          </div>
          
          {/* Placeholder Map */}
          <div className="bg-muted/30 rounded-xl p-12 text-center border-2 border-dashed border-border">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground text-lg">
              Interactive map showing school locations and activity hotspots
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Click on pins to see individual school impact profiles
            </p>
          </div>
        </div>

        {/* Top Performing Schools */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              Top Performing Schools
            </h2>
            <Button variant="link" className="text-primary">
              View All →
            </Button>
          </div>
          
          <div className="grid gap-4">
            {topSchools.map((school) => (
              <div key={school.rank} className="card-eco hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl">
                      #{school.rank}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {school.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {school.county} County
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">
                      {school.impact}
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Fund This School
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSR Packs */}
        <div className="card-eco bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            CSR Impact Packs
          </h2>
          <p className="text-muted-foreground mb-6">
            Choose pre-configured funding packages aligned with your ESG goals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Ocean Guardian", amount: "KSh 50,000", focus: "Plastic Recovery", icon: Recycle },
              { name: "Forest Builder", amount: "KSh 100,000", focus: "Tree Planting", icon: TreePine },
              { name: "Climate Champion", amount: "KSh 150,000", focus: "Mixed Activities", icon: Leaf },
            ].map((pack) => {
              const Icon = pack.icon;
              return (
                <div key={pack.name} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{pack.name}</h3>
                      <p className="text-sm text-muted-foreground">{pack.focus}</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary mb-4">{pack.amount}</p>
                  <Button className="w-full" variant="outline">
                    Select Pack
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ESG Reporting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-eco">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                ESG Snapshot
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Generate comprehensive ESG reports for stakeholders
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Environmental Impact</span>
                <span className="font-semibold text-primary">High</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Social Contribution</span>
                <span className="font-semibold text-primary">247 Schools</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Governance</span>
                <span className="font-semibold text-primary">Verified</span>
              </div>
            </div>
          </div>

          <div className="card-eco bg-primary/5 border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Export Reports
            </h3>
            <p className="text-muted-foreground mb-6">
              Download detailed impact reports for your records
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-between">
                Monthly Impact Report <Download className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                ESG Compliance PDF <Download className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Activity Data (CSV) <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateDashboard;
