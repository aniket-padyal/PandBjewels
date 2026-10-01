import React from "react";
import { PRODUCTS } from "../../data/constants";

const ProductCard = () => {
  return (
    /* wrapper */
    <div className="wrapper grid sm:gap-4 grid-cols-[repeat(auto-fit,minmax(170px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] p-2.5 sm-p-6   ">
      {PRODUCTS.map((item) => (
        // product card
        <div
          className="product w-full flex flex-col sm:rounded-2xl p-2 text-black bg-[#FFFFFF] sm:shadow-[0_8px_30px_rgb(0,0,0,0.12)] "
          key={item.id}
        >
          {/* image */}
          <img
            className="rounded-xl transition-transform duration-400 ease-out hover:scale-105 cursor-pointer  "
            src={item.image}
            alt={item.name}
          />

          {/* information */}
          <div className="sm:flex justify-between mt-2 p-1 ">
            <p className="sm:font-bold mb-1 sm:mb-0">{item.name}</p>
            <p className={item.inStock ? "text-green-500" : "text-red-500"}>
              ● {item.inStock ? "In stock" : "Sold Out"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
