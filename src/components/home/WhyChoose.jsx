import React from "react";

const WhyChoose = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-center text-3xl mb-30">Why Choose Us</h1>

      <div className="container mx-auto flex justify-around items-start  ">
        <div className="w-95 mx-5 ">
          <p className="heading text-2xl mb-5 ">01.Designed to last</p>
          <p className="info text-lg">
            Advanced anti-tarnish coating and durable alloy bases ensure
            long-lasting luster.
          </p>
        </div>
        <div className="w-95 mx-5 ">
          <p className="heading text-2xl mb-5">02. Accessible Luxury</p>
          <p className="info text-lg">
            High-fashion aesthetic without the traditional retail markup.
          </p>
        </div>
        <div className="w-95 mx-5 ">
          <p className="heading text-2xl mb-5 ">03. Ethical & Mindful</p>
          <p className="info text-lg ">
           Cruelty-free, skin-conscious materials designed with care and precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
