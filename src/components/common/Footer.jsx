import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-semibold text-white">Ani e&i</h2>

        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/shop" className="hover:text-white transition-colors">Shop</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;