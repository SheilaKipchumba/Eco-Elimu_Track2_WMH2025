import Navigation from "@/components/Navigation";
import { teacherResources } from "@/data/dummyData";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeacherResources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Teacher Resource Hub</h1>
            <p className="text-muted-foreground">Everything you need to run a successful 4K Club</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {teacherResources.map((resource) => (
              <div key={resource.id} className="card-eco p-6 hover:scale-105 transition-all">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full rounded-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download {resource.type}
                </Button>
              </div>
            ))}
          </div>

          {/* Mentor Network */}
          <div className="card-eco p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">4K Club Mentor Network</h2>
            <p className="text-muted-foreground mb-6">
              Connect with experienced teachers running successful environmental clubs across Kenya
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Ms. Wanjiku - Nairobi', 'Mr. Ochieng - Kisumu', 'Mrs. Maina - Nakuru'].map((mentor, idx) => (
                <div key={idx} className="p-4 bg-accent rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                    {mentor[0]}
                  </div>
                  <div className="font-medium mb-1">{mentor}</div>
                  <div className="text-sm text-muted-foreground">Available for mentorship</div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="card-eco p-8">
            <h2 className="text-2xl font-bold mb-6">Best Practices & Tips</h2>
            <div className="space-y-4">
              {[
                { title: "Weekly Club Meetings", tip: "Schedule consistent meeting times to build routine and engagement" },
                { title: "Parent Involvement", tip: "Share monthly newsletters to keep parents informed and supportive" },
                { title: "Student Leadership", tip: "Rotate leadership roles to develop skills across all members" },
                { title: "Community Partnerships", tip: "Connect with local organizations for resources and support" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-accent rounded-xl">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherResources;
