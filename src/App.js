import React from "react";
import GlobalStyle from "./css/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
