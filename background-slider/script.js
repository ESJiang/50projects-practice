const leftArrow = document.querySelector(".left"),
    rightArrow = document.querySelector(".right"),
    containerDivs = document.querySelectorAll(".container"),
    numPictures = containerDivs.length,
    body = document.body,
    rootStyles = getComputedStyle(document.documentElement);

let pictureActive = document.querySelector(".active"),
    index = 0;

leftArrow.addEventListener("click", handleArrowClick);
rightArrow.addEventListener("click", handleArrowClick);

function setPictureActive(picture) {
    if (picture) {
        body.style.backgroundImage = rootStyles.getPropertyValue(`--bg-${index + 1}`);
        pictureActive.classList.remove("active");
        picture.classList.add("active");
        pictureActive = picture;
    } else {
        console.error("Can't find picture");
    }
}

body.style.backgroundImage = rootStyles.getPropertyValue(`--bg-${index + 1}`);
function handleArrowClick(e) {
    e.preventDefault();
    if (e.target === leftArrow) {
        if (--index < 0) {
            index = numPictures - 1;
        }
        setPictureActive(containerDivs[index]);
    } else if (e.target === rightArrow) {
        if (++index === numPictures) {
            index = 0;
        }
        setPictureActive(containerDivs[index]);
    }
}
