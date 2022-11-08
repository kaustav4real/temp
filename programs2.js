let counter = 0;
const images = document.querySelectorAll(".carousel-image");

const carousel = () => {
  setInterval(() => {
    if (counter < 2) {
      document.getElementById(`imageCarousel${counter}`).style.display = "none";
      counter = counter + 1;
      document.getElementById(`imageCarousel${counter}`).style.display =
        "block";
    } else if (counter === 2) {
      document.getElementById(`imageCarousel${counter}`).style.display = "none";
      counter = 0;
      document.getElementById(`imageCarousel${counter}`).style.display =
        "block";
    }
    //console.log("hello");
  }, 1000);
};
