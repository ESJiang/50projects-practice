const prev = document.getElementById("prev"),
    next = document.getElementById("next"),
    progress_list = document.querySelectorAll(".progress_section_circle");
let position_index = 0,
    progress_active = document.querySelector(".progress_section_circle.active");

next.addEventListener("click", () => {
    if (position_index < 3) {
        prev.disabled = false;
        prev.classList.add("active");
        ++position_index;
        progress_active.classList.remove("active");
        progress_active = progress_list[position_index];
        progress_active.classList.add("active");
        if (position_index === 3) {
            next.classList.remove("active");
        }
    }
});

prev.addEventListener("click", () => {
    if (position_index > 0) {
        if (position_index !== 3) {
            next.classList.add("active");
        }
        --position_index;
        progress_active.classList.remove("active");
        progress_active = progress_list[position_index];
        progress_active.classList.add("active");
        if (position_index === 0) {
            prev.classList.remove("active");
            prev.disabled = true;
        }
    }
});
