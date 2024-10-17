import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/main-components/About";
import Services from "./components/main-components/Services";
import Contacts from "./pages/Contacts";
import SparkConnect from "./pages/SparkConnect";
import MultiStepsForm from "./components/form-components/form-page/MultiStepsForm";

function App() {
  return (
    <div>
      <div>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/SparkConnect" element={<SparkConnect />} />
            <Route path="/MultiStepsForm" element={<MultiStepsForm />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
