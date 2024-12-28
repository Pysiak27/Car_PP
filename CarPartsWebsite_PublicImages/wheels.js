
document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate-button");
    const resultElement = document.getElementById("result");
    const canvas = document.getElementById("tire-canvas");
    const ctx = canvas.getContext("2d");

    calculateButton.addEventListener("click", () => {
        const rimDiameter = parseFloat(document.getElementById("rim-diameter").value);
        const rimWidth = parseFloat(document.getElementById("rim-width").value);

        if (isNaN(rimDiameter) || isNaN(rimWidth)) {
            resultElement.textContent = "Please enter valid numerical values.";
            return;
        }

        const tireWidth = (rimWidth * 1.15).toFixed(1); // Approximate width to fit European parameters
        const sidewallHeight = (rimDiameter * 0.15).toFixed(1); // Assume 15% of diameter as sidewall height
        const recommendedTire = `${tireWidth}mm width, ${sidewallHeight}mm sidewall height`;

        resultElement.textContent = `Recommended Tire Size: ${recommendedTire}`;

        // Draw the tire on the canvas
        canvas.style.display = "block";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the tire
        ctx.beginPath();
        ctx.arc(250, 150, rimDiameter / 2, 0, Math.PI * 2); // Outer circle
        ctx.fillStyle = "#333";
        ctx.fill();
        
        // Draw the rim
        ctx.beginPath();
        ctx.arc(250, 150, rimDiameter / 4, 0, Math.PI * 2); // Inner circle
        ctx.fillStyle = "#ccc";
        ctx.fill();

        // Add tire label
        ctx.fillStyle = "#FFF";
        ctx.font = "16px Arial";
        ctx.fillText(`Tire: ${tireWidth}mm / ${sidewallHeight}mm`, 180, 280);
    });
});
