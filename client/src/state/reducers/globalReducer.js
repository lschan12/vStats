// import { initialGlobalState } from "../data_structures/globalState";

const deepCopy = (data) => JSON.parse(JSON.stringify(data));

export const CREATE_NEW_PLAYER = 'CREATE_NEW_PLAYER';
export const GET_PLAYERS = 'GET_PLAYERS';
export const GET_GAMES = 'GET_GAMES';
export const CREATE_NEW_GAME = "CREATE_NEW_GAME";
export const SELECT_GAME = "SELECT_GAME";
export const SELECT_PERFORMANCE = 'SELECT_PERFORMANCE';

const globalReducer = (state, action) => {
  const reducers = {
    GET_PLAYERS: state => {
      const newState = deepCopy(state);
      let playersState = newState.playersState
      playersState = action.players;
      return {
        ...newState,
        playersState
      }
    },

    CREATE_NEW_PLAYER: state => {
      const newState = deepCopy(state);
      const playerState = newState.playerState;
      playerState[action.name] = action.value;
      return {
        ...newState,
        playerState
      };
    },

    GET_GAMES: state => {
      const newState = deepCopy(state);
      let gamesState = newState.gamesState;
      gamesState = action.games;
      return {
        ...newState,
        gamesState
      }
    },

    CREATE_NEW_GAME: state => {
      const newState = deepCopy(state);
      const gameState = newState.gameState;
      gameState[action.name] = action.value;
      return {
        ...newState,
        gameState
      }
    },
    
    SELECT_GAME: state => {
      const newState = deepCopy(state);
      let selectedGameState = newState.selectedGameState;
      selectedGameState = action.game;
      return {
        ...newState,
        selectedGameState
      }
    },

    SELECT_PERFORMANCE: state => {
      const newState = deepCopy(state);
      let selectedPerformancesState = newState.selectedPerformancesState;
      selectedPerformancesState = action.performance;
      return {
        ...newState,
        selectedPerformancesState
      }
    }

  };

  if (reducers[action.type]) return reducers[action.type](state);
  return reducers.default;
};

export default globalReducer;