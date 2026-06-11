import { useState } from "react";
import Hero from "./components/home/Hero";
import FeaturedProduct from "./components/products/FeaturedProduct";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      {/* <Hero /> */}
      <FeaturedProduct />
      <Footer />
    </>
  );
}

export default App;
