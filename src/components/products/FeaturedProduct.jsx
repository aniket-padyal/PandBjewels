import React from "react";
import { PRODUCTS } from "../../data/constants";

const FeaturedProduct = () => {
  return (
    <section className=" bg-[#FAF7F2] ">
      <p className="text-2xl font-bold px-8 pt-8 text-black ">
        Products we offer
      </p>

      {/* wrapper */}
      <div className="wrapper flex flex-wrap justify-center items-center p-6 gap-4 md:gap-6.5 border-black ">
        {PRODUCTS.map((item) => (
          // product card
          <div
            className="product rounded-2xl m-0 w-36 sm:w-60 p-4 bg-[] text-black bg-[#FFFFFF] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] "
            key={item.id}
          >
            {/* image */}
            <img
              className="rounded-xl transition-transform duration-400 ease-out hover:scale-105 "
              src={item.image}
              alt={item.name}
            />

            {/* information */}
            <div className="md:flex justify-between mt-4">
              <p className="font-bold">{item.name}</p>
              <p className={item.inStock ? "text-green-500" : "text-red-500"}>
                ● {item.inStock ? "In stock" : "Sold Out"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
