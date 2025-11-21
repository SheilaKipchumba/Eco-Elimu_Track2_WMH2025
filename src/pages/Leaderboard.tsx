import Navigation from "@/components/Navigation";
import { dummySchools, studentLeaderboard, teacherLeaderboard } from "@/data/dummyData";
import { Trophy, Medal, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-amber-600" />;
    return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">#{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">🏆 Leaderboard</h1>
            <p className="text-muted-foreground">Top performers across Kenya's 4K Clubs</p>
          </div>

          <Tabs defaultValue="schools" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="schools">Schools</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="teachers">Teachers</TabsTrigger>
              <TabsTrigger value="counties">Counties</TabsTrigger>
            </TabsList>

            <TabsContent value="schools" className="space-y-4">
              {dummySchools
                .sort((a, b) => b.totalPoints - a.totalPoints)
                .map((school, idx) => (
                  <div key={school.id} className="card-eco p-5 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        {getRankIcon(idx + 1)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{school.name}</h3>
                        <p className="text-sm text-muted-foreground">{school.county} County • {school.studentsCount} students</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{school.totalPoints.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="students" className="space-y-4">
              {studentLeaderboard.map((student) => (
                <div key={student.rank} className="card-eco p-5 hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {getRankIcon(student.rank)}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-lg">
                      {student.name[0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">{student.school}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{student.points.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="teachers" className="space-y-4">
              {teacherLeaderboard.map((teacher) => (
                <div key={teacher.rank} className="card-eco p-5 hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {getRankIcon(teacher.rank)}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-lg">
                      {teacher.name[0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{teacher.name}</h3>
                      <p className="text-sm text-muted-foreground">{teacher.school} • {teacher.verified} verified</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">KSh {teacher.earnings.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">earned</div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="counties" className="space-y-4">
              {[
                { rank: 1, name: "Nairobi", points: 15200, schools: 8 },
                { rank: 2, name: "Nakuru", points: 12800, schools: 6 },
                { rank: 3, name: "Kisumu", points: 11400, schools: 5 },
                { rank: 4, name: "Mombasa", points: 9600, schools: 4 },
              ].map((county) => (
                <div key={county.rank} className="card-eco p-5 hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {getRankIcon(county.rank)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{county.name} County</h3>
                      <p className="text-sm text-muted-foreground">{county.schools} participating schools</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{county.points.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>

          {/* Achievement Banner */}
          <div className="mt-8 card-eco p-6 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="font-bold text-lg mb-2">Keep Climbing!</h3>
            <p className="text-sm text-muted-foreground">
              Every action counts. Log more activities to move up the leaderboard and make a bigger impact!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
