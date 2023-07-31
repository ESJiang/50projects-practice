const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
const body = document.querySelector("body");

const hideEmptyElements = () => {
    const emptyElements = document.querySelectorAll(".empty:empty");
    if (window.innerWidth <= 845) {
        emptyElements[1].style.display = "none";
        emptyElements[2].style.display = "none";
        if (window.innerHeight <= 500) {
            emptyElements[3].style.display = "none";
        } else if (window.innerHeight <= 330) {
            emptyElements[3].style.display = "none";
            emptyElements[4].style.display = "none";
        }
    } else {
        emptyElements.forEach(item => (item.style.display = "block"));
    }
};

window.addEventListener("load", hideEmptyElements);
window.addEventListener("resize", hideEmptyElements);

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach(empty => {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
});

function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
    this.className = "fill";
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}

function dragLeave() {
    this.className = "empty";
}

function dragDrop() {
    this.className = "empty";
    this.append(fill);
}
