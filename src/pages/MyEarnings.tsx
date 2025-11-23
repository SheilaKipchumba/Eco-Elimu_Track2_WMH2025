import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Wallet,
  XCircle,
  Download,
  TrendingUp,
  Calendar
} from "lucide-react";
import StatCard from "@/components/StatCard";

const MyEarnings = () => {
  const [filter, setFilter] = useState<"all" | "pending" | "verified" | "paid" | "rejected">("all");

  // Mock data
  const summary = {
    totalEarnings: "KSh 12,450",
    pending: "KSh 850",
    verified: "KSh 1,200",
    paid: "KSh 10,400",
  };

  const activities = [
    {
      id: 1,
      type: "Plastic Recovery",
      date: "2024-01-15",
      quantity: "25 kg",
      amount: "KSh 1,250",
      status: "paid",
      verifiedDate: "2024-01-16",
      paidDate: "2024-01-20",
    },
    {
      id: 2,
      type: "Tree Planting",
      date: "2024-01-18",
      quantity: "30 trees",
      amount: "KSh 600",
      status: "verified",
      verifiedDate: "2024-01-19",
    },
    {
      id: 3,
      type: "Climate Lesson",
      date: "2024-01-20",
      quantity: "2 hours",
      amount: "KSh 200",
      status: "pending",
    },
    {
      id: 4,
      type: "Water Conservation",
      date: "2024-01-14",
      quantity: "1 activity",
      amount: "KSh 75",
      status: "rejected",
      rejectionReason: "Photo quality insufficient - please resubmit with clearer images",
    },
  ];

  const filteredActivities = filter === "all" 
    ? activities 
    : activities.filter(a => a.status === filter);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="badge-pending flex items-center gap-1"><Clock className="w-3 h-3" />Pending</span>;
      case "verified":
        return <span className="badge-verified flex items-center gap-1"><CheckCircle className="w-3 h-3" />Verified</span>;
      case "paid":
        return <span className="badge-paid flex items-center gap-1"><Wallet className="w-3 h-3" />Paid</span>;
      case "rejected":
        return <span className="badge-rejected flex items-center gap-1"><XCircle className="w-3 h-3" />Rejected</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Earnings</h1>
            <p className="text-muted-foreground">Track your verified activities and payments</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Statement
          </Button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            icon={DollarSign}
            label="Total Earnings"
            value={summary.totalEarnings}
            trend="+18% this month"
            iconColor="text-primary"
          />
          <StatCard
            icon={Clock}
            label="Pending"
            value={summary.pending}
            iconColor="text-status-pending"
          />
          <StatCard
            icon={CheckCircle}
            label="Verified"
            value={summary.verified}
            iconColor="text-status-verified"
          />
          <StatCard
            icon={Wallet}
            label="Paid Out"
            value={summary.paid}
            iconColor="text-status-paid"
          />
        </div>

        {/* Platform Fee Notice */}
        <div className="bg-muted/50 border border-border rounded-xl p-4">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">
                Platform Fee: 12%
              </p>
              <p className="text-sm text-muted-foreground">
                A 12% platform fee is deducted from verified activities to maintain the system and support verification processes. Your displayed amounts are after fees.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { key: "all", label: "All Activities" },
            { key: "pending", label: "Pending" },
            { key: "verified", label: "Verified" },
            { key: "paid", label: "Paid" },
            { key: "rejected", label: "Rejected" },
          ].map((tab) => (
            <Button
              key={tab.key}
              variant={filter === tab.key ? "default" : "outline"}
              onClick={() => setFilter(tab.key as any)}
              size="sm"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Activities List */}
        <div className="space-y-4">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No activities found</p>
            </div>
          ) : (
            filteredActivities.map((activity) => (
              <div key={activity.id} className="card-eco">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {activity.type}
                      </h3>
                      {getStatusBadge(activity.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {activity.date}
                      </span>
                      <span>•</span>
                      <span>{activity.quantity}</span>
                    </div>
                    {activity.status === "verified" && activity.verifiedDate && (
                      <p className="text-xs text-status-verified mt-2">
                        Verified on {activity.verifiedDate}
                      </p>
                    )}
                    {activity.status === "paid" && activity.paidDate && (
                      <p className="text-xs text-status-paid mt-2">
                        Paid on {activity.paidDate}
                      </p>
                    )}
                    {activity.status === "rejected" && activity.rejectionReason && (
                      <div className="mt-2 p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                        <p className="text-xs text-destructive">
                          <strong>Rejection reason:</strong> {activity.rejectionReason}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">
                      {activity.amount}
                    </p>
                    {activity.status === "pending" && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Awaiting verification
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Payout Info */}
        <div className="card-eco bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                Payout Information
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Verified activities are processed for payment within 5-7 business days. Payments are sent to your registered M-Pesa or bank account.
              </p>
              <Button variant="outline" size="sm">
                Update Payout Method
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEarnings;
