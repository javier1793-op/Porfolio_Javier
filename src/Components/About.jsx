import "../Scss/about.scss";
import DataPersonal from "./DataPersonal";

const About = () => {
 
  return (
    <>
      <div className="contentAbout">
        <div className="titleAbout">
          <h1>Who I am</h1>
        </div>
        <div className="descriptionAbout">
          <p>
            I&apos;m a passionate frontend web developer with a focus on creating
            engaging and functional user experiences. My journey in the world of
            programming began with curiosity and a desire to learn. Throughout
            my learning process, I&apos;ve acquired skills in HTML, CSS, and
            JavaScript, and I&apos;ve applied this knowledge to personal projects
            ranging from interactive websites to simple web applications.
          </p>
          <p>
            <br />
            What motivates me the most is the opportunity to translate ideas
            into accessible and efficient technological solutions. I&apos;m committed
            to continuous learning and always seek opportunities to improve my
            technical skills and explore the latest trends in web development.
          </p>
          <br />
          <p>
            My goal is to continue growing as a frontend web developer and
            contribute to innovative projects in this field. I&apos;m excited about
            the opportunities that web development offers and am ready to take
            on new challenges in this exciting journey.
          </p>
        </div>
        <div className="infoAbout">
          <DataPersonal />
        </div>
      </div>
    </>
  );
};

export default About;
