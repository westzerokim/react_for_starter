import styled from "styled-components";
const Father = styled.div`
  display: flex;
  background-color: "red";
  width: 400;
  height: 500;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.h1`
  color: white;
`;

const Circle = styled(Box)`
  background-color: ${(props) => props.bgColor};
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="pink">
        <Text>
          hello. Today is not good but everythings, everywhere all at once
        </Text>
      </Box>
      <Box bgColor="tomato" />
      <Box bgColor="blue" />
      <Box bgColor="purple" />
      <Box bgColor="green" />
      <Circle bgColor="whitesmoke" />
    </Father>
  );
}

export default App;
