//React Import
import React from "react";
import { Routes, Route } from "react-router";

//File Import
import Home from "../Container/Home";
import About from "../Container/About";
import Education from "../Container/Education";
import Experience from "../Container/Experience";

//React.memo - Render "RoutesModule" component when the props changes
const RoutesModule = React.memo(function RoutesModule() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </>
  );
});

export default RoutesModule;
