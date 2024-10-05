"use client"

import { Button } from "@/components/ui/button";
import React from "react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "@/components/ui/sheet";
import { FaAlignJustify } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavbarMobile: React.FC = () => {

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
    <div className="flex justify-between items-center">
      <Sheet>
        <SheetTrigger>
          <FaAlignJustify className="m-5 text-2xl" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-0">
                Gnaré
              </div>
            </SheetTitle>
            <SheetDescription>
              <nav className="p-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                  <div className="space-y-4 md:space-y-0 md:space-x-8 font-bold">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.url}
                        scroll={true}
                        className={`block md:inline transition-transform transform hover:scale-125 duration-500 hover:text-green-600 ${
                          currentPath === link.url ? "text-green-600" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
                    <Button className="w-full md:w-auto bg-green-500 hover:bg-green-700">
                      Télécharger mon CV
                    </Button>
                  </div>
                </div>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <h2 className="text-4xl font-extrabold me-4">Gnaré</h2>
    </div>
  );
};

export default NavbarMobile;
