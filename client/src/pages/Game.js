import { useLocation, useParams } from "react-router-dom";

const Game = () => {
  const { state } = useLocation();
  const { game } = state || {};

  return (
    <>
      <div>{game.season}</div>
      <div>Week {game.week}</div>
      <div>Game {game.game}</div>
      {/* {game.players.map((player) => (
        <div>{player}</div>
      ))} */}
    </>
  );
};

export default Game;
