const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const scale = (num, in_min, in_max, out_min, out_max) => ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
let load = 0;
const int = setInterval(() => {
    if (++load > 99) {
        clearInterval(int);
    }
    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}, 30);
