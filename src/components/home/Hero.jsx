import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

import Navbar from "../common/Navbar";
import Preloader from "../common/Preloader";

import img1 from "../../assets/heroReveal/img-1.webp";
import img2 from "../../assets/heroReveal/img-2.webp";
import img3 from "../../assets/heroReveal/img-3.jpg";
import img4 from "../../assets/heroReveal/img-4.webp";
import img5 from "../../assets/heroReveal/img-5.webp";

gsap.registerPlugin(CustomEase);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.config({
      force3D: true,
    });

    CustomEase.create("hop", "0.9, 0, 0.1, 1");
    CustomEase.create("glide", "0.65, 0, 0.35, 1");

    const vw = window.innerWidth;

    const introImages = gsap.utils.toArray(".intro-img");

    const introImgScale = 0.2;
    const introImgGap = 40;
    const totalOffset = vw * introImgScale + introImgGap;

    const introImgRotations = [-15, 5, -7.5, 10, -2.5];

    const introImgScaleWidth = vw * introImgScale;
    const introImgRowWidth = introImgScaleWidth * 5 + introImgGap * 4;

    const introImgCenteredX = (vw - introImgRowWidth) / 2;
    const introImgOffScreenX = introImgCenteredX - vw * 1.3;

    const leftImgs = [introImages[0], introImages[1]];
    const rightImgs = [introImages[3], introImages[4]];

    introImages.forEach((img, i) => {
      const centeredX =
        introImgCenteredX + i * totalOffset + introImgScaleWidth / 2 - vw / 2;

      const offscreenX =
        introImgOffScreenX + i * totalOffset + introImgScaleWidth / 2 - vw / 2;

      gsap.set(img, {
        scale: introImgScale,
        x: offscreenX,
        rotation: introImgRotations[i],
        borderRadius: "2.5rem",
      });

      img.dataset.centeredX = centeredX;
    });

    const tl = gsap.timeline({ delay: 1 });

    gsap.set(".hero-title", {
      opacity: 0,
      y: 60,
    });

    tl.to(".preloader", {
      scaleX: 1,
      duration: 1.5,
      ease: "glide",
      onComplete: () => {
        gsap.set(".preloader", {
          transformOrigin: "right",
        });
      },
    });

    tl.to(".preloader", {
      scaleX: 0,
      duration: 1.5,
      ease: "hop",
    });

    tl.to(
      ".preloader-overlay",
      {
        yPercent: -100,
        duration: 1.25,
        ease: "hop",
      },
      "<0.8",
    );

    introImages.forEach((img) => {
      tl.to(
        img,
        {
          x: parseFloat(img.dataset.centeredX),
          duration: 1.5,
          ease: "glide",
        },
        "<0.25",
      );
    });

    tl.to(
      leftImgs,
      {
        x: "-100vw",
        scale: 0.8,
        autoAlpha: 0.5,
        duration: 1.5,
        ease: "glide",
      },
      "spread",
    );

    tl.to(
      rightImgs,
      {
        x: "100vw",
        scale: 0.8,
        autoAlpha: 0.5,
        duration: 1.5,
        ease: "glide",
      },
      "spread",
    );

    tl.to(
      ".hero-img",
      {
        scale: 1,
        x: 0,
        rotation: 0,
        borderRadius: 0,
        duration: 1.5,
        ease: "glide",
      },
      "<",
    );

    tl.to(".hero-title", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={heroRef}>
      <Preloader />
      <Navbar />

      <section className="relative w-full h-screen min-h-svh overflow-hidden">
        <div className="intro-img">
          <img src={img1} alt="" />
        </div>

        <div className="intro-img">
          <img src={img2} alt="" />
        </div>

        <div className="intro-img hero-img">
          <img src={img3} alt="" />
        </div>

        <div className="intro-img">
          <img src={img4} alt="" />
        </div>

        <div className="intro-img">
          <img src={img5} alt="" />
        </div>

        <div className="hero-content absolute top-0 left-0 w-full h-screen py-[15svh] px-8 flex flex-col justify-between z-2  ">
          <div className="hero-header h-svh flex  items-center justify-center  ">
            <h1 className="hero-title text-3xl sm:text-4xl ">
              Elegance you can trust, quality you can feel.
            </h1>
          </div>

          <div className="hero-social hidden sm:block  ">
            <p className="text-lg font-bold">Say Hello</p>
            <a href="#">aniexport&import@gmail.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
