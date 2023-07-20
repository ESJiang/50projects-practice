const eventDivs = Array.from(document.querySelectorAll(".event_div"));
const [keyDiv, keyCodeDiv, codeDiv] = eventDivs;
const firstSection = document.querySelector(".detail");

document.addEventListener("keydown", e => {
    [keyDiv.textContent, keyCodeDiv.textContent, codeDiv.textContent] = [e.key, e.keyCode, e.code];
    if (!firstSection.classList.contains("inactive")) {
        firstSection.classList.add("inactive");
        firstSection.nextElementSibling.classList.remove("inactive");
    }
});
