import React from "react";
// import { PRODUCTS } from "../../data/constants";
import ProductCard from "../common/ProductCard";

const FeaturedProduct = () => {
  return (
    <section className=" bg-white  ">
      <p className="text-2xl font-bold px-4 sm-px-10 my-2 text-black ">
        Products we offer
      </p>

      <ProductCard />
    </section>
  );
};

export default FeaturedProduct;
