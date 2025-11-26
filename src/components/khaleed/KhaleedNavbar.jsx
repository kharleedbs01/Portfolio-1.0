import React from "react";
import { Link } from "react-router-dom";

const KhaleedNavbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Khaleed's Portfolio</h1>
      <div className="space-x-4">
        <Link to="/biliamin" className="hover:text-blue-500">Home</Link>
        <Link to="/biliamin" className="hover:text-blue-500">Test</Link>
        <Link to="/biliamin" className="hover:text-blue-500">Portfolio</Link>
      </div>
    </nav>
  );
};

export default KhaleedNavbar;
