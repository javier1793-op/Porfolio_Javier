import Marco from "../Img/marco.png";
import '../Scss/frame.scss'

const Frame = () => {
  return (
    <>
      <div className="marcoPhone">
        <img src={Marco} alt="marco" className="User" />
        <section className="descriptionUser">
           phone
        </section>
      </div>
    </>
  );
};

export default Frame;
