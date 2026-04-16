import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import ProductDetails from "../pages/ProductDetails";
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
