import { category } from "../../data/constants";

const Category = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-center text-3xl mb-10">Shop by category</h1>

      <div className="container mx-auto flex justify-around items-center  ">
        {category.map((item) => (
          <div  className="w-75 h-95 ">
            <img
              src={item.imgLink}
              alt="jewellery-img"
            />
            <h1 className="text-center mt-5 text-2xl ">{item.heading}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
