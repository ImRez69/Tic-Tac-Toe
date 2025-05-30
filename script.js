// Button Action
const button = document.getElementById("btn");
const body = document.getElementById("body");
const svg = document.querySelectorAll("svg");

const onClick = () => {
  body.classList.toggle("light");
  svg.forEach((svg) => svg.classList.toggle("light-svg")); // Toggle light-svg for all svg
};
button.addEventListener("click", onClick);

// Tic Tac Toe Rule
let currentPlayer;

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

let board = [
  ["", "", ""], // ردیف اول
  ["", "", ""], // ردیف دوم
  ["", "", ""], // ردیف سوم
];

let turnCount = 0;

// Box Action
const article = document.getElementById("article");

const onClickBox = (e) => {
  const boxCheck = e.target.closest(".box"); // If .box is exited True else is False

  if (boxCheck) {
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
        break;

      case "O":
        boxCheck.querySelector(".o-svg").classList.add("show");
        break;
    }
    boxCheck.classList = "box-active";
  }

};
article.addEventListener("click", onClickBox);
