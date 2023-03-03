import React from "react";
import { Route, Routes,useLocation} from "react-router-dom";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const location=useLocation();
  return (
   
    <AnimatePresence >
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </AnimatePresence>
   
  );
};

export default App;
