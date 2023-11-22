import '../Scss/alert.scss'

const Alert = ({textError,typeError}) => {
  return (
    <>
       <div className={`contentAlert ${typeError} `}>
        <p>{textError}</p>
       </div>
    </>
  )
}

export default Alert