/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section className="container py-8 px-4 mx-auto sm:py-16 lg:px-6">
      <h2 className="mb-4 text-3xl md:text-4xl xl:tex-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        À propos de moi
      </h2>
      {/* Information */}
      <div className="mb-4 mt-0 md:mt-28 xl:mt-0 flex flex-col md:flex-row md:space-x-10 items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 p-4 flex justify-center md:justify-end order-1 md:order-1">
          <Image
            src="/images/about-me.png"
            width={1920}
            height={1080}
            alt="Ben"
            className="w-[350px] h-[350px] md:w-[300px] md:h-[300px] xl:w-[650px] xl:h-[650px] object-cover"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2 text-center md:text-left p-4 order-2 md:order-2">
          <p className="text-base md:text-lg xl:text-xl mb-8">
            <span className="font-bold italic">
              Développeur Full Stack avec 3 ans d'expérience
            </span>
            , spécialisé dans la création d'applications web et mobiles modernes
            et performantes. Ma passion pour le code et les technologies
            émergentes me pousse à toujours offrir des solutions adaptées et
            innovantes. Je maîtrise un large éventail de technologies, dont
            Laravel, Next.js, Spring Boot, et Flutter, ce qui me permet de
            prendre en charge des projets de bout en bout, du développement
            frontend au backend. Mon objectif est de transformer des idées en
            produits numériques intuitifs et fonctionnels, en accordant une
            attention particulière à la qualité du code, à l'expérience
            utilisateur, et à la sécurité.
          </p>
        </div>
      </div>

      {/* Recents Projects */}
    </section>
  );
};

export default AboutMe;
