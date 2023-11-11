import '../Scss/cardProject.scss'
import Anime from '../Img/project/Anime.png'

const Cardproject = () => {
    const imgUrl= Anime;

    const estiloComponente = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover', 
       
      };

  return (
    <>
      <div className="card" style={estiloComponente}>
        <div className="card__content">
          <h2 className="card__title">Anime Page</h2>
          <p className="card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            eligendi perferendis similique!
          </p>
          <a href="#" className="btn">
            See More
          </a>
        </div>
      </div>
    </>
  );
};

export default Cardproject;
