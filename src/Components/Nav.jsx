import { useEffect, useState } from "react";
import { FiAirplay,FiCoffee,FiCodesandbox,FiDribbble,FiMail } from "react-icons/fi";

const Nav = () => {

    const [menu, setMenu] = useState('home')

    useEffect(() => {
      const handleScroll = () => {

        const scrollY = window.scrollY ;

        const homePos = document.getElementById('home').offsetTop;
        const aboutPos = document.getElementById('about').offsetTop;
        const projectPos = document.getElementById('project').offsetTop;
        const gamesPos = document.getElementById('games').offsetTop;
        const contactPos = document.getElementById('contact').offsetTop;
  
   
        if (scrollY < aboutPos) {
          setMenu('home');
        } else if (scrollY < projectPos) {
          setMenu('about');
        } else if (scrollY < gamesPos) {
          setMenu('project');
        } else if (scrollY < contactPos) {
          setMenu('games');
        } else {
          setMenu('contact');
        }
      };
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <>
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
    </>
  )
}

export default Nav