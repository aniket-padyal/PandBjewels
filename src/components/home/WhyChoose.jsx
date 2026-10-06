import { whyDiscription } from "../../data/constants";

const WhyChoose = () => {
  return (
    <div className="min-h-screen mx-auto flex flex-col items-center justify-center ">
      <h1 className="text-center text-3xl mb-10 sm:mb-30 ">Why Choose Us</h1>

      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-5 ">
        {whyDiscription.map((item) => (
          <div className="w-full sm:flex-1 p-5 " key={item.heading}>
            <h1 className="text-xl sm:text-2xl mb-3 sm:mb-5 ">{item.heading}</h1>
            <p className="text-base sm:text-lg">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
