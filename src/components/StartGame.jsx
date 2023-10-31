import styled from "styled-components"

import { Button } from "../styled/Button"

const StartGame = ({ toggle }) => {
  return (
    <Container> 
      <div ><img src='https://images.unsplash.com/photo-1568743966689-d37c04538535?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img></div>
      <div className="content">
        <h1>
          Dice Game
        </h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  display:flex;
  height:100vh;
  margin:0 auto;
  align-items: center;
  
  img {
    height:400px;
    margin-right: 10px;
  }
  
   
   .content {
    h1{
      font-size:96px;
      white-space: nowrap;
    }
   }
`;

