const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h > 12) {
        h -= 12;
        ampm = "PM";
    }
    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m; 
    s = (s < 10) ? "0" + s: s;

    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampmElement.innerText = ampm;

    setTimeout(()=>{
        updateClock();
    },1000);
}

updateClock();

mode = "light"

function changeBG() {
    if(mode == "light") {
        document.getElementById("body").style.backgroundImage = "url(images/dark-mode-bg.jpg)";
        document.getElementById("btn").innerText = "🔄Light Mode";
        mode = "dark";
    }
    else if(mode = "dark") {
        document.getElementById("body").style.backgroundImage = "url(images/light-mode-bg.jpg)";
        document.getElementById("btn").innerText = "🔄Dark Mode";
        mode = "light";
    }
}