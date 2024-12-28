
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("car-canvas");
    const ctx = canvas.getContext("2d");
    const button = document.getElementById("start-button");

    let carX = 0;
    let carSpeed = 2;
    let rpm = 0;

    // Load car image
    const carImage = new Image();
    carImage.src = "image/car.jpg"; // Ensure this image exists in the images folder

    // Load engine sound
    const engineSound = new Audio("audio/engine.mp3"); // Ensure this sound file exists in the audio folder

    // Check if image loads properly
    carImage.onload = () => console.log("Car image loaded successfully");
    carImage.onerror = () => console.error("Failed to load car image");

    // Check if sound loads properly
    engineSound.oncanplaythrough = () => console.log("Engine sound is ready to play");
    engineSound.onerror = () => console.error("Failed to load engine sound");

    const drawCar = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(carImage, carX, canvas.height / 2 - 50, 500, 300);

        // Draw RPM gauge
        ctx.fillStyle = "#000";
        ctx.fillRect(10, 10, 150, 50);
        ctx.fillStyle = "#FFF";
        ctx.fillText(`RPM: ${rpm}`, 20, 40);

        carX += carSpeed;

        // Reset car position if it moves out of canvas
        if (carX > canvas.width) carX = -100;

        rpm = Math.min(rpm + 50, 8000); // Simulate RPM increase
    };

    let animationInterval;
    button.addEventListener("click", () => {
        rpm = 0;
        carX = 0;
        engineSound.play();
        if (animationInterval) clearInterval(animationInterval);
        animationInterval = setInterval(drawCar, 30);
    });
});
