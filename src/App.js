import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: blue;
`;

const Box = styled.div`
  background: green;
  height: 30vh;
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
`;

const Button = styled.button``;

function App() {
  return (
    <AppContainer>
      <div>Random Game</div>
      <div>Guessing Game</div>
      <Box>?</Box>
      <Flex>
        <p>Your guess </p>
        <input type='number' min='0' max='100' />
      </Flex>
      <Button>Submit</Button>
    </AppContainer>
  );
}

export default App;
