import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import InitiativesPage from "./pages/InitiativesPage";
import Thrive20CampPage from "./pages/Thrive20CampPage";
import ImpactPage from "./pages/ImpactPage";
import PartnerPage from "./pages/PartnerPage";
import ContactPage from "./pages/ContactPage";
import StoriesPage from "./pages/StoriesPage";

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

// Clean 404 Not Found Page
function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-stone-50 px-4 py-20 text-center">
      <div className="max-w-md space-y-4">
        <span className="text-xs font-mono font-bold text-amber-800">404</span>
        <h1 className="text-3xl font-bold text-stone-950">Page Not Found</h1>
        <p className="text-stone-600 text-sm">
          The page you are looking for does not exist in the Thrive Culture
          directory.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 rounded-md transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-200">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/initiatives" element={<InitiativesPage />} />
            <Route
              path="/initiatives/thrive-20-camp"
              element={<Thrive20CampPage />}
            />
            <Route path="/thrive-20-camp" element={<Thrive20CampPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
