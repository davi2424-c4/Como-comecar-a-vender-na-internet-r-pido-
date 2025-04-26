
document.addEventListener("mousemove", function(e) {
    const emoji = document.createElement("div");
    emoji.textContent = "💸";
    emoji.style.position = "absolute";
    emoji.style.left = e.pageX + "px";
    emoji.style.top = e.pageY + "px";
    emoji.style.pointerEvents = "none";
    emoji.style.animation = "fly 1s ease-out forwards";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1000);
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes fly {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100px); opacity: 0; }
}`;
document.head.appendChild(style);
