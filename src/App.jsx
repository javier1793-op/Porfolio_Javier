import { useState } from "react";
import "./App.scss";

import Logo from "./Components/Logo";

import { FiAirplay,FiCoffee,FiCodesandbox,FiDribbble,FiMail } from "react-icons/fi";

function App() {

  const [menu, setMenu] = useState('home')
  
  return (
    <>
      <main className="main-black">
        <section className="logo">
          <Logo />
        </section>
        <header>
          <nav>
            <a href="#home" 
            className={`${menu == 'home'?'active':''}`}
            onClick={()=>{setMenu('home')}}
            >
              <span className="icon"><FiAirplay/></span>
              <span className="text">Home</span>
            </a>
            <a href="#about" 
            className={`${menu == 'about'?'active':''}`}
            onClick={()=>{setMenu('about')}}
            >
              <span className="icon"><FiCoffee/></span>
              <span className="text">About</span>
            </a>
            <a href="#project" 
            className={`${menu == 'project'?'active':''}`}
            onClick={()=>{setMenu('project')}}
            >
              <span className="icon"><FiCodesandbox/></span>
              <span className="text">Project</span>
            </a>
            <a href="#games" 
            className={`${menu == 'games'?'active':''}`}
            onClick={()=>{setMenu('games')}}
            >
              <span className="icon"><FiDribbble/></span>
              <span className="text">Games</span>
            </a>
            <a href="#contact" 
            className={`${menu == 'contact'?'active':''}`}
            onClick={()=>{setMenu('contact')}}
            >
              <span className="icon"><FiMail/></span>
              <span className="text">Contact</span>
            </a>
            <div className="indicador"></div>
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
