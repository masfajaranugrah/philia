import React from "react";
import {  Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Getting from "./pages/Getting";
import Wahana from "./pages/Wahana";
import Ticket from "./pages/Ticket";
import Question from "./pages/Question";
import Calender from "./pages/Calender";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getting-here" element={<Getting />} />
        <Route path="/wahana" element={<Wahana />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/question" element={<Question />} />
        <Route path="/event" element={<Calender />} />
      </Routes>
     
  );
};

export default App;
