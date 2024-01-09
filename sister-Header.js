// sister.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and include the header.html content
    fetch('sisters-Header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll('script[src="sister-Header.js"]').forEach(function (script) {
                script.insertAdjacentHTML('beforebegin', data);
            });
        });
});

//navigate
// Function to open overlay (you may need to implement this part)
function openOverlay() {
    // Implement the logic to show your overlay
    // For example, you can add a CSS class to display it
    // or use a third-party library for modals/overlays
}
// Add a click event listener to the div element
document.getElementById('sistersRequest').addEventListener('click', function() {
    // Open overlay (you may need to implement this part)
    openOverlay();

    // Navigate to the "donors-Purchase.html" page
    window.location.href = 'sisters-Home-Request.html';
});
document.getElementById('sistersCommunity').addEventListener('click', function() {
    // Open overlay (you may need to implement this part)
    openOverlay();

    // Navigate to the "sisters-Home-SistersCommunity.html" page
    window.location.href = 'sisters-Home-SistersCommunity.html';
});

