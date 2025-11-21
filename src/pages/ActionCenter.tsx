import { useState } from "react";
import Navigation from "@/components/Navigation";
import ActionCard from "@/components/ActionCard";
import LogActionModal from "@/components/LogActionModal";
import { actionCategories } from "@/data/dummyData";

const ActionCenter = () => {
  const [selectedAction, setSelectedAction] = useState<{ name: string; points: number } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Action Center</h1>
            <p className="text-muted-foreground">Choose an environmental action to log and earn points</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {actionCategories.map((action) => (
              <ActionCard
                key={action.name}
                name={action.name}
                points={action.points}
                icon={action.icon}
                color={action.color}
                onClick={() => setSelectedAction({ name: action.name, points: action.points })}
              />
            ))}
          </div>

          {/* Recent Actions */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Recent Actions Across Kenya</h2>
            <div className="space-y-4">
              {[
                { student: "Amina W.", action: "Tree Planting", points: 100, time: "2 hours ago", school: "Greenfields" },
                { student: "James O.", action: "Plastic Collection", points: 50, time: "5 hours ago", school: "Riverside" },
                { student: "Faith N.", action: "Clean-Up", points: 75, time: "1 day ago", school: "Greenfields" },
              ].map((item, idx) => (
                <div key={idx} className="card-eco p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-semibold">
                      {item.student[0]}
                    </div>
                    <div>
                      <div className="font-medium">{item.student} • {item.school}</div>
                      <div className="text-sm text-muted-foreground">{item.action} • {item.time}</div>
                    </div>
                  </div>
                  <div className="badge-eco">+{item.points} pts</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LogActionModal
        open={selectedAction !== null}
        onClose={() => setSelectedAction(null)}
        actionType={selectedAction?.name || ""}
        points={selectedAction?.points || 0}
      />
    </div>
  );
};

export default ActionCenter;
