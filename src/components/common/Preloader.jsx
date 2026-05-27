

const Preloader = () => {
  return (
    <div className="preloader-overlay fixed top-0 w-full h-screen min-h-svh bg-[#0f0f0f] z-10 overflow-hidden will-change-transform ">
      <div className="preloader absolute top-0 w-full h-2 bg-white origin-left scale-x-0 will-change-transform"></div>
    </div>
  );
};

export default Preloader;
