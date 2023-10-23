import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react";
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber]=useState();
  const [currentDice, setCurrentDice] = useState(1);

  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore/>
      <NumberSelector
       selectedNumber={selectedNumber}
       setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice
      currentDice={currentDice}
      setCurrentDice={setCurrentDice}/>
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
padding-top:70px;
 .top_section{
  display: flex;
  justify-content: space-around;
  align-items: end;
 }

`;