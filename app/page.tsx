import AboutMe from "@/components/utils/AboutMe";
import Hero from "@/components/utils/Hero";
import Service from "@/components/utils/Service";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <Hero />
        <AboutMe />
        <Service />
      </main>
    </>
  );
}
