import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Players from "./pages/Players";
import Games from "./pages/Games";
import Player from "./pages/Player";
import Game from "./pages/Game";
import CreatePlayer from "./pages/CreatePlayer";
import CreateGame from "./pages/CreateGame";
import GlobalProvider from "./state/reducers/GlobalStateProvider";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="track" element={<Track />} />
            <Route path="players" element={<Players />} />
            <Route path="games" element={<Games />} />
            <Route path="player/:id" element={<Player />} />
            <Route path="game/:id" element={<Game />} />
            <Route path="create_player" element={<CreatePlayer />} />
            <Route path="create_game" element={<CreateGame />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
