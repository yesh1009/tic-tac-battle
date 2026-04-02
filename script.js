let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = false;

let player1 = "Player 1";
let player2 = "Player 2";

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function startGame() {
  player1 = document.getElementById("player1").value || "Player 1";
  player2 = document.getElementById("player2").value || "Player 2";

  gameActive = true;
  document.getElementById("turn").innerText = player1 + "'s Turn (X)";
}

function makeMove(index) {
  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  document.getElementsByClassName("cell")[index].innerText = currentPlayer;

  checkWinner();

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  let currentName = currentPlayer === "X" ? player1 : player2;
  document.getElementById("turn").innerText = currentName + "'s Turn (" + currentPlayer + ")";
}

function checkWinner() {
  for (let pattern of winPatterns) {
    let [a,b,c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      let winner = board[a] === "X" ? player1 : player2;
      document.getElementById("status").innerText = winner + " Wins! 🎉";
      gameActive = false;
      return;
    }
  }

  if (!board.includes("")) {
    document.getElementById("status").innerText = "Draw!";
    gameActive = false;
  }
}

function restart() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  document.getElementById("status").innerText = "";
  
  let cells = document.getElementsByClassName("cell");
  for (let cell of cells) cell.innerText = "";

  document.getElementById("turn").innerText = player1 + "'s Turn (X)";
}