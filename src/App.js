import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
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
  margin: 2rem auto;
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
  margin: 1rem auto;
  justify-content: space-around;
`;

const Button = styled.button`
  display: block;
  width: 80%;
  height: 3rem;
  margin: auto auto;
`;

function App({min, max}) {
  const handleSubmit = (evt) => {
    const guess = document.getElementById('guess').value;
    // TODO: update min or max;
  };
  return (
    <AppContainer>
      <Header>Random Game</Header>
      <Header>Guessing Game</Header>
      <Box>
        <BoxContent>?</BoxContent>
      </Box>
      <Flex>Current Range:</Flex>
      <Flex>
        <p>Your guess </p>
        <input type='number' min='0' max='100' id='guess' />
      </Flex>
      <Button onClick={handleSubmit}>Submit</Button>
    </AppContainer>
  );
}

const mapStateToProps = (state) => ({
  min: state.guessingGame.min,
  max: state.guessingGame.min,
});

export default connect(mapStateToProps)(App);
