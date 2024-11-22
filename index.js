let timerEl = document.getElementById("timer");
let resBtn = document.getElementById("resBtn");
let progressBar = document.getElementById("progressBar");
let confettiCanvas = document.getElementById("confetti-canvas");
let countdown;
let intervalId;

function startTimer() {
    countdown = 10;
    timerEl.textContent = countdown;
    progressBar.style.width = "100%";
    confettiCanvas.style.display = "none";

    // Clear any existing interval before starting a new one
    clearInterval(intervalId);

    intervalId = setInterval(function() {
        countdown--;
        progressBar.style.width = (countdown * 10) + "%";
        if (countdown <= 0) {
            timerEl.textContent = "BOOM";
            progressBar.style.width = "0%";
            clearInterval(intervalId);
        } else {
            timerEl.textContent = countdown;
        }
    }, 1000);
}

startTimer();

function checkAnswer(answer) {
    if (answer === 'Ni2+' && countdown > 0) {
        timerEl.textContent = "You did it!";
        clearInterval(intervalId);
        showConfetti();
    } else {
        timerEl.textContent = "Wrong! Try again!";
        // Set a timeout to clear the "Wrong!" message after a short delay
        setTimeout(() => {
            if (countdown > 0) {
                timerEl.textContent = countdown;
            }
        }, 1000);
    }
}

function showConfetti() {
    confettiCanvas.style.display = "block";
    const confettiSettings = { target: 'confetti-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

resBtn.addEventListener("click", startTimer);
