const panels = document.querySelectorAll(".panel"),
    img_switch = document.querySelector(".figure_container>img"),
    rootStyles = getComputedStyle(document.documentElement);
let active_panel = panels[0];

panels.forEach((item, index) => {
    item.addEventListener("click", () => {
        active_panel.classList.remove("active");
        item.classList.add("active");
        active_panel = item;
        img_switch.src = rootStyles.getPropertyValue(`--bg-img${index}`).match(/url\((.*?)\)/)[1];
    });
});
