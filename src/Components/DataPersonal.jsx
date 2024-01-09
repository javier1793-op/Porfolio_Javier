import "../Scss/dataPersonal.scss";
import { FiDownload } from "react-icons/fi";
import Skill from "./Skill";
import CV from '../file/CV.pdf'

const DataPersonal = () => {

  const Data = [
    {
      id: 1,
      label: "Name:",
      data: "Ruíz Díaz Javier A.",
    },
    {
      id: 2,
      label: "Email:",
      data: "javier17utn@gmail.com",
    },
    {
      id: 3,
      label: "Country:",
      data: "Argentina.",
    },
    {
      id: 4,
      label: "Phone:",
      data: "+54 3704264610",
    },
    {
      id: 5,
      label: "Qualification:",
      data: "system analyst",
    },
    {
      id: 6,
      label: "Studying:",
      data: "Systems Engineering - UTN",
    },
   
  ];

  return (
    <>
      {Data?.map((item) => (
        <div className="dataPersonal" key={item.id}>
          <span>{item.label}</span>
          <span>{item.data}</span>
        </div>
      ))}
      <div className="dataPersonal" >
          <span>Skill:</span>
          <span><Skill/></span>
        </div>
      <a href={CV} alt="fileCV" className="btn-cv" download >
        downloand CV <FiDownload className="iconDownload" />
      </a>
    </>
  );
};

export default DataPersonal;
