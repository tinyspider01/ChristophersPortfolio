// --- Video play/pause on click ---
const video = document.getElementById("AdventureTimeVideo");

video.addEventListener("click", function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// --- Carousel (native scroll-snap, no manual drag tracking) ---
const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".slide");

function goToSlide(index) {
    index = Math.max(0, Math.min(index, slides.length - 1));
    carouselContainer.scrollTo({
        left: index * carouselContainer.clientWidth,
        behavior: "smooth"
    });
}