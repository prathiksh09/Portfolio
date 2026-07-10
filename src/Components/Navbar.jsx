import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 w-full px-4 z-50">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl border border-gray-200 px-5 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-blue-600">
          PRATHIKSH
        </h1>

        <div className="hidden md:flex gap-10 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;