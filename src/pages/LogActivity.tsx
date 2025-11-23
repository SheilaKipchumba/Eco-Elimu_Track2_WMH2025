import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Recycle, 
  TreePine, 
  BookOpen, 
  Droplets,
  Camera,
  MapPin,
  Calendar,
  Upload,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LogActivity = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    date: "",
    quantity: "",
    location: "",
    description: "",
    participants: "",
  });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modules = [
    {
      id: "plastic",
      name: "Plastic Recovery",
      icon: Recycle,
      color: "text-impact-plastic",
      bgColor: "bg-impact-plastic/10",
      borderColor: "border-impact-plastic/30",
      points: "50-100 KSh/kg",
      unit: "kg",
      placeholder: "Enter weight in kg",
    },
    {
      id: "trees",
      name: "Tree Planting",
      icon: TreePine,
      color: "text-impact-trees",
      bgColor: "bg-impact-trees/10",
      borderColor: "border-impact-trees/30",
      points: "20 KSh/tree",
      unit: "trees",
      placeholder: "Number of trees planted",
    },
    {
      id: "climate",
      name: "Climate Lesson",
      icon: BookOpen,
      color: "text-impact-climate",
      bgColor: "bg-impact-climate/10",
      borderColor: "border-impact-climate/30",
      points: "100 KSh/lesson",
      unit: "lesson",
      placeholder: "Lesson duration (hours)",
    },
    {
      id: "water",
      name: "Water Conservation",
      icon: Droplets,
      color: "text-impact-water",
      bgColor: "bg-impact-water/10",
      borderColor: "border-impact-water/30",
      points: "75 KSh/activity",
      unit: "activity",
      placeholder: "Activity description",
    },
  ];

  const currentModule = modules.find(m => m.id === selectedModule);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!photoPreview) {
      toast({
        title: "Photo Required",
        description: "Please upload proof of your activity",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Activity Submitted! ✓",
        description: "Your activity is under verification. You'll be notified once approved.",
      });
      setIsSubmitting(false);
      navigate("/teacher-dashboard");
    }, 1500);
  };

  if (!selectedModule) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Log New Activity
              </h1>
              <p className="text-muted-foreground">
                Select the type of environmental activity you've completed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <button
                    key={module.id}
                    onClick={() => setSelectedModule(module.id)}
                    className={`card-eco text-left hover:scale-[1.02] transition-transform border-2 ${module.borderColor}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-xl ${module.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-8 h-8 ${module.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {module.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Log your {module.name.toLowerCase()} activity
                        </p>
                        <span className="badge-eco text-xs">
                          {module.points}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const Icon = currentModule!.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => setSelectedModule(null)}
            className="mb-6"
          >
            ← Back to Activities
          </Button>

          <div className="card-eco space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4 pb-6 border-b border-border">
              <div className={`w-16 h-16 rounded-xl ${currentModule.bgColor} flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${currentModule.color}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {currentModule.name}
                </h2>
                <span className="badge-eco text-xs mt-2 inline-block">
                  {currentModule.points}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Activity Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <Label htmlFor="quantity">
                  Quantity ({currentModule.unit})
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  required
                  placeholder={currentModule.placeholder}
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  min="0"
                  step="0.1"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </Label>
                <Input
                  id="location"
                  required
                  placeholder="Where did this activity take place?"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
                <p className="text-xs text-muted-foreground">
                  GPS coordinates will be captured automatically when you submit
                </p>
              </div>

              {/* Participants */}
              <div className="space-y-2">
                <Label htmlFor="participants">
                  Number of Participants
                </Label>
                <Input
                  id="participants"
                  type="number"
                  placeholder="How many students participated?"
                  value={formData.participants}
                  onChange={(e) => setFormData({...formData, participants: e.target.value})}
                  min="1"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">
                  Activity Description
                </Label>
                <Textarea
                  id="description"
                  required
                  placeholder="Describe what you did..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                />
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Upload Proof (Required)
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  {photoPreview ? (
                    <div className="space-y-4">
                      <img
                        src={photoPreview}
                        alt="Activity proof"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setPhotoPreview(null);
                          const input = document.getElementById('photo') as HTMLInputElement;
                          if (input) input.value = '';
                        }}
                      >
                        Remove Photo
                      </Button>
                    </div>
                  ) : (
                    <label htmlFor="photo" className="cursor-pointer">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Photo or video evidence of your activity
                      </p>
                      <input
                        id="photo"
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={handlePhotoUpload}
                      />
                    </label>
                  )}
                </div>
                <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>
                    Photo metadata (GPS, timestamp) will be validated. Works offline—your submission will sync when you're back online.
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 space-y-4">
                <Button
                  type="submit"
                  className="btn-eco w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Submit for Verification
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  You'll receive a notification when your activity is verified and payment is processed
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogActivity;
