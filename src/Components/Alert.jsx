import '../Scss/alert.scss'

const Alert = ({textError,typeError,active}) => {
  return (
    <>
       <div className={`contentAlert ${typeError} ${active} `}>
        <p>{textError}</p>
       </div>
    </>
  )
}

export default Alert