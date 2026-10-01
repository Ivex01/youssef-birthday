const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");
const confetti = document.getElementById("confetti");
const birthdaySound = document.getElementById("birthdaySound");

openButton.addEventListener("click", () => {
    overlay.classList.add("show");

    birthdaySound.currentTime = 0;
    birthdaySound.play();

    confetti.innerHTML = "";

    for (let i = 0; i < 50; i++) {
        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "%";
        piece.style.animationDelay = Math.random() * 0.8 + "s";
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;

        confetti.appendChild(piece);
    }
});

closeButton.addEventListener("click", () => {
    overlay.classList.remove("show");
});