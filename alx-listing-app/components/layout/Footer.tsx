import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-center py-6 mt-10 text-lg text-gray-600">
      <p>© {new Date().getFullYear()} AirbnbClone. All rights reserved.</p>

      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-black">Privacy</a>
        <a href="#" className="hover:text-black">Terms</a>
        <a href="#" className="hover:text-black">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
