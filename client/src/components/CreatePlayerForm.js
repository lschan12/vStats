import useDatabase from "../helpers/useDatabase";
import { useContext } from "react";
import { GlobalContext } from "../state/reducers/GlobalStateProvider";

import { CREATE_NEW_PLAYER } from "../state/reducers/globalReducer";

const CreatePlayerForm = () => {
  const { createPlayerHandler } = useDatabase()
  const [state, dispatch] = useContext(GlobalContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({type: CREATE_NEW_PLAYER, name, value})
  }

  return (
    <>
    <form onSubmit={(event) => {
      event.preventDefault();
      createPlayerHandler();
    }}>
      <label>First Name:
        <input type={'text'} name='firstName' value={state.playerState.firstName} onChange={handleChange} />
      </label>
      <label>Last Name:
        <input type={'text'} name='lastName' value={state.playerState.lastName} onChange={handleChange} />
      </label>
      <label>Age:
        <input type={'number'} name='age' value={state.playerState.age} onChange={handleChange} />
      </label>
      <button type="submit">Add Player</button>
    </form>
    </>
  )
}

export default CreatePlayerForm;