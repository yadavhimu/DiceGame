

import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p> 
         <p>if you get wrong guess then  2 point will be dedcuted</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin:0 auto;
    background-color:gray;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 18px;
    }

    .text{
        margin-top:12px;
        font-size: 12px;
    }

`
