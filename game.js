
let gameState = "velocity";
let force = 0;
let curve = 0;
let height = 0;
let stage = 1;
let coins = 0;
let velocityBars = ["force", "curve", "height"];
let currentBar = 0;
let barValue = 0;
let barDirection = 1;
let barSpeed = 2;

function startGame() {
  document.getElementById("title-screen").style.display = "none";
  document.getElementById("gameCanvas").style.display = "block";
  gameLoop();
}

function showTutorial() {
  alert("Tutorial: Clique para travar os 3 velocímetros (força, curva e altura) na hora certa. Mire bem para marcar gols e ganhar moedas!");
}

function showStore() {
  alert("Loja (em breve): Use moedas para comprar mira, parar o goleiro, chute perfeito, etc.");
}

function showCodeMenu() {
  const code = prompt("Digite o código:");
  if (code === "CHATEDAVIES") {
    coins = 999999;
    alert("Código ativado! Dinheiro ilimitado!");
  } else {
    alert("Código inválido.");
  }
}

function gameLoop() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (gameState === "velocity") {
      drawVelocityBar(ctx);
    }
  }, 30);

  canvas.addEventListener("click", () => {
    if (gameState === "velocity") {
      if (velocityBars[currentBar] === "force") {
        force = barValue;
      } else if (velocityBars[currentBar] === "curve") {
        curve = barValue;
      } else if (velocityBars[currentBar] === "height") {
        height = barValue;
      }
      currentBar++;
      if (currentBar >= velocityBars.length) {
        gameState = "result";
        simulateShot(ctx);
      }
    }
  });
}

function drawVelocityBar(ctx) {
  const max = 100;
  barValue += barDirection * barSpeed;
  if (barValue > max || barValue < 0) {
    barDirection *= -1;
  }
  ctx.fillStyle = "#0f0";
  ctx.fillText("Clique para travar o valor de: " + velocityBars[currentBar], 260, 50);
  ctx.fillRect(200, 100, barValue * 4, 30);
  ctx.strokeStyle = "#fff";
  ctx.strokeRect(200, 100, 400, 30);
}

function simulateShot(ctx) {
  // Simulação simples só para mostrar resultado
  const goal = Math.random() < 0.7;
  ctx.clearRect(0, 0, 800, 600);
  ctx.fillStyle = goal ? "#0f0" : "#f00";
  ctx.fillText(goal ? "GOOOOL!" : "Errou!", 360, 300);

  let reward = 0;
  if (goal) {
    reward = 10 + Math.floor(force / 10);
    if (curve > 70 || force > 80 || height > 80) reward += 5; // chute bonito
  } else {
    reward = 2;
  }
  coins += reward;
  ctx.fillStyle = "#0f0";
  ctx.fillText("Moedas ganhas: " + reward + " | Total: " + coins, 250, 340);

  setTimeout(() => {
    stage++;
    currentBar = 0;
    gameState = "velocity";
  }, 2000);
}
