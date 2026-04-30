import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="z-50 m-3 px-5 py-3.5 my-2 flex items-center justify-between rounded-2xl bg-white/40 backdrop-blur-lg border border-white/20 shadow-sm">
        <h1 className="tracking-wide">Navbar</h1>

        <button onClick={() => setOpen(true)}>
          <Menu className="cursor-pointer w-6 h-6" />
        </button>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`w-40 absolute right-3 top-2 z-40 bg-white/40 backdrop-blur-xl px-5 py-3.25 rounded-2xl
        transition-all duration-300 ease-out 
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Close button */}
        <div className="flex justify-between">
          <p className="text-lg font-bold">Menu</p>
          <button onClick={() => setOpen(false)}>
            <X className="cursor-pointer w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col justify-center gap-1.5 pt-4 ">
          <p className="cursor-pointer hover:opacity-70">Shop</p>
          <p className="cursor-pointer hover:opacity-70">Cart</p>
          <p className="cursor-pointer hover:opacity-70">About</p>
          <Sun />
          <Moon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
