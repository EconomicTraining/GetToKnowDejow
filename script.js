// IMAGE SLIDER

const podcast = document.querySelectorAll("#podcast img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (podcast.length > 0) {
    podcast[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= podcast.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = podcast.length - 1;
  }

  podcast.forEach((podcast) => {
    podcast.classList.remove("displaySlide");
  });
  podcast[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}




