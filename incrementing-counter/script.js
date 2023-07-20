const counters = document.querySelectorAll(".container_text");

counters.forEach(counter => {
    const target = Number(counter.getAttribute("data-target"));
    let currentCount = 0;
    function updateCounter() {
        if (currentCount < target) {
            currentCount += target / 200;
            counter.textContent = Math.ceil(currentCount);
            setTimeout(updateCounter, 1);
        } else {
            counter.textContent = target;
        }
    }
    updateCounter();
});
