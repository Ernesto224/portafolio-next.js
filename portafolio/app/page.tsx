import Home from "./home/page";
import Projects from "./proyects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function LandingPage() {

  return (
    <>
      <section id="home" className="min-h-screen">
        <Home></Home>
      </section>
      <section id="proyects">
        <Projects></Projects>
      </section>
      <section id="skills" className="min-h-screen">
        <Skills></Skills>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </>
  );

}