import Contact from "./contact/page";
import Project from "./project/page";
import Skills from "./skills/page";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}
