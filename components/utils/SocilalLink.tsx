import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { Button } from "../ui/button";

const SocilalLink = () => {
  const socialLinks = [
    {
      name: "Github",
      url: "",
      icon: <FaGithub className="h-16 w-16" />,
    },
    {
      name: "Linkedin",
      url: "",
      icon: <FaLinkedin className="h-16 w-16" />,
    },
    {
      name: "X",
      url: "",
      icon: <FaXTwitter className="h-16 w-16" />,
    },
    {
      name: "Instagram",
      url: "",
      icon: <FaInstagram className="h-16 w-16" />,
    },

    {
      name: "Discord",
      url: "",
      icon: <FaDiscord className="h-16 w-16" />,
    },

    {
      name: "Tiktok",
      url: "",
      icon: <FaTiktok className="h-16 w-16" />,
    },
  ];

  return (
    <div className="flex justify-center md:justify-start space-x-6">
      {socialLinks.map((socialLink) => (
        <Button
          variant="outline"
          size="icon"
          key={socialLink.name}
          className="text-green-600 border-none hover:text-green-800 transition-transform transform hover:scale-150 duration-500"
        >
          {socialLink.icon}
        </Button>
      ))}
    </div>
  );
};

export default SocilalLink;
