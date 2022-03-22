import React from 'react';
import styled from 'styled-components';
import BottomBar from './components/BottomBar';
import Header from './components/Header';
import Router from './pages/Router';

const App = () => {
  return (
    <Wrap>
      <Header />
      <Router />
      <BottomBar />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  max-width: 768px;
  min-width: 320px;
  height: 100vh;
  margin: auto;
  background-color: #fff;
  padding: 56px 0 64px;
  box-sizing: border-box;
  @media screen and (min-width: 425px) {
    padding: 64px 0 70px;
  }
`;

export default App;
