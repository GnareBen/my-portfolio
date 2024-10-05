import { Button } from "@/components/ui/button";
import React from "react";

const Navbar: React.FC = () => {
  const links = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "Services",
      url: "#Services",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-6xl font-extrabold">Gnaré</div>
        <div className="space-x-8 font-bold">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="inline-block hover:text-green-600 transition-transform transform hover:scale-125 duration-500"
            >
              {link.name}
            </a>
          ))}
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
