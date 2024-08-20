import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Payroll from "./pages/Payroll";
import Ratings from "./components/Ratings/Ratings";
import CaseStudies from "./components/Ratings/CaseStudies";
import Docs from "./components/Resources/Docs";
import Blogs from "./components/Resources/Blogs";
import AboutUs from "./components/Company/AboutUs";
import Careers from "./components/Company/Careers";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/payroll" element={<Payroll/>} />
          <Route path="/ratings" element={<Ratings/>} />
          <Route path="/case-studies" element={<CaseStudies/>} />
          <Route path="/documents" element={<Docs/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
