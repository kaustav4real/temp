let counter = 0;
let viewportWidth = window.innerWidth;
if (counter === 0) {
    document.getElementById("left-c-btn").style.display = "none";
}
const carouselControllers = document.querySelectorAll(".carousel-btn-controller");

const displayLeftBtn = () => {
    document.getElementById("left-c-btn").style.display = "block";
}

const displayRightBtn = () => {
    document.getElementById("right-c-btn").style.display = "block";
}

const hideLeftBtn = () => {
    document.getElementById("left-c-btn").style.display = "none";
}

const hideRightBtn = () => {
    document.getElementById("right-c-btn").style.display = "none";
}

const swipeLeft = () => {
    document.getElementById("main-program__container").scrollLeft += viewportWidth;
}

const swipeRight = () => {
    document.getElementById("main-program__container").scrollLeft -= viewportWidth;
}

carouselControllers.forEach((button) => {
    button.addEventListener("click", (event) => {
        const targetID = event.target.id;
        if (targetID === "left-c-btn" && counter > 0) {
            counter = counter - 1;
            if (counter === 0) {
                hideLeftBtn();
            }
            swipeRight();
            displayRightBtn();
        } else if (targetID === "right-c-btn" && counter < 2) {
            counter = counter + 1;
            if (counter === 2) {
                hideRightBtn();
            }
            swipeLeft();
            displayLeftBtn();
        }
        console.log(counter);
    });
})