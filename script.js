$(document).ready(function() {
  $('.card-container').on('click', function() {
    $(this).toggleClass('is-flipped');
  });
});

// Initialize header slide index
let headerSlideIndex = 0;
let headerSlideInterval;

function changeHeaderSlide(n) {
  const headerSlides = document.getElementsByClassName("header-slide");
  const heading = document.querySelector('.daw-display-middle h1 span');

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

  // Update heading content based on the current slide
  if (headerSlideIndex === 0) {
    heading.innerHTML = '<b>Gartenpflege</b>';
  } else if (headerSlideIndex === 1) {
    heading.innerHTML = '<b>Baumpflege</b>';
  } else if (headerSlideIndex === 2) {
    heading.innerHTML = '<b>Pflastern</b>';
  }

  console.log("Slide index:", headerSlideIndex);
}

function startAutomaticSlide() {
  headerSlideInterval = setInterval(function () {
    console.log("Automatic slideshow triggered.");
    changeHeaderSlide(1);
  }, 7000); // Change slide every 7 seconds (adjust as needed)
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



document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded

  // Get the button and the overlay
  const toggleButton = document.getElementById("toggleOverlay");
  const overlay = document.querySelector(".new-text-overlay");

  // Add a click event listener to the button
  toggleButton.addEventListener("click", function () {
    // Toggle the 'show' class on the overlay to display or hide it
    overlay.classList.toggle("show");
  });
});
function toggleOverlay(button) {
  // Find the parent container of the button
  const container = button.closest('.image-container');

  // Find the overlay within the same container
  const overlay = container.querySelector('.new-text-overlay');

  // Toggle the visibility of the overlay
  overlay.classList.toggle('show');
}