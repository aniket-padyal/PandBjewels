import products from "../constant/index";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Products</h1>

      {/* {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <Link to={`/product/${product.id}`}>
            View Details
          </Link>
        </div>
      ))} */}
    </div>
  );
}

export default Home;
