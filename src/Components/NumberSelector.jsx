import styled from "styled-components";
function NumberSelector( {selectedNumber, setSelectedNumber,error,setError}) {
  const boxNum = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumber);

  function set(value){
    setError("");
    setSelectedNumber(value)
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {boxNum.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => set(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }

  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
