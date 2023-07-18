import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import { About } from "./src/components/about/About";
import { Contact } from "./src/components/contact/Contact";
import { Home } from "./src/components/home/home";
import { Layout } from "./src/components/layout";
import { Projects } from "./src/components/portfolio/Projects";
const App = () => {

  return (
  
   <Routes>
       <Route path="/" element={<About />} />
   <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
   </Routes>
   
  );
};

export default App;