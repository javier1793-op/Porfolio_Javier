import '../Scss/contact.scss'
import Formcontact from './Formcontact'

const Contact = () => {
  return (
    <>
        <div className="contentContact">
            <section className="formContact">
               <Formcontact/>
            </section>
            <section className="infoContact">
                information
            </section>
        </div>
    </>
  )
}

export default Contact