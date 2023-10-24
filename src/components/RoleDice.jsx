import styled from "styled-components"

const RoleDice = ({roleDice, currentDice}) => {
  

 
   
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./images/dice_${currentDice}.png`} alt="Dice 1"></img>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    margin-top:48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .dice{
        cursor: pointer;
    }
    p {
      font-size:24px;
     }
`;