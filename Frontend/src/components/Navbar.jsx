import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Contest Tracker
      </Link>

      <button
        className="md:hidden text-white focus:outline-none text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      <div
        className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 md:inline rounded-md ${
              isActive ? "bg-gray-700" : "hover:bg-gray-600"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contests/codeforces"
          className={({ isActive }) =>
            `block px-4 py-2 md:inline rounded-md ${
              isActive ? "bg-gray-700" : "hover:bg-gray-600"
            }`
          }
        >
          Codeforces
        </NavLink>
        <NavLink
          to="/contests/leetcode"
          className={({ isActive }) =>
            `block px-4 py-2 md:inline rounded-md ${
              isActive ? "bg-gray-700" : "hover:bg-gray-600"
            }`
          }
        >
          LeetCode
        </NavLink>
        <NavLink
          to="/contests/codechef"
          className={({ isActive }) =>
            `block px-4 py-2 md:inline rounded-md ${
              isActive ? "bg-gray-700" : "hover:bg-gray-600"
            }`
          }
        >
          CodeChef
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
