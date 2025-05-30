// Button Action
const button = document.getElementById("btn");
const body = document.getElementById("body");
const svg = document.querySelectorAll("svg");

const onClick = () => {
  body.classList.toggle("light");
  svg.forEach((svg) => svg.classList.toggle("light-svg")); // Toggle light-svg for all svg
};
button.addEventListener("click", onClick);

// Box Action
const article = document.getElementById("article");
let currentPlayer = "X";

const onClickBox = (e) => {
  const boxCheck = e.target.closest(".box"); // If .box is exited True else is False

  if (boxCheck) {
    if (currentPlayer === "X") { // Player Turn
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }

    switch (true) {
      case currentPlayer === "X":
        boxCheck.querySelector(".x-svg").classList.add("show");
        break;

      case currentPlayer === "O":
        boxCheck.querySelector(".o-svg").classList.add("show");
        break;
    }

    boxCheck.classList = "box-active";
  }
}; 
article.addEventListener("click", onClickBox);
