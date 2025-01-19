# TIC-TAC-TOE-game
Welcome to the Tic-Tac-Toe game repository! This project demonstrates basic web development skills including HTML, CSS, and JavaScript by building a fully functional interactive Tic-Tac-Toe game that can be played in the browser.

<b>Overview</b>
This is a simple implementation of the classic Tic-Tac-Toe game. The game allows two players to play on the same device. The objective is to get three of the same marks (either X or O) in a row, column, or diagonal.

<b>Project Features</b>
Two-player Mode: Players take turns to play as 'X' and 'O'.
Responsive Design: The game layout adjusts to different screen sizes for mobile and desktop devices.
Dynamic Gameplay: The game state updates dynamically, and players are notified when there’s a winner or a tie.
Reset Option: After a game ends, players can easily restart the game with a button click.

<b>Technologies Used</b>
HTML5: Used for the structure of the game board and the layout.
CSS3: Styling for the game interface, including colors, positioning, and transitions.
JavaScript (ES6+): Logic for managing game state, player turns, checking for a winner, and resetting the game.
Screenshots

Example of the Tic-Tac-Toe game board.

Getting Started
To get started with this project locally, follow these steps:

Clone the repository:

bash
Copy
git clone https://github.com/yourusername/tic-tac-toe.git
Navigate to the project directory:

bash
Copy
cd tic-tac-toe
Open the index.html file in your preferred browser:

bash
Copy
open index.html
Start playing the game!

How to Play
The game board consists of 9 squares arranged in a 3x3 grid.
Player 1 (X) and Player 2 (O) take turns clicking on empty squares to place their respective marks.
The game ends when either player wins by having three marks in a row, column, or diagonal, or when all squares are filled, resulting in a tie.
Click the Restart button to reset the board and start a new game.
Features
Turn-based Gameplay: Players alternate between X and O until a winner is determined or the game results in a tie.
Winner Detection: The game automatically checks for a winning combination or a tie after each move.
Mobile-Friendly: The design adapts to different screen sizes, providing an optimal experience on both desktop and mobile devices.
Simple User Interface: Easy-to-use interface with clickable squares and a reset button.
Project Structure

/tic-tac-toe
│
├── index.html         # The main HTML structure for the game
├── style.css          # The CSS file for styling the game board and interface
├── script.js          # The JavaScript file that contains the game logic
└── README.md          # This file
Code Explanation
index.html
Contains the basic structure of the Tic-Tac-Toe game, including the 3x3 grid of clickable cells and the reset button.

style.css
Defines the styling for the game board, the layout, and visual feedback such as highlighting winning combinations.

script.js
Contains all the JavaScript logic for:

Managing player turns (X and O).
Checking for winning combinations.
Handling the game reset functionality.
Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request! Here’s how you can contribute:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit them (git commit -am 'Add new feature').
Push to your branch (git push origin feature-name).
Open a pull request to the main branch.
License
This project is open-source and available under the MIT License.

Acknowledgments
MDN Web Docs – A great resource for web technologies.
W3Schools – Provides helpful tutorials on HTML, CSS, and JavaScript.
JavaScript30 – A collection of 30-day challenges that helped me enhance my JS skills.
Contact
Feel free to reach out if you have any questions or suggestions regarding this project! You can contact me via GitHub or create an issue if you spot a bug or have any improvement ideas.
