import Navbar from "./components/Navbar/Navbar";
import Hreo from "./components/Hero/Hreo";
import Parallax from "./components/common/Parallax/Parallax";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/common/Cursor/Cursor";
import "./app.scss";

const App = () => {
  return (
    <>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hreo />
      </section>
      <section id="About me">
        <Parallax type="aboutMe" />
      </section>
      <section>
        <AboutMe />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
