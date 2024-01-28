import React from "react";
import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <div className="rules">
        <h2>How to play dice game</h2>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </li>
          <li>If you get wrong guess then 2 point will be dedcuted </li>
        </ul>
      </div>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  .rules {
    display: flex;
    flex-direction: column;
    background-color: #f3e2e2;
    max-width: 794px;
    max-height: 90px;
    top: 776px;
    left: 338px;
    padding: 20px;
    gap: 4px;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 5px;
  }

  ul {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
