import '../Scss/phoneUser.scss'
import Phone from '../Img/phone.jpg'

const PhoneUser = () => {
  return (
    <>
       <div className="contentPhoneUser">
                <div className="headPhone">
                    <div className="logoUser">
                        <img src="" alt="user" />
                    </div>
                    <p>Koppo</p>
                </div>
                <img src={Phone} alt="foto" />
                <div className="footerPhone">
                    pie
                </div>
       </div>
    </>
  )
}

export default PhoneUser