import useDatabase from "../helpers/useDatabase";
import { useContext } from "react";
import { GlobalContext } from "../state/reducers/GlobalStateProvider";

import { CREATE_NEW_GAME } from "../state/reducers/globalReducer";

const CreateGameForm = () => {
  const { createGameHandler } = useDatabase()
  const [state, dispatch] = useContext(GlobalContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({type: CREATE_NEW_GAME, name, value})
  }

  return (
    <>
    <form onSubmit={(event) => {
      event.preventDefault();
      createGameHandler();
    }}>
      <label>Team & Season:
        <input type={'text'} name='season' value={state.gameState.season} onChange={handleChange} />
      </label>
      <label>Week:
        <input type={'number'} name='week' value={state.gameState.week} onChange={handleChange} />
      </label>
      <label>Game:
        <input type={'number'} name='game' value={state.gameState.game} onChange={handleChange} />
      </label>
      <label>Opponent:
        <input type={'text'} name='opponent' value={state.gameState.opponent} onChange={handleChange} />
      </label>
      <button type="submit">Add Game</button>
    </form>
    </>
  )
}

export default CreateGameForm;