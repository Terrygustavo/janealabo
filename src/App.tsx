import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Rings from "./pages/Rings";
import Bracelets from "./pages/Bracelets";
import Necklaces from "./pages/Necklaces";
import Earrings from "./pages/Earrings";
import Cufflinks from "./pages/Cufflinks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/custom-rings" element={<Rings />} />
          <Route path="/luxury-bracelets" element={<Bracelets />} />
          <Route path="/designer-necklaces" element={<Necklaces />} />
          <Route path="/custom-earrings" element={<Earrings />} />
          <Route path="/luxury-cufflinks" element={<Cufflinks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
