import "../Scss/social.scss";
import { FiGithub, FiLinkedin,FiBriefcase,FiAward } from "react-icons/fi";

const Social = () => {
  return (
    <>
      <span className="social">
        <section className="sectionIcon">
             <a
          href="https://github.com/javier1793-op"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="iconSocial" />
        </a>
            <p>Github</p> 
        </section>
        <section className="sectionIcon">
        <a
          href="https://www.linkedin.com/in/javier-alejandro-ruiz-diaz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="iconSocial" />
        </a>
        <p>Linkedin</p> 
        </section>
        <section className="sectionIcon">
        <a
          href="https://javier1793-op.github.io/CV/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <FiBriefcase className="iconSocial"/>
        </a>
        <p>CV</p> 
        </section>
        <section className="sectionIcon">
        <a
          href="https://www.frontendmentor.io/profile/javier1793-op"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiAward className="iconSocial"/>
        </a>
        <p>Frontend Mentor</p> 
        </section>
      </span>
    </>
  );
};

export default Social;
