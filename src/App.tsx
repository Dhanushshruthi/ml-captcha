import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EyeChecking from "./components/Eye.tsx";
import PassiveCheckingBlind from "./components/PassiveCheckingBlind.tsx";
import PassiveCheckingNormal from "./components/PassiveCheckingNormal.tsx";

import SmileCheking from "./components/SmilChecking.tsx";
import Start from "./components/Start.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/eye" element={<EyeChecking />} />
        <Route path="/passive-blind" element={<PassiveCheckingBlind />} />
        <Route path="/passive-normal" element={<PassiveCheckingNormal />} />
        <Route path="/smile" element={<SmileCheking />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
