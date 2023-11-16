import "../Scss/project.scss";
import Cardproject from "./Cardproject";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

import Anime from "../Img/project/Anime.png";
import Serendipia from "../Img/project/serendipia.png";
import Things from "../Img/project/things.png";
import Weather from "../Img/project/weather.png";
import Bios from "../Img/project/bios.png";
import Fabrica from "../Img/project/fabrica.png";
import Homepage from "../Img/project/homepage.png";
import Summary from "../Img/project/summary.png";
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
        "Explore a captivating anime platform featuring a user-friendly login system for advanced functionalities. Dive into information search for your favorite series and characters, utilize our efficient favorites system, and delve deeper with our powerful search engine powered by a specialized API.",
      languaje: ["SCSS", "HTML", "REACT"],
    },
    {
      id: 101,
      urlImg: `${Serendipia}`,
      title: "Page Diary Personal",
      description:
        "Immerse yourself in a personal page dedicated to journal posts, featuring a captivating video game-inspired design. Traverse a magical forest, complemented by an administrator login system. Experience seamless data management with a CRUD system, seamlessly integrated through a custom API built with Mongoose DB technology",
      languaje: ["SCSS", "HTML", "REACT", "NODEJS", "MONGOSE"],
    },
    {
      id: 102,
      urlImg: `${Things}`,
      title: "Page Things",
      description:
        "Experience a streamlined activity reminder app, meticulously designed for listing and effortlessly managing tasks. Utilize an intuitive system for adding, removing, and modifying activities, making task management a breeze",
      languaje: ["SCSS", "HTML", "REACT"],
    },
    {
      id: 103,
      urlImg: `${Weather}`,
      title: "Page Weather",
      description: "Explore the world's weather through my personalized weather app! I've crafted this tool with a touch of simplicity and elegance. Just type in your city, and let the magic unfold. Real-time weather updates, courtesy of a seamless API integration, all wrapped up in a design that's not only functional but also pleasing to the eye. Stay connected to the weather in style!",
      languaje: ["SCSS", "HTML", "REACT"],
    },
    {
      id: 104,
      urlImg: `${Bios}`,
      title: "Page Bios Informática",
      description: "Pagina del ventas online y servicios tecnicosWelcome to our local tech haven! Dive into our customized online store featuring a curated selection of personalized computer products. Explore cutting-edge technology tailored just for you, all while supporting our local business. Discover the perfect tech solutions with a touch of personalization!",
      languaje: ["WORDPRESS"],
    },
    {
      id: 105,
      urlImg: `${Fabrica}`,
      title: "Page Fábrica Cultural",
      description: "Step into the heart of our foundation's journey with our event-centric page. Engage in a captivating array of posts highlighting past events, all seamlessly managed through a secure login system. Immerse yourself in the visual journey through our image gallery and tune in to our exclusive radio module, all powered by the latest WordPress technology. ",
      languaje: ["WORDPRESS"],
    },
    {
      id: 106,
      urlImg: `${Homepage}`,
      title: "Challenger Frontend",
      description: "grid structure page",
      languaje: ["SCSS", "HTML"],
    },
    {
      id: 107,
      urlImg: `${Summary}`,
      title: "Challenger Frontend",
      description: "CSS design page about mathematics calculation",
      languaje: ["SCSS", "HTML"],
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
            <button className="btnModalLink">
              Page <AiFillChrome className="iconLink" />
            </button>
            <button className="btnModalLink">
              GitHub <AiFillGithub className="iconLink" />
            </button>
          </section>
        </Modal>
      )}
    </>
  );
};

export default Project;
