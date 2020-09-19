import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: blue;
  @media screen and (min-width: 376px) {
    width: 376px;
  }
`;

const Header = styled.div`
  font-size: 2rem;
  width: fit-content;
  margin: 0 auto;
  padding: 1rem 0;
`;

const Box = styled.div`
  background: green;
  width: 80%;
  margin: 0 auto;
  margin: 1rem auto;
  font-size: 8rem;
  position: relative;
  &:after {
    padding-bottom: 100%;
    content: '';
    display: block;
  }
`;

const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`;

const Button = styled.button`
  display: block;
  width: 80%;
  height: 3rem;
  margin: 1rem auto;
`;

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
