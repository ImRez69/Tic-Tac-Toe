# Tic Tac Toe

A simple and interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. This web application allows two players to compete in the classic game, with features like theme toggling, a responsive design, and a clear game status display.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)

## About
Tic Tac Toe is a single-page web application designed for two players to enjoy the classic game. It features a clean and responsive interface with a dark/light theme toggle, SVG-based game symbols (X and O), and a dynamic display of the current player's turn. The game logic is implemented using vanilla JavaScript, with a focus on simplicity and user-friendly design.

## Features
- **Two-Player Gameplay**: Players take turns placing X or O on a 3x3 grid.
- **Win/Draw Detection**: Automatically detects win conditions (rows, columns, diagonals) or a draw after 9 turns.
- **Current Player Indicator**: Shows which player's turn it is (X or O) with a scaling animation.
- **Theme Toggle**: Switch between dark and light themes, with smooth transitions (300ms).
- **Start and Restart**: Start the game with a dedicated button and restart by reloading the page.
- **Responsive Design**: Optimized for desktop and mobile devices with a fixed 300x300px game board.
- **SVG Graphics**: Uses SVG for X and O symbols, with dynamic show/hide animations.
- **Visual Feedback**: Highlights winning player with background color changes (blue for X, red for O).

## Installation
To run the Tic Tac Toe game locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ImRez69/Tic-Tac-Toe.git
   cd Tic-Tac-Toe


Ensure the font and favicon files are included:The project uses the Poppins-Regular.ttf font in the Source/Font directory and a favicon (fav-icon.png) in the Source/Img directory. If these files are missing, replace the font reference in style.css with a fallback font like Arial or download the Poppins font, and ensure the favicon is present.

Open the application:  

Open index.html in a web browser (e.g., Chrome, Firefox).  
No additional dependencies or build steps are required, as the project uses vanilla HTML, CSS, and JavaScript.  
Optionally, you can view a live demo (add link here, e.g., via GitHub Pages or htmlpreview.github.io).

- Also, you can run `index.html` [Here](https://htmlpreview.github.io/?https://github.com/ImRez69/Tic-Tac-Toe/blob/main/index.html).

## Usage

Open the application in a web browser.
Start the Game: Click the "Start Game" button to display the 3x3 grid.
Play the Game: Players take turns clicking on an empty box to place their symbol (X or O). The current player's turn is shown above the grid.
Check Game Status: The game automatically detects a win (with a colored background: blue for X, red for O) or a draw, and displays the result.
Restart the Game: Click the "Restart" button to reload the page and start a new game.
Toggle Theme: Click the "Toggle Theme" button to switch between dark and light modes.

## Technologies

HTML5: For the structure of the game, using semantic elements and SVG for X and O symbols.
CSS3: For styling, including responsive design, custom animations, and the Poppins font for a modern look.
JavaScript (Vanilla): For game logic, including win/draw detection, turn management, and theme toggling.
Poppins Font: A custom font for a clean and modern visual style.
Favicon: A custom favicon (fav-icon.png) for branding the browser tab.


