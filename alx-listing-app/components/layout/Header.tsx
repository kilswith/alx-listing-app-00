import React from "react";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white px-6 py-4 flex flex-col gap-4">
      {/* Top Section: Logo + Search + Auth */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500 cursor-pointer">
          AirbnbClone
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 border rounded-full px-4 py-2 w-1/3">
          <input
            type="text"
            placeholder="Search destinations"
            className="outline-none w-full"
          />
        </div>

        {/* Sign in / Sign up */}
        <div className="flex items-center gap-4 text-lg">
          <button className="px-4 py-1 border rounded-full hover:bg-gray-100">
            Sign In
          </button>
          <button className="px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="flex gap-6 text-lg font-medium justify-center">
        <button className="hover:text-red-500">Rooms</button>
        <button className="hover:text-red-500">Mansion</button>
        <button className="hover:text-red-500">Countryside</button>
        <button className="hover:text-red-500">City Apartments</button>
        <button className="hover:text-red-500">Beachside</button>
      </nav>
    </header>
  );
};

export default Header;
