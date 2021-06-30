import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Game} from './Game.js';
import Game2 from './TicTacToe.js';
import TicTacToeBoard from './TicTacToe.js'
import MyTimer from './TimeTracker.js'

// ========================================

ReactDOM.render(
    <div><Game /><Game2 /><TicTacToeBoard /><MyTimer/></div>,
    document.getElementById('root')
);