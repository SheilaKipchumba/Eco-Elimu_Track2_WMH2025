import Navigation from "@/components/Navigation";
import { contentItems } from "@/data/dummyData";
import { Play, FileText, HelpCircle, Download } from "lucide-react";

const ContentHub = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'article': return FileText;
      case 'quiz': return HelpCircle;
      case 'guide': return Download;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Content Hub</h1>
            <p className="text-muted-foreground">Learn about climate action and environmental conservation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item) => {
              const Icon = getIcon(item.type);
              return (
                <div key={item.id} className="card-eco p-6 hover:scale-105 transition-all cursor-pointer group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.thumbnail}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground capitalize">{item.type}</span>
                    <span className="text-sm text-muted-foreground">• {item.duration}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Featured Section */}
          <div className="mt-12 card-eco p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-6xl">🎓</div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Complete Climate Action Course</h2>
                <p className="text-muted-foreground mb-4">
                  Master environmental conservation through our comprehensive 10-module course. Earn a certificate upon completion!
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="badge-eco">10 Modules</div>
                  <div className="badge-eco">Certificate</div>
                  <div className="badge-eco">500 Points</div>
                </div>
              </div>
              <button className="btn-eco">Start Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHub;
