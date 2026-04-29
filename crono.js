let seconds = 0, minutes = 0, hours = 0;
let timer;
/* switch lcrono wach khedam true ou false derna false hit lcrono makybdach bohdo  */
let isRunning = false;
function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1); // ghadi yezid kol tanya
    }
}
/* fonction stop  */
function stop() {
    clearInterval(timer); // Kat habes lewe9t
    isRunning = false;    // Kat khali lecrono ye9der yebda mra khra
}
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    //  Ila kan ra9m fih ghir ra9m wahed (1 tal 9) zid 0 3la lisser
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText = h + ":" + m + ":" + s;
}