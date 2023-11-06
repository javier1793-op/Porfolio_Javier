
import "./App.scss";
import About from "./Components/About";
import Home from "./Components/Home";

import Logo from "./Components/Logo";
import Nav from "./Components/Nav";



function App() {

  
  
  return (
    <>
      <main className="main-black">
        <section className="logo">
          <Logo />
        </section>
        <header>
          <Nav/>
        </header>
        <section className="home" id="home">
          <Home/>
        </section>
        <section className="about" id="about">
          <About/>
          </section>
        <section className="project" id="project">Project</section>
        <section className="games" id="games">Games</section>
        <section className="contact"id="contact">Contact</section>
      </main>
    </>
  );
}

export default App;
