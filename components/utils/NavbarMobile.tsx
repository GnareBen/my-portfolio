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

const NavbarMobile: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FaAlignJustify className="m-5 text-2xl" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-0">
              Mon Portfolio
            </div>
          </SheetTitle>
          <SheetDescription>
            <nav className="p-4">
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="space-y-4 md:space-y-0 md:space-x-8 font-bold">
                  <a
                    href="#home"
                    className="block md:inline hover:text-green-700"
                  >
                    Home
                  </a>
                  <a
                    href="#Services"
                    className="block md:inline hover:text-green-700"
                  >
                    Services
                  </a>
                  <a
                    href="#about"
                    className="block md:inline hover:text-green-700"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="block md:inline hover:text-green-700"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="block md:inline hover:text-green-700"
                  >
                    Contact
                  </a>
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
  );
};

export default NavbarMobile;
