import { useLocation } from "react-router-dom";

const Player = () => {
  const { state } = useLocation();
  const { player } = state || {};

  console.log(state);

  return (
    <div>
      {player.first_name}
      {player.last_name}
    </div>
  );
};

export default Player;
