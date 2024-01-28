import React from "react";
import styled from "styled-components";

const RollDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/img/dice_${currentDice}.png`} alt="Dice Image" />
      </div>
      <p>Click on Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
  }

  .dice {
    cursor: pointer;
  }
`;
