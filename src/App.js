import React from "react";
import GlobalStyle from "./css/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./services/prismic";

function App() {
  return (
    <PrismicProvider client={client}>
      <BrowserRouter>
        <GlobalStyle />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PrismicProvider>
  );
}

export default App;
