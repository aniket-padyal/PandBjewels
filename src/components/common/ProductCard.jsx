import { PRODUCTS } from "../../data/constants";

const ProductCard = () => {
  return (
    /* wrapper */
    <div className="wrapper grid gap-4 sm:gap-8 grid-cols-[repeat(auto-fit,minmax(110px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] p-4 sm:p-8 ">
      {PRODUCTS.map((item) => (
        // product card
        <div
          className="product w-full flex flex-col "
          key={item.id}
        >
          {/* image */}
          <img
            className="transition-transform duration-400 ease-out hover:scale-95 cursor-pointer rounded "
            src={item.image}
            alt={item.name}
          />

          {/* information */}
          <div className="p-2 ">
            <p className="text-lg font-bold mb-1">{item.name}</p>
            <span className="text-lg " >₹{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
