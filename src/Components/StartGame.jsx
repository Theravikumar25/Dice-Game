import React from "react";
import styled from 'styled-components'
function StartGame({toggle}) {
  return <>
  <Container>
    <div className="pic">
        <img src="./img/dices.png" alt="" srcset="" />
    </div>
    <div className="content">
        <h1>DICE GAME</h1>
        <button
            onClick={toggle}
        >Play Now</button>
    </div>
  </Container>
  
  </>;
}

export default StartGame;

const Container=styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content:center;

    .content{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-end;
        
        
        h1{
            font-size: 96px;
            font-weight: 700;
        }

        button{
            color: white;
            background-color: black;
            padding: 10px, 18px, 10px, 18px;
            border: 1px solid black;
            border-radius: 5px;
            width: 220px;
            height: 44px;
            font-size: 16px;
            font-weight: 600;
            transition: 0ms.4s background ease-out;

            &:hover{
                color: black;
                background-color:white;
                cursor: pointer;
                transition: 0ms.3s background ease-in;
            }
        }
    }
`
