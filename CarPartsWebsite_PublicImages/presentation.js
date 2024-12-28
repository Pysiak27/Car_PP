document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const updateSlides = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentSlide);
        });
    };

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
        } else if (event.key === "ArrowLeft") {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
        }
    });

    // Initialize slides
    updateSlides();
});