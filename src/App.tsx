import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SelectProfile from "./pages/SelectProfile";
import NewUser from "./pages/NewUser";
import Dashboard from "./pages/Dashboard";
import Consultation from "./pages/Consultation";
import SymptomsSelection from "./pages/SymptomsSelection";
import MedicineSuggestions from "./pages/MedicineSuggestions";
import DiseaseDetails from "./pages/DiseaseDetails";
import DietPlanner from "./pages/DietPlanner";
import FitnessPlanner from "./pages/FitnessPlanner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/select-profile" element={<SelectProfile />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/symptoms" element={<SymptomsSelection />} />
          <Route path="/medicine-suggestions" element={<MedicineSuggestions />} />
          <Route path="/disease-details" element={<DiseaseDetails />} />
          <Route path="/diet-planner" element={<DietPlanner />} />
          <Route path="/fitness-planner" element={<FitnessPlanner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
