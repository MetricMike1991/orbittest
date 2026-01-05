// JavaScript Template
console.log('JavaScript is loaded and ready!');

// Get references to DOM elements
const button = document.getElementById('clickMe');
const output = document.getElementById('output');

let clickCount = 0;

// Add event listener to button
button.addEventListener('click', function() {
    clickCount++;
    output.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
    output.style.color = getRandomColor();
});

// Function to generate random colors
function getRandomColor() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Welcome message
window.addEventListener('load', function() {
    output.textContent = 'Click the button to see the magic! ✨';
    output.style.color = '#667eea';
});
