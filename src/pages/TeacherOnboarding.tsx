import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Leaf, DollarSign, Award } from "lucide-react";

const TeacherOnboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    {
      title: "Welcome to ECO-ELIMU",
      subtitle: "Turning Environmental Education Into Measurable Value",
      icon: Leaf,
      content: "Join thousands of teachers across Kenya who are transforming climate education into real environmental impact while earning rewards.",
    },
    {
      title: "Log Activities, Earn Rewards",
      subtitle: "Every Action Has Value",
      icon: DollarSign,
      content: "Upload proof of your environmental activities—plastic collection, tree planting, climate lessons—and receive micro-payments for verified impact.",
    },
    {
      title: "Verified Impact",
      subtitle: "Build Trust, Create Change",
      icon: CheckCircle2,
      content: "All activities are verified by our system to ensure genuine environmental outcomes. Your school gains recognition and funders see real results.",
    },
    {
      title: "Ready to Make Impact?",
      subtitle: "Let's Get Started",
      icon: Award,
      content: "You're all set! Start logging your first activity and join the movement of educators creating measurable environmental change.",
    },
  ];

  const currentStep = steps[step];
  const Icon = currentStep.icon;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/teacher-dashboard");
    }
  };

  const handleSkip = () => {
    navigate("/teacher-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-accent/30 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="card-eco text-center space-y-8">
          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === step
                    ? "w-12 bg-primary"
                    : index < step
                    ? "w-8 bg-primary/60"
                    : "w-8 bg-border"
                }`}
              />
            ))}
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              {currentStep.title}
            </h1>
            <p className="text-xl text-primary font-semibold">
              {currentStep.subtitle}
            </p>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {currentStep.content}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center pt-6">
            {step < steps.length - 1 && (
              <Button
                variant="ghost"
                onClick={handleSkip}
                size="lg"
              >
                Skip
              </Button>
            )}
            <Button
              onClick={handleNext}
              size="lg"
              className="btn-eco min-w-[200px]"
            >
              {step < steps.length - 1 ? "Next" : "Get Started"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherOnboarding;
