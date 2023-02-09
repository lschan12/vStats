import { useContext } from "react";
import { GlobalContext } from "../reducers/GlobalStateProvider";

import {
  GET_PLAYERS,
} from "../reducers/globalReducer";

const usePlayersState = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const getPlayersState = (players) => {
    dispatch({type: GET_PLAYERS, players})
  }
  return {
    getPlayersState
  }
}

export default usePlayersState;