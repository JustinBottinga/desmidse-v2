import Hero from "@/components/Hero";
import Sections from "@/components/Sections";
import about from "@/content/pages/about.json";

export default function About() {
  return (
    <>
      <Hero
        image={about.hero.afbeelding}
        title={about.hero.titel}
        subtitle={about.hero.subtitel}
        paragraph={about.hero.intro}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Sections secties={about.secties} />
      </div>
    </>
  );
}
