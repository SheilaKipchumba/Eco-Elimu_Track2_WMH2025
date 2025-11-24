import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Lock, Award } from "lucide-react";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Module {
  id: number;
  title: string;
  description: string;
  content: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to Climate Change",
    description: "Understanding the basics of climate change and its causes",
    content: "Climate change refers to long-term shifts in global temperatures and weather patterns. While natural processes contribute to climate variability, human activities—particularly the burning of fossil fuels—have been the dominant cause of warming since the mid-20th century.",
    quiz: [
      {
        question: "What is the primary cause of recent climate change?",
        options: ["Natural cycles", "Human activities", "Solar radiation", "Volcanic eruptions"],
        correctAnswer: 1
      },
      {
        question: "Which gas is the main contributor to global warming?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        correctAnswer: 2
      },
      {
        question: "What does climate change affect?",
        options: ["Only temperature", "Only sea levels", "Weather patterns and ecosystems", "Only polar regions"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 2,
    title: "Climate Change Impacts in Kenya",
    description: "How climate change affects Kenya and East Africa",
    content: "Kenya faces significant climate challenges including prolonged droughts, unpredictable rainfall, and increased temperatures. These changes impact agriculture, water resources, and biodiversity. Vulnerable communities, especially those dependent on rain-fed agriculture, are particularly affected.",
    quiz: [
      {
        question: "What is a major climate impact in Kenya?",
        options: ["Increased snowfall", "More predictable rainfall", "Prolonged droughts", "Stable temperatures"],
        correctAnswer: 2
      },
      {
        question: "Which sector is most affected by climate change in Kenya?",
        options: ["Manufacturing", "Agriculture", "Technology", "Banking"],
        correctAnswer: 1
      },
      {
        question: "Who are most vulnerable to climate impacts?",
        options: ["Urban residents", "Rain-fed agriculture communities", "Industrial workers", "Service sector employees"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 3,
    title: "Climate Action & Solutions",
    description: "What we can do to combat climate change",
    content: "Climate action involves both mitigation (reducing emissions) and adaptation (preparing for impacts). Solutions include renewable energy, reforestation, sustainable agriculture, and conservation. Youth-led initiatives like tree planting, plastic collection, and environmental education are crucial for building climate resilience.",
    quiz: [
      {
        question: "What are the two main approaches to climate action?",
        options: ["Prevention and cure", "Mitigation and adaptation", "Education and enforcement", "Planning and execution"],
        correctAnswer: 1
      },
      {
        question: "Which is a form of climate mitigation?",
        options: ["Building sea walls", "Planting trees", "Relocating communities", "Improving warning systems"],
        correctAnswer: 1
      },
      {
        question: "How can youth contribute to climate action?",
        options: ["Only by studying", "Through tree planting and education", "By waiting until adulthood", "Only through donations"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: "Building Climate Resilience",
    description: "Creating sustainable communities and practices",
    content: "Climate resilience means developing the capacity to recover from climate shocks and adapt to changing conditions. This includes sustainable water management, climate-smart agriculture, ecosystem restoration, and community-based adaptation strategies. Education and awareness are fundamental to building resilient communities.",
    quiz: [
      {
        question: "What does climate resilience mean?",
        options: ["Ignoring climate change", "Capacity to adapt and recover", "Moving to cooler regions", "Stopping all development"],
        correctAnswer: 1
      },
      {
        question: "What is climate-smart agriculture?",
        options: ["Using more chemicals", "Farming practices that adapt to climate change", "Industrial farming only", "Abandoning farming"],
        correctAnswer: 1
      },
      {
        question: "What is fundamental to building resilient communities?",
        options: ["Technology alone", "Education and awareness", "Isolation", "Importing solutions"],
        correctAnswer: 1
      }
    ]
  }
];

const ClimateCoursePage = () => {
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [totalPoints, setTotalPoints] = useState(0);

  const progressPercentage = (completedModules.length / modules.length) * 100;
  const isCompleted = completedModules.length === modules.length;

  const handleStartModule = (moduleId: number) => {
    setActiveModule(moduleId);
    setShowQuiz(false);
    setQuizAnswers({});
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setQuizAnswers({});
  };

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  const handleSubmitQuiz = () => {
    if (!activeModule) return;

    const module = modules.find(m => m.id === activeModule);
    if (!module) return;

    const correctAnswers = module.quiz.filter(
      (q, index) => quizAnswers[index] === q.correctAnswer
    ).length;

    const score = (correctAnswers / module.quiz.length) * 100;

    if (score >= 70) {
      if (!completedModules.includes(activeModule)) {
        setCompletedModules(prev => [...prev, activeModule]);
        setTotalPoints(prev => prev + 2000);
        toast.success(`Module completed! You earned 2,000 points!`);
      } else {
        toast.info("You've already completed this module!");
      }
      setActiveModule(null);
      setShowQuiz(false);
    } else {
      toast.error(`Score: ${score.toFixed(0)}%. You need 70% to pass. Try again!`);
    }
  };

  const renderModuleContent = () => {
    const module = modules.find(m => m.id === activeModule);
    if (!module) return null;

    if (showQuiz) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Quiz - {module.title}</CardTitle>
            <CardDescription>Answer all questions correctly (70% minimum) to complete this module</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {module.quiz.map((q, index) => (
              <div key={index} className="space-y-3">
                <p className="font-medium">Question {index + 1}: {q.question}</p>
                <RadioGroup
                  value={quizAnswers[index]?.toString()}
                  onValueChange={(value) => handleQuizAnswer(index, parseInt(value))}
                >
                  {q.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center space-x-2">
                      <RadioGroupItem value={optIndex.toString()} id={`q${index}-opt${optIndex}`} />
                      <Label htmlFor={`q${index}-opt${optIndex}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
            <div className="flex gap-3">
              <Button 
                onClick={handleSubmitQuiz}
                disabled={Object.keys(quizAnswers).length < module.quiz.length}
                className="btn-eco"
              >
                Submit Quiz
              </Button>
              <Button variant="outline" onClick={() => setShowQuiz(false)}>
                Back to Content
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>{module.title}</CardTitle>
          <CardDescription>{module.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">{module.content}</p>
          <div className="flex gap-3">
            <Button onClick={handleStartQuiz} className="btn-eco">
              Take Quiz (2,000 points)
            </Button>
            <Button variant="outline" onClick={() => setActiveModule(null)}>
              Back to Modules
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  if (activeModule) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          {renderModuleContent()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Climate Change Course</h1>
          <p className="text-muted-foreground">Complete all modules to earn points and your certificate</p>
        </div>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Modules Completed</span>
                  <span className="font-medium">{completedModules.length} / {modules.length}</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                <span className="font-medium">Total Points Earned</span>
                <span className="text-2xl font-bold text-primary">{totalPoints.toLocaleString()}</span>
              </div>
              {isCompleted && (
                <div className="flex items-center gap-2 p-4 bg-secondary/10 rounded-lg border-2 border-secondary">
                  <Award className="w-6 h-6 text-secondary" />
                  <span className="font-medium">Course Completed! Certificate Awarded!</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4">
          {modules.map((module, index) => {
            const isCompleted = completedModules.includes(module.id);
            const isLocked = index > 0 && !completedModules.includes(modules[index - 1].id);

            return (
              <Card key={module.id} className={isCompleted ? "border-secondary" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        Module {module.id}: {module.title}
                        {isCompleted && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                        {isLocked && <Lock className="w-5 h-5 text-muted-foreground" />}
                      </CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">2,000 points</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => handleStartModule(module.id)}
                    disabled={isLocked}
                    className="btn-eco"
                  >
                    {isCompleted ? "Review Module" : isLocked ? "Complete previous module first" : "Start Module"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClimateCoursePage;