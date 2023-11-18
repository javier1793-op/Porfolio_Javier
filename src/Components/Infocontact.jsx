import '../Scss/Infocontact.scss'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";

const Infocontact = () => {
  return (
    <>
        <div className="contentinfoContact">
            <section className="iconinfoContact">
            <MdOutlinePhoneIphone className='iconinfoContac' />
            </section>
            <section className="detalleinfoContact">
                <h4>Phone</h4>
                <p>+54 3704264610</p>
            </section>
        </div>
        <div className="contentinfoContact">
            <section className="iconinfoContact">
            <MdOutgoingMail className='iconinfoContac' />
            </section>
            <section className="detalleinfoContact">
                <h4>Email</h4>
                <p>javier17utn@gmail.com</p>
            </section>
        </div>
    </>
  )
}

export default Infocontact