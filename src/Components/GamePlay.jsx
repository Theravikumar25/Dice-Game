import {useState}  from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button } from "./style/Button";
import Rules from "./Rules";

function GamePlay() {
  const [score,setScore]=useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false)
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min);
  };

    const roleDice=()=>{
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=> randomNumber);
        if(!selectedNumber)
        {
          setError("You have not selected any number")
          return;
        }

        if(selectedNumber===randomNumber){
          setScore((prev)=>prev+randomNumber);
        }else{
          setScore((prev)=>prev-2);
        }

        setSelectedNumber(undefined);
    };

    function reset(){
      setScore(0);
    }
  return (
    <>
      <MainContainer >
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
        </div>
        <RollDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btns">
          <Button onClick={reset}>Reset Score</Button>
          <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
        </div>
        {showRules && <Rules/>} 
        {/* showRules is truthy (evaluates to true), then <Rules/> will be rendered. */}
      </MainContainer >
    </>
  );
}

export default GamePlay;

const MainContainer = styled.main`
    width: 1280px;
    margin: 0 auto;
    margin-top: 20px;
    .top_section{
    display: flex;
    justify-content: space-between;
    }
    
    .btns{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
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

`;
