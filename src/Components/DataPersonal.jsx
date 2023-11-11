import "../Scss/dataPersonal.scss";
import { FiDownload } from "react-icons/fi";

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
      data: "Argentina",
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
    {
      id: 7,
      label: "Skill:",
      data: "Javascript - React - HTML - CSS - NODEJS",
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
      <button className="btn-cv">downloand CV <FiDownload className="iconDownload"/></button>
    </>
  );
};

export default DataPersonal;
