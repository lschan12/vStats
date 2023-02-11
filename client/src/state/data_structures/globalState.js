import { playerState } from "./playerState";
import { gameState } from "./gameState"
import { performanceState } from "./performanceState";

export const initialGlobalState = {
  playerState: playerState,
  playersState: [],
  gameState: gameState,
  gamesState: [],
  performanceState: performanceState,
  selectedGameState: {},
  selectedPerformancesState: {}
}