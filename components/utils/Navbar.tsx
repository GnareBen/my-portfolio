"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      url: "/contact",
    },
  ];

  const currentPath = usePathname();

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-6xl font-extrabold">Gnaré</div>
        <div className="space-x-8 font-bold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              scroll={true}
              className={`inline-block transition-transform transform hover:scale-125 duration-500 hover:text-green-600 ${
                currentPath === link.url ? "text-green-600" : ""
              }`}
            >
              {link.name}
            </Link>
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
