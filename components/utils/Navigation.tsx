import React from "react";
import NavbarMobile from "./NavbarMobile";
import Navbar from "./Navbar";

const Navigation = () => {
  return (
    <>
      {/* Navbar for larger screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>
      {/* NavbarMobile for smaller screens */}
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
    </>
  );
};

export default Navigation;
