import React from "react";
import { PRODUCTS } from "../../data/constants";
// import image from "../../assets/products/Bangles-1"

const FeaturedProduct = () => {
  return (
    <section className="bg-black ">
      <p className="text-2xl font-bold px-8 pt-8 ">Featured Products</p>
      <div className="wrapper  flex flex-wrap justify-evenly p-6 gap-4 ">
        {PRODUCTS.map((item) => (
          <div
            className="product rounded-2xl m-1 w-75 h-90 p-5 border "
            key={item.id}
          >
            <img src={item.image} alt={item.name} />
            {/* <img src={image} alt="" /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
