import { Link } from "react-router-dom";
import useDatabase from "../helpers/useDatabase";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../state/reducers/GlobalStateProvider";

const Players = () => {
  const { getPlayers } = useDatabase()
  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    getPlayers()
  }, []);

  return (
    <div>
      <h1>Players</h1>
      <div>
        {state.playersState ? state.playersState.map((player) => {
          return (
            <>
              <div>{player.first_name}</div>
              <div>{player.last_name}</div>
              <div>{player.age}</div>
              <Link 
                to={`/player/${player.id}`}
                state={{player}}
                >View Player</Link>
            </>
          );
        }) : <></>}
      </div>
      <Link to={`/create_player`}>Create Player</Link>
    </div>
  );
};

export default Players;
