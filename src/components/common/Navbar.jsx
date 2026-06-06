import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-5 flex justify-between items-center z-2  ">
      <div className="nav-logo">
        <h1 href="#" className="text-5xl ">
          Ani Jewels
        </h1>
      </div>

      <div className="flex flex-col gap-2 ">
        <a href="#">Work</a>
        <a href="#">Catalogue</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
