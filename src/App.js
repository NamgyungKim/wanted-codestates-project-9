import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Router from './pages/Router';

const App = () => {
  return (
    <Wrap>
      <Header />
      <Router />
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
`;

export default App;
