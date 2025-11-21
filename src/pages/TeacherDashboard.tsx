import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import { Users, CheckCircle, TrendingUp, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dummyActions } from "@/data/dummyData";
import { toast } from "sonner";

const TeacherDashboard = () => {
  const handleVerify = (actionId: string) => {
    toast.success("Action verified! Points awarded to student.");
  };

  const pendingActions = dummyActions.filter(a => !a.verified);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Greenfields Secondary 4K Club</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={Users} label="Active Students" value={45} iconColor="text-blue-600" />
            <StatCard icon={CheckCircle} label="Verified Actions" value={125} trend="+12 this week" iconColor="text-green-600" />
            <StatCard icon={TrendingUp} label="Club Points" value={8500} trend="Rank #1" iconColor="text-yellow-600" />
            <StatCard icon={QrCode} label="Pending" value={pendingActions.length} iconColor="text-orange-600" />
          </div>

          {/* Quick Tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button className="btn-eco h-auto py-4 flex-col gap-2">
              <QrCode className="w-6 h-6" />
              <span>Generate QR Code</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 rounded-full">
              <span className="text-2xl">📊</span>
              <span>Export Report</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 rounded-full">
              <span className="text-2xl">📅</span>
              <span>Activity Calendar</span>
            </Button>
          </div>

          {/* Pending Verifications */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Pending Verifications ({pendingActions.length})</h2>
            <div className="space-y-4">
              {pendingActions.map((action) => (
                <div key={action.id} className="card-eco p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-semibold">
                          {action.studentName[0]}
                        </div>
                        <div>
                          <h3 className="font-semibold">{action.studentName}</h3>
                          <p className="text-sm text-muted-foreground">{action.category} • {action.date}</p>
                        </div>
                      </div>
                      <p className="text-sm mb-2">{action.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>📍 {action.location}</span>
                        <span>👥 {action.participants} participants</span>
                        <span className="font-semibold text-primary">{action.points} points</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                        onClick={() => toast.error("Action rejected")}
                      >
                        Reject
                      </Button>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 rounded-full"
                        onClick={() => handleVerify(action.id)}
                      >
                        ✓ Verify
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Club Progress Chart */}
          <div className="card-eco p-6">
            <h2 className="text-2xl font-bold mb-4">Weekly Activity Trend</h2>
            <div className="h-64 flex items-end justify-around gap-2">
              {[65, 80, 70, 90, 85, 95, 100].map((height, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-muted-foreground">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
