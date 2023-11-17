import "./App.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Game from "./Components/Game";
import Home from "./Components/Home";
import Level from "./Components/Level";

import Logo from "./Components/Logo";
import Nav from "./Components/Nav";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <main className="main-black">
        <section className="logo">
          <Logo />
        </section>
        <header>
          <Nav />
        </header>
        <section className="home" id="home">
          <Home />
        </section>
        <section className="about" id="about">
          <About />
        </section>
        <section className="project" id="project">
          <Project/>
        </section>
        <section className="games" id="games">
          <Game/>
        </section>
        <section className="contact" id="contact">
          <Contact/>
        </section>
        <section className="levelup">
          <Level />
        </section>
      </main>
    </>
  );
}

export default App;
