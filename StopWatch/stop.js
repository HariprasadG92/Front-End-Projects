let timerInterval;
let startTime;
let elapsedTime = 0;

// Helper function to format time
function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

// Start the stopwatch
function start() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('display').textContent = formatTime(elapsedTime);
        }, 10);
    }
}

// Stop the stopwatch
function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Reset the stopwatch
function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00:00';
}
