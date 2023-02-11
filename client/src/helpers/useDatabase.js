import axios from "axios";
import { useContext } from "react";
import { GET_PLAYERS, GET_GAMES, SELECT_GAME, SELECT_PERFORMANCE } from "../state/reducers/globalReducer";
import { GlobalContext } from "../state/reducers/GlobalStateProvider";
// import { usePlayersState } from "../state/hooks/usePlayersState"

const useDatabase = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const loadPlayers = data => dispatch({type: GET_PLAYERS, players: data});
  const loadGames = data => dispatch({type: GET_GAMES, games: data});
  const selectGame = data => dispatch({type: SELECT_GAME, game: data});
  const selectPerformance = data => dispatch({type: SELECT_PERFORMANCE, performance: data})

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
        console.log("DATA!!!", res.data)
      })
  }

  const getGame = (id) => {
    return axios
      .get(`/api/games/${id}`)
      .then(res => {
        selectGame(res.data)
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

  const selectPerformanceHandler = (id) => {
    axios
      .get(`/api/performances/${id}`)
      .then(res => {
        console.log('select performance handler data', res.data);
        selectGame(res.data)
      })
  }

  return {
    createPlayerHandler,
    getPlayers,
    createGameHandler,
    getGames,
    getGame,
    selectPerformanceHandler
  }
};

export default useDatabase;
