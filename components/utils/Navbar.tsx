import { Button } from "@/components/ui/button";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-6xl font-extrabold">Gnaré</div>
        <div className="space-x-8 font-bold">
          <a href="#home" className="hover:text-green-700">
            Home
          </a>
          <a href="#Services" className="hover:text-green-700">
            Services
          </a>
          <a href="#about" className="hover:text-green-700">
            About
          </a>
          <a href="#projects" className="hover:text-green-700">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-700">
            Contact
          </a>
        </div>
        <div className="space-x-4">
          <Button className="bg-green-500 hover:bg-green-700">
            Télécharger mon CV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
