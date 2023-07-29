document.getElementById("my_btn").addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = e.clientY - e.target.offsetTop + "px"; // 鼠标位置-鼠标父级和浏览器上边距
    circle.style.left = e.clientX - e.target.offsetLeft + "px";
    e.target.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
});
