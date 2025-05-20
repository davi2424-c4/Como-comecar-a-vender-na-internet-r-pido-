
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Simulação de HUD e elementos finais (visual retrô simplificado)
ctx.fillStyle = "white";
ctx.font = "16px monospace";
ctx.fillText("Fase: 1", 10, 20);
ctx.fillText("Moedas: 0", 700, 20);
ctx.fillText("Clique para iniciar chute", 280, 300);

// Sons (simulado)
let windSound = new Audio('assets/wind.mp3');
let crowdSound = new Audio('assets/crowd.mp3');
canvas.addEventListener("click", () => {
  windSound.play();
  setTimeout(() => {
    crowdSound.play();
  }, 800);
});
