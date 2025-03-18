import React from "react";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/Navbar/Nav";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Card from "./pages/card/Card";


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
