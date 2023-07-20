const buttons = document.querySelectorAll("button");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const container = document.querySelector(`.container_section:nth-child(${index + 1})`);
        const paragraph = document.querySelector(`.container_section:nth-child(${index + 1})>p`);
        const icon = button.querySelector("i");
        if (icon.classList.contains("fa-chevron-down")) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-chevron-down");
        }
        container.classList.toggle("active");
        paragraph.classList.toggle("active");
    });
});
