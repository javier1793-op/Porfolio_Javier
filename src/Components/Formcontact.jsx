import "../Scss/formContact.scss";
import { LuSend } from "react-icons/lu";
import { FaWhatsapp,FaMailBulk } from "react-icons/fa";

const Formcontact = () => {
  return (
    <div className="contentForm">
      <h1 className="titleContact">Contact Me</h1>
      <form className="form">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="mail" />
        <textarea
          name="descriptionForm"
          id=""
          cols="30"
          rows="3"
          placeholder="message"
        ></textarea>
        <button className="btnContact">
          Send
          <LuSend className="iconContact" />
        </button>
      </form>
      <section className="separator">
        <hr className="separatorContact" />
        <span>OR</span>
        <hr className="separatorContact" />
      </section>
      <section className="altContact">
        <a href="" className="alt">
            <FaWhatsapp/>
            <p>contact me with whatsapp</p>
        </a>
        <a href="" className="alt">
            <FaMailBulk/>
            <p>contact me with Oultlook</p>
        </a>
      </section>
    </div>
  );
};

export default Formcontact;
