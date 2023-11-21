import "../Scss/formContact.scss";
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { LuSend } from "react-icons/lu";
import { FaWhatsapp,FaMailBulk } from "react-icons/fa";

const Formcontact = () => {

  const [valid, setValid] = useState(true)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    validate();
    if(valid){
       emailjs.sendForm('service_ht2egk6', 'Contact_Form', form.current, 'd1coGa8C7PSe-s7fy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
   
  };

  const  validate =()=>{
    const name=form.current.user_name.value;
    const email=form.current.user_email.value;
    const message= form.current.message.value;

    const mailregex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (name === "") {
      setValid(false)
      console.log('no completaste el campo name')
      return ;
    }

    if (!mailregex.test(email) || email === '') {
      setValid(false)
      console.log('el campo email es incorrecto')
      return;
    }

    if (message === "") {
      setValid(false)
      console.log('no completaste el campo message')
      return; 
    }


  }


  return (
    <div className="contentForm">
      <h1 className="titleContact">Contact Me</h1>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="name" name="user_name"/>
        <input type="text" placeholder="mail" name="user_email"/>
        <textarea
          name="message"
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
