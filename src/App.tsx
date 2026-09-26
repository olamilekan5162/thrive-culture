import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Thrive20Page } from "./pages/Thrive20Page";
import { InitiativesDirectoryPage } from "./pages/InitiativesDirectoryPage";
import { InitiativeDetailPage } from "./pages/InitiativeDetailPage";
import { ApplicationPage } from "./pages/ApplicationPage";
import { PossibilityNetworkPage } from "./pages/PossibilityNetworkPage";
import { ImpactPage } from "./pages/ImpactPage";
import { StoriesPage } from "./pages/StoriesPage";
import { StoryDetailPage } from "./pages/StoryDetailPage";
import { PartnerPage } from "./pages/PartnerPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121316]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/plan-twenty" element={<Thrive20Page />} />
            <Route path="/initiatives" element={<InitiativesDirectoryPage />} />
            <Route path="/initiatives/:id" element={<InitiativeDetailPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
            <Route
              path="/possibility-network"
              element={<PossibilityNetworkPage />}
            />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/stories/:id" element={<StoryDetailPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
