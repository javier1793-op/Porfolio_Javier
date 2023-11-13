import "../Scss/project.scss";
import Cardproject from "./Cardproject";
import { AiFillGithub,AiFillChrome } from "react-icons/ai";

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
        "Pagina de busqueda de anime para busqueda y seguimiento de los mismo",
      languaje: ["SCSS", "HTML", "REACT"],
    },
    {
      id: 101,
      urlImg: `${Serendipia}`,
      title: "Page Diary Personal",
      description:
        "Pagina de diario personal videojuego para busqueda y seguimiento de los mismo",
      languaje: ["SCSS", "HTML", "REACT", "NODEJS", "MONGOSE"],
    },
    {
      id: 102,
      urlImg: `${Things}`,
      title: "Page Things",
      description:
        "Pagina de Notas Recordatorio para busqueda y seguimiento de los mismo",
        languaje: ["SCSS", "HTML", "REACT"],
    },
    {
      id: 103,
      urlImg: `${Weather}`,
      title: "Page Weather",
      description: "Pagina del Clima para busqueda y seguimiento de los mismo",
      languaje: ["SCSS", "HTML", "REACT"],
    },
    {
      id: 104,
      urlImg: `${Bios}`,
      title: "Page Bios Informática",
      description: "Pagina del ventas online y servicios tecnicos",
      languaje: ["WORDPRESS"],
    },
    {
      id: 105,
      urlImg: `${Fabrica}`,
      title: "Page Fábrica Cultural",
      description: "Pagina de eventos a nivel local sobre la fundación",
      languaje: ["WORDPRESS"],
    },
    {
      id: 106,
      urlImg: `${Homepage}`,
      title: "Challenger Frontend",
      description: "Pagina de estructura de grillas grid",
      languaje: ["SCSS", "HTML"],
    },
    {
      id: 107,
      urlImg: `${Summary}`,
      title: "Challenger Frontend",
      description: "Pagina de diseño css con calculo matematicos",
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
        Page <AiFillChrome className="iconLink"/>
      </button>
        <button className="btnModalLink">
        GitHub <AiFillGithub className="iconLink"/>
      </button>
        </section>
         
            
         
        </Modal>
      )}
    </>
  );
};

export default Project;
