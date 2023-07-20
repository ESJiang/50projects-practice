const boxes = document.querySelectorAll(".content");
window.addEventListener("scroll", checkBoxes);
checkBoxes(); // execute this function when the page is loaded.

function checkBoxes() {
    requestAnimationFrame(() => {
        for (let value of boxes) {
            value.classList.toggle("show", value.getBoundingClientRect().top < window.innerHeight * 0.8);
        }
    });
}
