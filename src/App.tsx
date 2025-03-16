
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useEffect } from "react";
import Index from "./pages/Index";
import UserDetails from "./pages/UserDetails";
import Survey from "./pages/Survey";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Animation wrapper for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen w-full page-transition-enter">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user-details/:role" element={<UserDetails />} />
        <Route path="/survey/:role" element={<Survey />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
