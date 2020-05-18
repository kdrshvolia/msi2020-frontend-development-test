import React from 'react';
import './App.css';
import { withBoard } from './hocs/withBoard/withBoard';
import Board from './components/Board/Board';
import { GlobalStyle } from './StyledComponents';

function App() {
  const EnhancedBoard = withBoard(Board);
  return (
    <>
      <GlobalStyle />
      <EnhancedBoard />
    </>
  );
}

export default App;
