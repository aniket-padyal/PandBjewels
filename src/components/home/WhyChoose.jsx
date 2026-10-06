import React from "react";

const WhyChoose = () => {
  return (
    <div className="h-screen mx-auto flex flex-col items-center justify-center ">
      <h1 className="text-center text-3xl mb-30">Why Choose Us</h1>

      <div className="container flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 sm:gap-5 ">
        <div className="w-95  ">
          <h1 className="heading text-2xl mb-5  ">01.Designed to last</h1>
          <p className="info text-lg">
            Advanced anti-tarnish coating and durable alloy bases ensure
            long-lasting luster.
          </p>
        </div>
        <div className="w-95  ">
          <h1 className="heading text-2xl mb-5">02. Accessible Luxury</h1>
          <p className="info text-lg">
            High-fashion aesthetic without the traditional retail markup.
          </p>
        </div>
        <div className="w-95  ">
          <h1 className="heading text-2xl mb-5 ">03. Ethical & Mindful</h1>
          <p className="info text-lg ">
           Cruelty-free, skin-conscious materials designed with care and precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
