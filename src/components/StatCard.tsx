import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: string;
  iconColor?: string;
}

const StatCard = ({ icon: Icon, label, value, trend, iconColor = "text-primary" }: StatCardProps) => {
  return (
    <div className="stat-card animate-scale-in hover:scale-105 transition-transform">
      <div className={`w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-3 ${iconColor}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      {trend && <div className="text-xs text-primary font-medium">{trend}</div>}
    </div>
  );
};

export default StatCard;
