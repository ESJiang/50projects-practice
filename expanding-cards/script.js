const panels = document.querySelectorAll(".panel"),
    mediaQuery = window.matchMedia("(min-width: 1000px)");
let panel_active = document.querySelector(".active");

function handleMediaQueryChange() {
    if (mediaQuery.matches) {
        for (let value of panels) {
            if (value !== panel_active) {
                value.style.display = "none";
            }
            panel_active.style.marginLeft = 0;
            panel_active.style.display = "block";
        }
    } else {
        for (let value of panels) {
            value.style.display = "block";
        }
        panel_active.style.marginLeft = "10px";
    }
}
handleMediaQueryChange();
mediaQuery.addEventListener("change", handleMediaQueryChange);
for (let panel of panels) {
    panel.addEventListener("click", () => {
        panel_active.classList.remove("active");
        panel.classList.add("active");
        panel_active = panel;
    });
}
