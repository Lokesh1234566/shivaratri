import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import English from "./pages/English";
import Kannada from "./pages/Kannada";
import Footercomp from "./Components/Footercomp";
import Animation from "./Components/Animation";
import Photos from "./Components/Photos";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Animation />
      <Header />
      <Routes>
        <Route path="/" element={<Kannada />} />
        <Route path="/english" element={<English />} />
      </Routes>
      <Photos />
      <About />
      <Contact />
      <Footercomp />
    </BrowserRouter>
  );
};

export default App;
