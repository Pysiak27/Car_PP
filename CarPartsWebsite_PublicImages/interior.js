
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "images/interior1.jpg",
        "images/interior2.jpg",
        "images/interior3.jpg",
        "images/interior4.jpg",
        "images/interior5.jpg"
    ];
    let currentIndex = 0;

    const galleryImage = document.getElementById("gallery-image");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    const updateImage = () => {
        galleryImage.src = images[currentIndex];
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
});
