import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-rose-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          🤝 PolicyMate
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="border-b-2 border-transparent hover:border-white transition"
          >
            🏠 Home
          </Link>
          <Link
            to="/simplify"
            className="border-b-2 border-transparent hover:border-white transition"
          >
            📖 Simplify
          </Link>
          <Link
            to="/rebuttal"
            className="border-b-2 border-transparent hover:border-white transition"
          >
            📝 Rebuttal
          </Link>
          <Link
            to="/verify"
            className="border-b-2 border-transparent hover:border-white transition"
          >
            ✅ Verify
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
