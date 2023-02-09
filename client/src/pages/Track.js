import { Link } from "react-router-dom";

const Track = () => {



  return (
    <>
      <h1>Track</h1>
      <select>
        {/* {games.map(game => <option>{game.season}</option>)} */}
      </select>
      <Link to={`/create_game`}>Add Game</Link>
    </>
  );
};

export default Track;
