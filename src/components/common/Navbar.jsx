const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-8 flex justify-between items-start z-2 ">
      <div className="nav-logo">
        <a href="#">
          foundry & form
          <br />
          Industrial Design Consultancy
        </a>
      </div>

      <div className="flex flex-col gap-5 ">
        <a href="#">Work</a>
        <a href="#">Catalogue</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
