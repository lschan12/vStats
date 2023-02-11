import { Link } from "react-router-dom";
import useDatabase from "../helpers/useDatabase";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../state/reducers/GlobalStateProvider";
import { SELECT_GAME } from "../state/reducers/globalReducer";

const Track = () => {
  const { getGames } = useDatabase()
  const [state, dispatch] = useContext(GlobalContext)

  useEffect(() => {
    getGames()
  }, []);

  const handleChange = (e) => {
    const id = e.target.value;
    dispatch({type: SELECT_GAME, id})
  }

  return (
    <>
      <h1>Track</h1>
      <select name="selectedGame" onChange={handleChange}>
        {state.gamesState.map(game => <option value={game.id}>{game.season} Week {game.week} Game {game.game}</option>)}
      </select>
      <Link to={`/create_game`}>Add Game</Link>
    </>
  );
};

export default Track;
