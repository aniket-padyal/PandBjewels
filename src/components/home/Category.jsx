import React from "react";

const Category = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-center text-3xl mb-10">Shop by category</h1>

      <div className="container mx-auto flex justify-around items-center  ">
        <div className="earings w-75 h-95 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJhCJ5Wj6TKyRCZv7Xc3ildCIwi1EW21rJryJfro_Xg&s=10"
            alt="earings-img"
          />
          <h1 className="text-center mt-5 text-2xl "  >Earings</h1>
        </div>

        <div className="full-set w-75 h-95 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kJlSb21r6T4j4AA4SiQ__Km0Qys2-xGlPpmOLBQe3Q&s=10"
            alt="full-set-img"
          />
          <h1 className="text-center mt-5 text-2xl " >Full Set</h1>
        </div>

        <div className="necklace w-75 h-95 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRq0UAd4hAecgB6vCWLJnYnmshfQ52_USxg0WvlAtlFA&s=10"
            alt="necklace-img"
          />
          <h1 className="text-center mt-5 text-2xl ">Necklace</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
