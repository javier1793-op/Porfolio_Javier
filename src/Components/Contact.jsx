import { useState } from 'react'
import '../Scss/contact.scss'
import Alert from './Alert'
import Formcontact from './Formcontact'
import Infocontact from './Infocontact'

const Contact = () => {
  const [error, setError] = useState(
    {
      textError:'',
      typeError:'',
      active:''
    }
  )
  return (
    <>
        <div className="contentContact">
          <Alert 
            textError={error.textError}
            typeError={error.typeError}
            active={error.active}
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