import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apps from "./pages/Apps";
import ForBusiness from "./pages/ForBusiness";
import Footer from "./components/Footer";
import HomeSections from "./pages/Home";
import Features from "./pages/Features";
import HelpPage from "./pages/Help";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import AskAnything from "./pages/AskAnything";
import Navbar from "./components/Navbar";



function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen flex flex-col">
        
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomeSections />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/forbusiness" element={<ForBusiness />} />
            <Route path="/featuers" element={<Features />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/ask-anything" element={<AskAnything />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
