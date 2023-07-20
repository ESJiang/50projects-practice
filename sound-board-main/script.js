const soundButtons = document.querySelectorAll(".section");

for (let value of soundButtons) {
    value.addEventListener("click", event => {
        const audioFileName = event.target.textContent;
        new Audio(`./sounds/${audioFileName}.mp3`).play();
    });
}
