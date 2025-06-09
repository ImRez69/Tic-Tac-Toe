// Toggle Mode Button Action
const onClick = () => {
  const article = document.getElementById("article");
  const toggleButton = document.getElementById("btn");
  const startButton = document.getElementById("start-btn");
  const body = document.getElementById("body");
  const svg = document.querySelectorAll("svg");
  body.classList.toggle("light"); // "اضافه کردن "کلس" به "بادی
  article.classList.toggle("light-article"); // اضافه کردن "کلس" به "آرتیکل" برای "بردر" "باکس" ها
  svg.forEach((svg) => svg.classList.toggle("light-svg")); // اضافه کردن "کلس" به همه "اس وی جی" ها
  toggleButton.classList.toggle("light-btn");
  startButton.classList.toggle("light-btn");
};
document.getElementById("btn").addEventListener("click", onClick);

// Tic Tac Toe Game
function ticTacToe() {
  // Tic Tac Toe Rule
  let currentPlayer = "X"; // بازیکن فعلی
  let turnCount = 0; // دور های بازی
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]; // تخته بازی
  let roundWon = false;
  document.getElementById("article").style.visibility = "visible";
  document.getElementById("article").style.opacity = "1";
  document.getElementById("start-btn").style.display = "none";

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

  // Game Status Function
  function checkGameStatus() {
    // Winning Conditions
    const ticTacToe = document.getElementById("tic-tac-toe");
    const article = document.getElementById("article");
    const currentPlayerDiv = document.getElementById("current-player-div");

    if (turnCount >= 5) {
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
    }

    // Won Activity
    if (roundWon) {
      // اگر متغیر برد درست بود برد را نمایش بده و رویداد کل باکس رو حذف میکند
      ticTacToe.innerText = `${currentPlayer} Won`;
      currentPlayerDiv.classList.add("hide");
      article.removeEventListener("click", onClickBox);

      // تغییر رنگ بک گراند به رنگ برنده
      switch (true) {
        case currentPlayer === "X":
          body = document.getElementById("body").classList.add("player-x-won");
          break;

        case currentPlayer === "O":
          body = document.getElementById("body").classList.add("player-o-won");
          break;
      }
    }

    // Draw Activity
    if (turnCount === 9 && roundWon === false) {
      // اگر در دور نهم بودیم و متغیر برد نادرست بود مساوی را نمایش بده و رویداد کل باکس رو حذف میکند
      ticTacToe.innerText = "Draw";
      currentPlayerDiv.style.transform = "scale(0)";
      article.removeEventListener("click", onClickBox);
    }
  }

  // Box Action
  const onClickBox = (e) => {
    const boxCheck = e.target.closest(".box"); // اگر کلس وجود داشته باشد نتیجه درست در متغیر ذخیره میشود در غیر این صورت نادرست

    if (boxCheck) {
      const boxId = boxCheck.id;
      const boxIndex = boxId.replace("box", "") - 1; // برای بدست آوردن ایندکس باکس ها از آی دی آنها کلمه باکس را حذف کرده و از عدد باقی مانده یک واحد کم میکنیم
      const currentPlayerX = document.getElementById("current-player-x");
      const currentPlayerO = document.getElementById("current-player-o");
      let xOrO = turnCount % 2 == 0;

      if (xOrO) {
        // "اگر در دور زوج بودیم نوبت بازیکن "ایکس" و در غیر اینصورت نوبت بازیکن "او
        currentPlayer = "X"; // "تغییر بازیکن فعلی به "ایکس
        currentPlayerX.style.transform = "scale(0)";
        currentPlayerO.style.transform = "scale(1)";

        turnCount++;
      } else {
        currentPlayer = "O"; // "تغییر بازیکن فعلی به "او
        currentPlayerX.style.transform = "scale(1)";
        currentPlayerO.style.transform = "scale(0)";
        turnCount++;
      }

      // بررسی بازیکن فعلی
      switch (currentPlayer) {
        case "X": // اگر بازیکن "ایکس" بود
          boxCheck.querySelector(".x-svg").classList.replace("hide","show"); // به اس وی جی "ایکس" "کلس" اضافه میکند
          board[boxIndex] = "X"; // ایکس" را در ایندکس باکس کلیک شده در تخته اضافه کن"
          break;

        case "O": // اگر بازیکن "او" بود
          boxCheck.querySelector(".o-svg").classList.replace("hide","show"); // به اس وی جی "او" "کلس" اضافه میکند
          board[boxIndex] = "O"; // او" را در ایندکس باکس کلیک شده در تخته اضافه کن"
          break;
      }

      boxCheck.classList = "box-active";
      checkGameStatus();
    }
  };

  document.getElementById("article").addEventListener("click", onClickBox);
}
document
  .getElementById("start-btn")
  .addEventListener("click", ticTacToe, { once: true });
