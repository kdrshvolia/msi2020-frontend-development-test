import React from 'react';
import './App.css';
import { withBoard } from './hocs/withBoard/withBoard';
import Board from './components/Board/Board';

function App() {
  const EnhancedBoard = withBoard(Board);
  return <EnhancedBoard />;
}

export default App;
