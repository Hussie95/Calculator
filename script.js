function showWishes(memberName, memberImage) {
    const cardPopup = document.getElementById('cardPopup');
    const popupTitle = document.getElementById('popupTitle');
    const popupMessage = document.getElementById('popupMessage');

    // Change the heading to just display the name
    popupTitle.textContent = memberName;

    // Assign specific colors and messages based on member names
    const messagesMap = {
        // ... (Same as in your original code)
    };

    // Use the color and message from the map or defaults if not found
    const { color, message } = messagesMap[memberName] || { color: getRandomColor(), message: '' };
    cardPopup.style.backgroundColor = color;

    // Change the text color to black for better readability
    popupMessage.innerHTML = `<span style="color: black;">${message}</span>`;

    cardPopup.style.display = 'block';
}

function closeCardPopup() {
    const cardPopup = document.getElementById('cardPopup');
    cardPopup.style.display = 'none';
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
