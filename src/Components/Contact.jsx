import '../Scss/contact.scss'
import Formcontact from './Formcontact'
import Infocontact from './Infocontact'

const Contact = () => {
  return (
    <>
        <div className="contentContact">
            <section className="formContact">
               <Formcontact/>
            </section>
            <section className="infoContact">
                <Infocontact/>
            </section>
        </div>
    </>
  )
}

export default Contact