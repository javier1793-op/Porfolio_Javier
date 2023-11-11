import '../Scss/cardProject.scss'
import PropTypes from 'prop-types';

const Cardproject = ({imgUrl,title,description}) => {
  
    
    const estiloComponente = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
      };

  return (
    <>
      <div className="card" style={estiloComponente}>
        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          <p className="card__text">
           {`${description.slice(0,50)} ...`}
          </p>
          <a href="#" className="btn">
            See More
          </a>
        </div>
      </div>
    </>
  );
};
Cardproject.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
export default Cardproject;
