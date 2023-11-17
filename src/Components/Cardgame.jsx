import "../Scss/cardGame.scss";

const Cardgame = ({
  activo,
  titleGame,
  descriptionGame,
  linkPage,
  linkGit,
  imgGame,
}) => {
  return (
    <>
      <div className={`contentCardgame ${activo ? "active" : ""}`}>
        <section className="cardGameinfo">
          <img src={imgGame} alt="img-miniatura" className="ImgCardgame" />
          <section className="descriptionGame">
            <h3>{titleGame}</h3>
            <p className="pGame">{descriptionGame}</p>
          </section>
        </section>

        <section className="btnCardgame">
          <a href={linkGit} className="btnModalLink" target="_blank" rel="noreferrer">
            git
          </a>
          <a href={linkPage} className="btnModalLink" target="_blank" rel="noreferrer">
            play{" "}
          </a>
        </section>
      </div>
    </>
  );
};

export default Cardgame;
