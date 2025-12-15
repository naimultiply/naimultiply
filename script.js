// Simple script for mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navigation = document.querySelector('.navigation');
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            if (navigation) {
                navigation.classList.toggle('mobile-active');
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navigation && !navigation.contains(event.target) && !menuButton.contains(event.target)) {
            navigation.classList.remove('mobile-active');
        }
    });
});