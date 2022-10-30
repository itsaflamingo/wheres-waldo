import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import ChooseGame from './ChooseGame';
import SetGame from "./components/SetGame";

const RouteSwitch = () => {
    const [game, setGame] = useState({});

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" 
            element={<ChooseGame 
            game={game}
            setGame={setGame} />} />
        <Route path="/play" 
            element={<SetGame 
            game={game} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;