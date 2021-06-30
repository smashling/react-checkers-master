# React Multi Game
This was forked from Gabriel Mioni, who created the checkers game in React. I did some noodling to make different kinds of games be able to be played simultaneously.


This is a 2 player game built in React.js:

Features:
* Mobile friendly design
* Game board maintains state history and players can undo moves
* Untold hours of frustrating entertainment

### Code
The project was started using the NPM create-react-app

The game's business logic lives in the ReactCheckers component. The board is initialized as an object
where key values represent board coordinates.

Pieces for both players are stored as the values in the board object. Example: the value of ReactComponent.state.history[{boardState['a6']}] starts the game as a player1 piece object. When the piece moves, the value at boardState['a6'] in the new history array element will be null.

Each time a player moves (including multi-jumps, where the turn has not gone to the opponent), the game records the board's state. Moves can be undone by clicking the 'Undo' button in the lower right. This changes the value used to reference the current board state used to render the game.

When a pieces is selected, available moves (including jumps) are passed to the game's state.

Victory conditions are checked each time a player ends their turn.
