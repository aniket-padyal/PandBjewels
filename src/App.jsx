
import Hero from "./components/home/Hero";
import Category from "./components/home/Category";
// import FeaturedProduct from "./components/products/FeaturedProduct";
import Footer from "./components/common/Footer";
import NewArrival from "./components/home/NewArrival";
import WhyChoose from "./components/home/WhyChoose";

function App() {
  return (
    <>
      <Hero />
      <Category />
      <NewArrival />
      <WhyChoose />
      {/* <FeaturedProduct /> */}
      <Footer />
    </>
  );
}

export default App;
