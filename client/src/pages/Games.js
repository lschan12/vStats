import { Link } from "react-router-dom";
import useDatabase from "../helpers/useDatabase";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../state/reducers/GlobalStateProvider";

const Games = () => {
  const { getGames } = useDatabase()
  const [state, dispatch] = useContext(GlobalContext)

  useEffect(() => {
    getGames()
  }, []);

  return (
    <div>
      <h1>Games</h1>
      <div>
        {state.gamesState ? state.gamesState.map((game) => {
          return (
            <div>
              {game.season}
              {game.week}
              {game.game}
              {game.opponents}
              {/* {game.players.map((player) => (
                <div>{player}</div>
              ))} */}
              <Link to={`/game/${game.id}`} state={{game}}>
                View Game
              </Link>
            </div>
          );
        }) : <></>}
      </div>
      <Link to={`/create_game`}>Add Game</Link>
    </div>
  );
};

export default Games;
