// Button Action
const button = document.getElementById("btn");
const body = document.getElementById("body");
const svg = document.querySelectorAll("svg");

const onClick = () => {
  body.classList.toggle("light"); // Toggle light for body
  svg.forEach((svg) => svg.classList.toggle("light-svg")); // Toggle light-svg for all svg
};
button.addEventListener("click", onClick);

// Tic Tac Toe Rule
let currentPlayer;
let turnCount = 0;
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
const winningConditions = [
  [0, 1, 2], // ردیف اول
  [3, 4, 5], // ردیف دوم
  [6, 7, 8], // ردیف سوم
  [0, 3, 6], // ستون اول
  [1, 4, 7], // ستون دوم
  [2, 5, 8], // ستون سوم
  [0, 4, 8], // قطر اصلی
  [2, 4, 6], // قطر فرعی
];

// Game Status Function
function checkGameStatus() {
  // Winning Conditions
  const ticTacToe = document.getElementById("h1");
  let roundWon = false;
  for (let i = 0; winningConditions.length > i; i++) {
    condition = winningConditions[i];
    const indexA = condition[0];
    const indexB = condition[1];
    const indexC = condition[2];

    const boxA = board[indexA];
    const boxB = board[indexB];
    const boxC = board[indexC];

    switch (true) {
      case boxA === " " || boxB === " " || boxC === " ":
        continue;

      case boxA === boxB && boxB === boxC:
        roundWon = true;
        break;
    }
  }
  if (roundWon) {
    ticTacToe.innerText = `${currentPlayer} Won`;
    console.log(board);
    article.removeEventListener("click", onClickBox);
  } else if (turnCount === 9 && roundWon === false) {
    ticTacToe.innerText = "Draw";
    article.removeEventListener("click", onClickBox);
  }
}

// Box Action
const article = document.getElementById("article");
const onClickBox = (e) => {
  const boxCheck = e.target.closest(".box"); // If .box is exited True else is False

  if (boxCheck) {
    const boxId = boxCheck.id;
    const boxIndex = boxId.replace("box", "") - 1; // Changes the boxIndex by one unit to fix index 0 and push X to board

    if (turnCount % 2 == 0) {
      // Player Turn
      turnCount++;
      currentPlayer = "X";
    } else {
      currentPlayer = "O";
      turnCount++;
    }

    switch (currentPlayer) {
      case "X":
        boxCheck.querySelector(".x-svg").classList.add("show");
        board[boxIndex] = "X";
        break;

      case "O":
        boxCheck.querySelector(".o-svg").classList.add("show");
        board[boxIndex] = "O";
        break;
    }
    boxCheck.classList = "box-active";
    checkGameStatus();
  }
};
article.addEventListener("click", onClickBox);
