// Light Mode Button Action
const button = document.getElementById("btn");
const body = document.getElementById("body");
const svg = document.querySelectorAll("svg");
const article = document.getElementById("article");

const onClick = () => {
  body.classList.toggle("light"); // "اضافه کردن "کلس" به "بادی
  article.classList.toggle("light-article"); // اضافه کردن "کلس" به "آرتیکل" برای "بردر" "باکس" ها
  svg.forEach((svg) => svg.classList.toggle("light-svg")); // اضافه کردن "کلس" به همه "اس وی جی" ها
  button.classList.toggle("light-btn");
};
button.addEventListener("click", onClick);

// Tic Tac Toe Rule
let currentPlayer = "X"; // بازیکن فعلی
let turnCount = 0; // دور های بازی
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]; // تخته بازی
const winningConditions = [
  // آرایه ای شامل تمام شرایط برد
  [0, 1, 2], // First Row
  [3, 4, 5], // Second Row
  [6, 7, 8], // Third Row
  [0, 3, 6], // First Column
  [1, 4, 7], // Second Column
  [2, 5, 8], // Third Column
  [0, 4, 8], // Main Diagonal
  [2, 4, 6], // Anti-Diagonal
];

// currentPlayerElement
const currentPlayerElement = document.getElementById("current-player");

// Game Status Function
function checkGameStatus() {
  // Winning Conditions
  const ticTacToe = document.getElementById("tic-tac-toe");
  let roundWon = false;
  for (let i = 0; winningConditions.length > i; i++) {
    condition = winningConditions[i]; // در هر دفعه که حلقه اجرا میشود به ایندکس بعدی از آرایه شرایط بردن وارد متغیر میشود
    const indexA = condition[0]; // اولین ایندکس شرایط بردن رو درون متغیری دیپر ذخیره میکند
    const indexB = condition[1]; // دومین ایندکس شرایط بردن رو درون متغیری دیپر ذخیره میکند
    const indexC = condition[2]; // سومین ایندکس شرایط بردن رو درون متغیری دیپر ذخیره میکند

    const boxA = board[indexA]; // محتویات ایندکس مد نطر که از شرایط بردن برداشتیم را از تخته بازی در متغیری جهت بررسی یکی بودن ذخیره میکنیم
    const boxB = board[indexB]; // محتویات ایندکس مد نطر که از شرایط بردن برداشتیم را از تخته بازی در متغیری جهت بررسی یکی بودن ذخیره میکنیم
    const boxC = board[indexC]; // محتویات ایندکس مد نطر که از شرایط بردن برداشتیم را از تخته بازی در متغیری جهت بررسی یکی بودن ذخیره میکنیم

    // Winning Conditions Check
    switch (true) {
      case boxA === " " || boxB === " " || boxC === " ": // اگر که یکی از ایندکس های مد نظر خالی بود ادامه بده
        continue;

      case boxA === boxB && boxB === boxC: // اگر که همه ایندکس ها برار بودن متغیر برد را برابر با درست قرار بده
        roundWon = true;
        break;
    }
  }

  // Won Activity
  if (roundWon) {
    // اگر متغیر برد درست بود برد را نمایش بده و رویداد کل باکس رو حذف میکند
    ticTacToe.innerText = `${currentPlayer} Won`;
    currentPlayerElement.style.opacity = "0";
    article.removeEventListener("click", onClickBox);
  }

  // Draw Activity
  if (turnCount === 9 && roundWon === false) {
    // اگر در دور نهم بودیم و متغیر برد نادرست بود مساوی را نمایش بده و رویداد کل باکس رو حذف میکند
    ticTacToe.innerText = "Draw";
    currentPlayerElement.style.display = "none";
    article.removeEventListener("click", onClickBox);
  }
}

// Box Action
const onClickBox = (e) => {
  const boxCheck = e.target.closest(".box"); // اگر کلس وجود داشته باشد نتیجه درست در متغیر ذخیره میشود در غیر این صورت نادرست

  if (boxCheck) {
    const boxId = boxCheck.id;
    const boxIndex = boxId.replace("box", "") - 1; // برای بدست آوردن ایندکس باکس ها از آی دی آنها کلمه باکس را حذف کرده و از عدد باقی مانده یک واحد کم میکنیم

    if (turnCount % 2 == 0) {
      // "اگر در دور زوج بودیم نوبت بازیکن "ایکس" و در غیر اینصورت نوبت بازیکن "او
      currentPlayer = "X"; // "تغییر بازیکن فعلی به "ایکس
      currentPlayerElement.innerText = "Current Player: O"; // "تغییر متن بازیکن فعلی به "ایکس
      turnCount++;
    } else {
      currentPlayer = "O"; // "تغییر بازیکن فعلی به "او
      currentPlayerElement.innerText = "Current Player: X"; // "تغییر متن بازیکن فعلی به "او
      turnCount++;
    }

    switch (
      currentPlayer // بررسی بازیکن فعلی
    ) {
      case "X": // اگر بازیکن "ایکس" بود
        boxCheck.querySelector(".x-svg").classList.add("show"); // به اس وی جی "ایکس" "کلس" اضافه میکند
        board[boxIndex] = "X"; // ایکس" را در ایندکس باکس کلیک شده در تخته اضافه کن"
        break;

      case "O": // اگر بازیکن "او" بود
        boxCheck.querySelector(".o-svg").classList.add("show"); // به اس وی جی "او" "کلس" اضافه میکند
        board[boxIndex] = "O"; // او" را در ایندکس باکس کلیک شده در تخته اضافه کن"
        break;
    }
    boxCheck.classList = "box-active";
    checkGameStatus();
  }
};

article.addEventListener("click", onClickBox);
