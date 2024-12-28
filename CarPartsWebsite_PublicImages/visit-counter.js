document.addEventListener("DOMContentLoaded", () => {
    const pageName = window.location.pathname.split("/").pop(); // Get current page name
    const counterKey = `visitCount_${pageName}`; // Unique key for each page

    // Retrieve or initialize visit count
    let visitCount = parseInt(localStorage.getItem(counterKey), 10) || 0;
    visitCount += 1; // Increment the count
    localStorage.setItem(counterKey, visitCount); // Save back to localStorage

    // Display the visit count on the page
    const visitCounterElement = document.getElementById("visit-counter");
    if (visitCounterElement) {
        visitCounterElement.textContent = `Visits to this page: ${visitCount}`;
    }
});