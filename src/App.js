import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {updateMin, updateMax} from './actions';
import {getGuessingResult, getGuessingMin, getGuessingMax} from './selectors';

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

function App({result, min, max, updateMin, updateMax}) {
  const handleSubmit = (evt) => {
    const guess = document.getElementById('guess').value;
    if (guess > max || guess < min) {
      alert('Input is outside of current range!');
    } else if (guess == result) {
      alert('You won!');
    } else {
      guess > result ? updateMax(guess) : updateMin(guess);
    }
  };
  return (
    <AppContainer>
      <Header>Random Game</Header>
      <Header>Guessing Game</Header>
      <Box>
        <BoxContent>?</BoxContent>
      </Box>
      <Flex>Current Range: {`${min} < ? < ${max}`}</Flex>
      <Flex>
        <p>Your guess </p>
        <input type='number' min={min} max={max} id='guess' />
      </Flex>
      <Button onClick={handleSubmit}>Submit</Button>
    </AppContainer>
  );
}

const mapStateToProps = (state) => ({
  result: getGuessingResult(state),
  min: getGuessingMin(state),
  max: getGuessingMax(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateMin: (guess) => dispatch(updateMin(guess)),
  updateMax: (guess) => dispatch(updateMax(guess)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
