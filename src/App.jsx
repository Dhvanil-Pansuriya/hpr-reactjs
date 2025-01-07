import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Home1 from "./pages/Home1";
// import Home3 from "./pages/Home3";
import Navbar from "./commonUtils/Navbar";
import PageNotFound from "./commonUtils/PageNotFound";
import FuturePage from "./commonUtils/FuturePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsPage from "./pages/TermsPage";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/home1" element={<Home1 />} /> */}
            {/* <Route path="/home3" element={<Home3 />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/comingsoon" element={<FuturePage />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;