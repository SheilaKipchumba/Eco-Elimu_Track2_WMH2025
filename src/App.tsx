import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import ActionCenter from "./pages/ActionCenter";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import ContentHub from "./pages/ContentHub";
import TeacherResources from "./pages/TeacherResources";
import FunderDashboard from "./pages/FunderDashboard";
import Leaderboard from "./pages/Leaderboard";
import ImpactFundingHub from "./pages/ImpactFundingHub";
import Auth from "./pages/Auth";
import TeacherCommunity from "./pages/TeacherCommunity";
import SMSConcept from "./pages/SMSConcept";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/action-center" element={<ProtectedRoute><ActionCenter /></ProtectedRoute>} />
            <Route path="/student-dashboard" element={<ProtectedRoute allowedRoles={["student"]}><StudentDashboard /></ProtectedRoute>} />
            <Route path="/teacher-dashboard" element={<ProtectedRoute allowedRoles={["teacher"]}><TeacherDashboard /></ProtectedRoute>} />
            <Route path="/teacher-community" element={<ProtectedRoute allowedRoles={["teacher"]}><TeacherCommunity /></ProtectedRoute>} />
            <Route path="/content-hub" element={<ProtectedRoute><ContentHub /></ProtectedRoute>} />
            <Route path="/teacher-resources" element={<ProtectedRoute allowedRoles={["teacher"]}><TeacherResources /></ProtectedRoute>} />
            <Route path="/funder-dashboard" element={<ProtectedRoute allowedRoles={["sponsor"]}><FunderDashboard /></ProtectedRoute>} />
            <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
            <Route path="/impact-funding" element={<ProtectedRoute allowedRoles={["sponsor"]}><ImpactFundingHub /></ProtectedRoute>} />
            <Route path="/sms-concept" element={<ProtectedRoute><SMSConcept /></ProtectedRoute>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
