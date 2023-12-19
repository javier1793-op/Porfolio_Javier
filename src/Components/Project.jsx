import "../Scss/project.scss";
import Cardproject from "./Cardproject";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

import Anime from "../Img/project/Anime.png";
import Serendipia from "../Img/project/serendipia.png";
import Things from "../Img/project/things.png";
import Weather from "../Img/project/weather.png";
import Bios from "../Img/project/bios.png";
import Fabrica from "../Img/project/fabrica.png";
import Ecommerce from "../Img/project/Ecommerce.png";
import Biosit from "../Img/project/biosit.png";
import Modal from "./Modal";

import { useState } from "react";

const Project = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const date = new Date();

  const ListProject = [
    {
      id: 100,
      urlImg: `${Anime}`,
      title: "Page Anime",
      description:
        "Explore a captivating anime platform featuring a user-friendly login system for advanced functionalities. Dive into information search for your favorite series and characters, utilize our efficient favorites system, and delve deeper with our powerful search engine powered by a specialized API.-- USER: koppo@gmail.com -- PASS: koppo",
      languaje: ["SCSS", "HTML", "REACT"],
      link: "https://javier1793-op.github.io/anime/",
      git: "https://github.com/javier1793-op/anime",
    },
    {
      id: 101,
      urlImg: `${Serendipia}`,
      title: "Page Diary Personal",
      description:
        "Immerse yourself in a personal page dedicated to journal posts, featuring a captivating video game-inspired design. Traverse a magical forest, complemented by an administrator login system. Experience seamless data management with a CRUD system, seamlessly integrated through a custom API built with Mongoose DB technology",
      languaje: ["SCSS", "HTML", "REACT", "NODEJS", "MONGOSE"],
      link: "https://javier1793-op.github.io/diaryPersonal/",
      git: "https://github.com/javier1793-op/diaryPersonal",
    },
    {
      id: 102,
      urlImg: `${Things}`,
      title: "Page Things",
      description:
        "Experience a streamlined activity reminder app, meticulously designed for listing and effortlessly managing tasks. Utilize an intuitive system for adding, removing, and modifying activities, making task management a breeze",
      languaje: ["SCSS", "HTML", "REACT"],
      link: "https://javier1793-op.github.io/things/",
      git: "https://github.com/javier1793-op/things",
    },
    {
      id: 103,
      urlImg: `${Weather}`,
      title: "Page Weather",
      description:
        "Explore the world's weather through my personalized weather app! I've crafted this tool with a touch of simplicity and elegance. Just type in your city, and let the magic unfold. Real-time weather updates, courtesy of a seamless API integration, all wrapped up in a design that's not only functional but also pleasing to the eye. Stay connected to the weather in style!",
      languaje: ["SCSS", "HTML", "REACT"],
      link: "https://javier1793-op.github.io/weather/",
      git: "https://github.com/javier1793-op/weather",
    },
    {
      id: 104,
      urlImg: `${Bios}`,
      title: "Page Bios Informática",
      description:
        "Pagina del ventas online y servicios tecnicosWelcome to our local tech haven! Dive into our customized online store featuring a curated selection of personalized computer products. Explore cutting-edge technology tailored just for you, all while supporting our local business. Discover the perfect tech solutions with a touch of personalization!",
      languaje: ["WORDPRESS"],
      link: "https://biosonline.com.ar/",
      git: "",
    },
    {
      id: 105,
      urlImg: `${Fabrica}`,
      title: "Page Fábrica Cultural",
      description:
        "Step into the heart of our foundation's journey with our event-centric page. Engage in a captivating array of posts highlighting past events, all seamlessly managed through a secure login system. Immerse yourself in the visual journey through our image gallery and tune in to our exclusive radio module, all powered by the latest WordPress technology. ",
      languaje: ["WORDPRESS"],
      link: "https://biosonline.com.ar/",
      git: "",
    },
    {
      id: 106,
      urlImg: `${Biosit}`,
      title: "Bios IT virtual campus",
      description:
        "private virtual classroom, for rental of space and creation of courses and content for registered students",
      languaje: ["Moodle"],
      link: "https://www.bios-it.com.ar/aulabiosit/",
      git: "",
    },
    {
      id: 107,
      urlImg: `${Ecommerce}`,
      title: "Ecommerce Frontend",
      description: "shopping cart model, with added to cart and image gallery",
      languaje: ["SCSS", "HTML",'REACT','REDUX'],
      link: "https://javier1793-op.github.io/ecommerceFrontmentor/",
      git: "https://github.com/javier1793-op/ecommerceFrontmentor",
    },
  ];
  return (
    <>
      <div className="titleAbout">
        <h1>My projects</h1>
      </div>
      <div className="contentProject">
        {ListProject.map((item) => (
          <>
            <Cardproject
              key={item.id}
              imgUrl={item.urlImg}
              title={item.title}
              description={item.description}
              openModal={() => openModal(item)}
            />
          </>
        ))}
      </div>
      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="titleModal">{selectedProject.title}</h2>
          <section className="imgContentModal">
            <img
              src={selectedProject.urlImg}
              alt="imgModal"
              className="imgModal"
            />
          </section>

          <p className="pModal">{selectedProject.description}</p>
          <h3 className="h3Modal">Language</h3>

          <section className="language">
            {selectedProject.languaje.map((lang) => (
              <span className="languageModal" key={date}>
                {lang}
              </span>
            ))}
          </section>

          <section className="btnModal">
            <a
              href={selectedProject.link}
              className="btnModalLink"
              target="_bank"
            >
              Page <AiFillChrome className="iconLink" />
            </a>
            {selectedProject.git === "" ? (
              ""
            ) : (
              <a
                href={selectedProject.git}
                className="btnModalLink"
                target="_bank"
              >
                GitHub <AiFillGithub className="iconLink" />
              </a>
            )}
          </section>
        </Modal>
      )}
    </>
  );
};

export default Project;
