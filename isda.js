// Throttling the scroll event for better performance
let lastScrollTime = 0;

// Adding smooth background color change on scroll
window.addEventListener('scroll', function() {
    const currentTime = new Date().getTime();
    // Limit scroll handling to 16ms (60 FPS)
    if (currentTime - lastScrollTime >= 16) {
        lastScrollTime = currentTime;

        // Get the scroll position
        let scrollPosition = window.scrollY;

        // Get the height of the entire document
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Calculate the scroll percentage (0 to 100)
        let scrollPercentage = (scrollPosition / docHeight) * 100;

        // Calculate the color change based on scroll percentage
        // Darken the background gradually as the user scrolls
        let darkenAmount = Math.min(scrollPercentage * 0.8, 60); // Darkens to a max of 60 units

        // Smoothing out the background color change to avoid jarring transitions
        const newColor = `rgb(${0 + darkenAmount}, ${126 - darkenAmount}, ${167 - darkenAmount})`;
        
        // Apply the background color dynamically based on scroll percentage
        document.body.style.transition = 'background-color 0.3s ease'; // Smooth transition for color change
        document.body.style.backgroundColor = newColor;
    }
});
