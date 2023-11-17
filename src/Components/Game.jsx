import { useState } from "react";
import "../Scss/game.scss";
import Cardgame from "./Cardgame";
import Dice from "../Img/dados.png";
import Tic from '../Img/wow.png'
import Mine from '../Img/minecraft.png'

const Game = () => {
  const [activo, setActivo] = useState(false);

  const dataGame = [
    {
      id: 300,
      titleGame: "Fate Rollers",
      descriptionGame:
        "Each roll reveals secrets about your destiny. ",
      linkGit: "https://github.com/javier1793-op/Dices",
      linkPage: "https://javier1793-op.github.io/Dices/",
      imgGame: `${Dice}`,
    },
    {
      id: 301,
      titleGame: "Warcraft Rivals: Battle of Ta'Tac",
      descriptionGame:
        "Immerse yourself in the epic battle of Ta'Tac in Warcraft Rivals ",
      linkGit: "https://github.com/javier1793-op/Tictactoe",
      linkPage: "https://javier1793-op.github.io/Tictactoe/",
      imgGame: `${Tic}`,
    },
    {
      id: 302,
      titleGame: "BlockCraft: Cube Challenge",
      descriptionGame:
        "Embark on a building and strategy adventure with BlockCraft ",
      linkGit: "https://github.com/javier1793-op/minecraft-clone",
      linkPage: "https://javier1793-op.github.io/minecraft-clone/",
      imgGame: `${Mine}`,
    },
  ];
  return (
    <>
      <div className="contentGame">
        <section className="play">
          <h1 className="titleGame">Game</h1>
          <button
            className="btn-game"
            onClick={() => {
              setActivo(true);
            }}
          >
            PLAY
          </button>
        </section>
        <section className="cardGame">
          {dataGame.map((item) => (
            <Cardgame
              key={item.id}
              activo={activo}
              titleGame={item.titleGame}
              descriptionGame={item.descriptionGame}
              linkGit={item.linkGit}
              linkPage={item.linkPage}
              imgGame={item.imgGame}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Game;
