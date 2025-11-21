import Navigation from "@/components/Navigation";
import { fundingOpportunities, activityFunding } from "@/data/dummyData";
import { Heart, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ImpactFundingHub = () => {
  const handleFundSchool = (schoolName: string) => {
    toast.success(`Funding commitment initiated for ${schoolName}!`);
  };

  const handleFundActivity = (activityType: string) => {
    toast.success(`Funding commitment for ${activityType} actions!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">💚 Impact Funding Hub</h1>
            <p className="text-muted-foreground">Support top-performing 4K Clubs and accelerate environmental action across Kenya</p>
          </div>

          {/* Top Performing Schools */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Fund Leading Clubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundingOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="card-eco p-6 hover:scale-105 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="badge-eco">{opportunity.category}</div>
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{opportunity.schoolName}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{opportunity.county} County</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">🌳 Trees Planted</span>
                      <span className="font-semibold">{opportunity.impact.trees}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">♻️ Plastic (kg)</span>
                      <span className="font-semibold">{opportunity.impact.plastic}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">✓ Actions Verified</span>
                      <span className="font-semibold">{opportunity.impact.actions}</span>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-accent rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Funding Goal</div>
                    <div className="text-xl font-bold text-primary">KSh {opportunity.fundingNeeded.toLocaleString()}</div>
                  </div>

                  <Button 
                    className="btn-eco w-full"
                    onClick={() => handleFundSchool(opportunity.schoolName)}
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Fund This School
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Type Funding */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Fund by Activity Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activityFunding.map((activity, idx) => (
                <div key={idx} className="card-eco p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2">{activity.type}</h3>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">
                          💰 KSh {activity.fundsAllocated.toLocaleString()} allocated
                        </div>
                        <div className="text-sm text-muted-foreground">
                          📊 {activity.actionsSupported} actions supported
                        </div>
                      </div>
                    </div>
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full mt-4"
                    onClick={() => handleFundActivity(activity.type)}
                  >
                    Fund {activity.type}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Funding Flow Explainer */}
          <div className="card-eco p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-2xl font-bold mb-4">How Your Funding Creates Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">👩‍🏫</div>
                <h3 className="font-semibold mb-2">Teacher Wallets</h3>
                <p className="text-sm text-muted-foreground">Direct payments to teachers for verified actions (KSh 50/action)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="font-semibold mb-2">School Budgets</h3>
                <p className="text-sm text-muted-foreground">Funds for club supplies, equipment, and events</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-semibold mb-2">Student Points</h3>
                <p className="text-sm text-muted-foreground">Rewards system motivating youth environmental action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactFundingHub;
