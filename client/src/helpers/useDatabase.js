import axios from "axios";
import { useContext } from "react";
import { GET_PLAYERS, GET_GAMES } from "../state/reducers/globalReducer";
import { GlobalContext } from "../state/reducers/GlobalStateProvider";
// import { usePlayersState } from "../state/hooks/usePlayersState"

const useDatabase = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const loadPlayers = data => dispatch({type: GET_PLAYERS, players: data})
  const loadGames = data => dispatch({type: GET_GAMES, games: data})

  const getPlayers = () => {
    console.log('get call to api...')
    return axios
      .get(`/api/players`)
      .then(res => {
        loadPlayers(res.data);
      });
  }

  const getGames = () => {
    console.log('get call to api...')
    return axios
      .get(`/api/games`)
      .then(res => {
        loadGames(res.data);
      })
  }

  const createPlayerHandler = (event) => {
    const formObject = state.playerState;
    axios
      .post(`/api/players`, formObject)
      .then(data => {
        console.log("Create Successful:", data);
        window.location = "/players";
      })
      .catch(err => console.log(err));
  };
  
  const createGameHandler = () => {
    const formObject = state.gameState;
    axios
      .post(`/api/games`, formObject)
      .then(data => {
        console.log("Create Successful:", data);
        window.location = "/games";
      })
      .catch(err => console.log(err));
  }

  return {
    createPlayerHandler,
    getPlayers,
    createGameHandler,
    getGames,
  }
};

export default useDatabase;
