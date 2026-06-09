import NAVBAR from "../../data/constants";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full px-4 sm:px-8 py-3 flex justify-between items-center z-2  ">
      <div className="nav-logo">
        <h1 href="#" className="text-3xl sm:text-5xl  ">
          Ani e&i
        </h1>
      </div>

      <div className="flex flex-col gap-1 ">
        {NAVBAR.map((item) => (
          <a href="#" key={item.id}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
