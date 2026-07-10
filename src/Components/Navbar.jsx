import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "font-semibold text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="fixed left-0 top-4 z-50 w-full px-3 sm:px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-3xl border border-gray-200 bg-white px-5 py-4 shadow-lg sm:px-7">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="text-xl font-bold text-blue-600 sm:text-2xl"
        >
          PRATHIKSH
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 font-medium md:flex lg:gap-10">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((previousOpen) => !previousOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-3xl text-gray-800 transition hover:bg-gray-100 md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg md:hidden">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-6 py-4 transition ${
                isActive
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block border-t border-gray-100 px-6 py-4 transition ${
                isActive
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block border-t border-gray-100 px-6 py-4 transition ${
                isActive
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;