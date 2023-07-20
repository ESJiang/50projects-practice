const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

function toggleSearch() {
    btn.classList.toggle("active");
    input.classList.toggle("active");
    input.focus();
}

btn.addEventListener("click", toggleSearch);
