/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import SocilalLink from "./SocilalLink";

const Hero: React.FC = () => {
  return (
    <section className="container min-h-screen mt-0 flex flex-col md:flex-row justify-center items-center">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
        <Image
          src="/images/hero.jpg"
          width={1920}
          height={1080}
          alt="Ben"
          className="rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] xl:w-[650px] xl:h-[650px] object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full p-4 md:w-1/2 text-center md:text-left order-2 md:order-1">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold mb-4">
          Bonjour, je suis Ben
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl xl:text-5xl mb-8 text-green-500 uppercase font-bold">
          Développeur Full Stack
        </p>

        {/* Description */}
        <p className="text-base md:text-lg xl:text-xl mb-8">
          Développeur Full Stack passionné, j'allie expertise front-end et
          back-end pour créer des applications web modernes, intuitives et
          performantes, avec un fort accent sur l'expérience utilisateur.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6">
          <SocilalLink />
        </div>
      </div>
    </section>
  );
};

export default Hero;
