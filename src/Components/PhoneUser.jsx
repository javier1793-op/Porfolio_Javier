import '../Scss/phoneUser.scss'
import Phone from '../Img/phone.jpg'
import Perfil from '../Img/perfil.jpeg'
import { FiSend,FiMoreVertical } from "react-icons/fi";
import {BsFillHeartFill } from "react-icons/bs";

const PhoneUser = () => {
  return (
    <>
       <div className="contentPhoneUser">
                <div className="headPhone">
                    <div className="logoUser">
                        <img src={Perfil} alt="user" className='perfilImg' />
                    </div>
                    <p>Koppo</p>
                </div>
                <img src={Perfil} alt="foto" />
                <div className="footerPhone">
                    <BsFillHeartFill className='heart'/>
                    <FiSend/>
                    <FiMoreVertical/>
                </div>
       </div>
    </>
  )
}

export default PhoneUser