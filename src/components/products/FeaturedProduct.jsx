import React from "react";
import { PRODUCTS } from "../../data/constants";

const FeaturedProduct = () => {
  return (
    <section className=" bg-[#FAF7F2] ">
      <p className="text-2xl font-bold px-4 md-px-10 mt-8 text-black ">
        Products we offer
      </p>

      {/* wrapper */}
      <div className="wrapper flex flex-wrap justify-center items-center p-2.5 md-p-6 gap-3 md:gap-6.5  ">
        {PRODUCTS.map((item) => (
          // product card
          <div
            className="product rounded-2xl w-[clamp(170px,30vw,320px)] md:w-60  p-2 md:p-0 bg-[] text-black bg-[#FFFFFF]  shadow-[0_8px_30px_rgb(0,0,0,0.12)] "
            key={item.id}
          >
            {/* image */}
            <img
              className="rounded-xl transition-transform duration-400 ease-out hover:scale-105 cursor-pointer  "
              src={item.image}
              alt={item.name}
            />

            {/* information */}
            <div className="md:flex justify-between mt-2 md:mt-0 px-2 py-3">
              <p className="md:font-bold mb-1 md:mb-0">{item.name}</p>
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
