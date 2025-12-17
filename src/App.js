import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apps from "./pages/Apps";
import Navbar from "./components/Navbar";
import ForBusiness from "./pages/ForBusiness";
import AppLink from "./pages/Applink";
import Footer from "./components/Footer";
import HomeSections from "./pages/Home";
import Features from "./pages/Features";
import ContactUs from "./components/ContactUs";
import HelpPage from "./pages/Help";
import Privacy from "./pages/Privacy";



function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomeSections />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/forbusiness" element={<ForBusiness />} />
            <Route path="/downlod" element={<AppLink />} />
            <Route path="/featuers" element={<Features />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
