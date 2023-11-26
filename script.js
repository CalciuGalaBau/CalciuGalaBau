$(document).ready(function() {
  $('.card-container').on('click', function() {
    $(this).toggleClass('is-flipped');
  });
});

let headerSlideIndex = 0;
let headerSlideInterval;

function changeHeaderSlide(n) {
  const headerSlides = document.getElementsByClassName("header-slide");

  // Hide all slides
  for (let i = 0; i < headerSlides.length; i++) {
    headerSlides[i].style.display = "none";
  }

  // Update slide index
  headerSlideIndex += n;

  // Check for boundaries
  if (headerSlideIndex > headerSlides.length - 1) {
    headerSlideIndex = 0;
  }
  if (headerSlideIndex < 0) {
    headerSlideIndex = headerSlides.length - 1;
  }

  // Show the current slide
  headerSlides[headerSlideIndex].style.display = "block";
}

function startAutomaticSlide() {
  headerSlideInterval = setInterval(function () {
    console.log("Automatic slideshow triggered.");
    changeHeaderSlide(1);
  }, 10000); // Change slide every 2 seconds (adjust as needed, the three last 000 should stay, everything before that says the seconds.)
}

// Start automatic slideshow
startAutomaticSlide();

window.onload = function () {
  // Event listener for previous button
  document.getElementById("prevButton").addEventListener("click", function () {
    clearInterval(headerSlideInterval); // Stop automatic slideshow
    changeHeaderSlide(-1);
    startAutomaticSlide(); // Start automatic slideshow again
  });

  // Event listener for center button
  document.getElementById("centerButton").addEventListener("click", function () {
    clearInterval(headerSlideInterval); // Stop automatic slideshow
    changeHeaderSlide(0);
    startAutomaticSlide(); // Start automatic slideshow again
  });

  // Event listener for next button
  document.getElementById("nextButton").addEventListener("click", function () {
    clearInterval(headerSlideInterval); // Stop automatic slideshow
    changeHeaderSlide(1);
    startAutomaticSlide(); // Start automatic slideshow again
  });
};