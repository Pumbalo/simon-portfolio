import Navigation from "../components/navigation.js";
import Hero from "../components/hero.js";
import About from "../components/about.js";
import Skills from "../components/skills";
import Footer from "../components/footer.js";
import Projects from "../components/project.js";

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
