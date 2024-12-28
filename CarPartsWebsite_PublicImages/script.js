
// Dynamic features for the website

// Visitor counter
if (!localStorage.getItem('visitCount')) {
    localStorage.setItem('visitCount', 0);
}
let visitCount = parseInt(localStorage.getItem('visitCount'), 10) + 1;
localStorage.setItem('visitCount', visitCount);
document.addEventListener('DOMContentLoaded', () => {
    const visitElement = document.getElementById('visit-counter');
    if (visitElement) {
        visitElement.textContent = `Visit count: ${visitCount}`;
    }
});

// Timer for time spent on the website
let timeSpent = 0;
setInterval(() => {
    timeSpent += 1;
    const timeElement = document.getElementById('time-spent');
    if (timeElement) {
        timeElement.textContent = `Time spent: ${timeSpent} seconds`;
    }
}, 1000);
