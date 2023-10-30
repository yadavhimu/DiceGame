import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import {useState} from "react";
function App() {

  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setisGameStarted((prev)=> !prev);
  };
  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay} />}
    </>
  )
}


export default App;
