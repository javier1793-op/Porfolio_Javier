import "./App.scss";
import Logo from "./Components/Logo";

function App() {
  return (
    <>
      <main className="main-black">
        <section className="logo">
          <Logo />
        </section>
        <header>
          <nav>
            <a href="#home">
              <span className="icon"></span>
              <span className="text">Home</span>
            </a>
            <a href="#about">
              <span className="icon"></span>
              <span className="text">About</span>
            </a>
            <a href="#project">
              <span className="icon"></span>
              <span className="text">Project</span>
            </a>
            <a href="#games">
              <span className="icon"></span>
              <span className="text">Games</span>
            </a>
            <a href="#contact">
              <span className="icon"></span>
              <span className="text">Contact</span>
            </a>
          </nav>
        </header>
        <section className="home" id="home">Home</section>
        <section className="about" id="about">About</section>
        <section className="project" id="project">Project</section>
        <section className="games" id="games">Games</section>
        <section className="contact"id="contact">Contact</section>
      </main>
    </>
  );
}

export default App;
