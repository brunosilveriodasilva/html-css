const daysEl = document.querySelector("#days .numbers");
const hoursEl = document.querySelector("#hours .numbers");
const minutesEl = document.querySelector("#minutes .numbers");
const secondsEl = document.querySelector("#seconds .numbers");
const expiredEl = document.getElementById("expired");
const countdownEl = document.querySelector(".countdown");

const PROMO_DURATION = 24 * 60 * 60 * 10000; // 24h em ms

// Recupera ou cria o tempo inicial
let startTime = localStorage.getItem("promoStart");

if (!startTime) {
startTime = Date.now();
localStorage.setItem("promoStart", startTime);
}

const endTime = parseInt(startTime) + PROMO_DURATION;

function updateCountdown() {
const now = Date.now();
const diff = endTime - now;

if (diff <= 0) {
    countdownEl.style.display = "none";
    expiredEl.classList.remove("hidden");
    clearInterval(timer);
    return;
}

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

// Atualiza no HTML
daysEl.textContent = days.toString().padStart(2, "0");
hoursEl.textContent = hours.toString().padStart(2, "0");
minutesEl.textContent = minutes.toString().padStart(2, "0");
secondsEl.textContent = seconds.toString().padStart(2, "0");
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
