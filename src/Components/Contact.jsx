import { useState } from 'react'
import '../Scss/contact.scss'
import Alert from './Alert'
import Formcontact from './Formcontact'
import Infocontact from './Infocontact'

const Contact = () => {
  const [error, setError] = useState(
    {
      textError:'',
      typeError:''
    }
  )
  return (
    <>
        <div className="contentContact">
          <Alert
            textError={error.textError}
            typeError={error.typeError}
          />
            <section className="formContact">
               <Formcontact
               setError={setError}
               />
            </section>
            <section className="infoContact">
                <Infocontact/>
            </section>
        </div>
    </>
  )
}

export default Contact