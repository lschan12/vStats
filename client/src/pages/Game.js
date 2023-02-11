import { useEffect, useContext } from "react";
import useDatabase from "../helpers/useDatabase"
import { Link, useLocation, useParams } from "react-router-dom";
import { GlobalContext } from "../state/reducers/GlobalStateProvider";

const Game = (props) => {
  const [state, dispatch] = useContext(GlobalContext)
  const { id } = useParams();
  const { selectPerformanceHandler, getGame } = useDatabase();
  let location = useLocation();
  console.log('location', location)

  useEffect(() => {
    getGame(id);
    selectPerformanceHandler(id);
  },[])

  const game = state.selectedGameState[0];

  return (
    <>
      {state.selectedGameState.length > 0 ? 
      <>
      <div>{game.season}</div> 
      <div>Week {game.week}</div> 
      <div>Game {game.game}</div> 
      <div>Opponent: {game.opponent}</div> 
      </>
      : 
      <>
      <p>No Statistics Available.</p>
      <Link to={'/track'}>Track stats</Link>
      </>
      }
      {/* <div>Week {game.week}</div>
      <div>Game {game.game}</div> */}
      {/* {game.players.map((player) => (
        <div>{player}</div>
      ))} */}
    </>
  );
};

export default Game;
