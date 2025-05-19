const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let pointer = 0, direction = 0, swerve = 0, power = 0;
let phase = "direction";
let interval;

function drawDial(label, value, x, y) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(x, y, 100, 10);
    ctx.fillStyle = "lime";
    ctx.fillRect(x, y, value, 10);
    ctx.fillStyle = "#fff";
    ctx.fillText(label, x, y - 10);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "16px Courier New";
    drawDial("DIRECTION", direction, 100, 100);
    drawDial("SWERVE", swerve, 100, 150);
    drawDial("POWER", power, 100, 200);
}

function animate() {
    if (phase === "direction") direction = (direction + 1) % 100;
    if (phase === "swerve") swerve = (swerve + 1) % 100;
    if (phase === "power") power = (power + 1) % 100;
}

canvas.addEventListener("click", () => {
    if (phase === "direction") phase = "swerve";
    else if (phase === "swerve") phase = "power";
    else if (phase === "power") {
        phase = "direction";
        console.log("Kick:", {direction, swerve, power});
    }
});

setInterval(() => {
    animate();
    gameLoop();
}, 50);
