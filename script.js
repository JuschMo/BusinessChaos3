// Function to control which section is displayed
function showStoryPart(partId) {
    // Get all story sections
    const sections = document.querySelectorAll('.story-section');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the specific section requested by ID
    const targetSection = document.getElementById(partId);
    if (targetSection) {
        targetSection.style.display = 'block';
        // Scroll to the top of the container for better user experience
        document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
    }
}

// Attach event listeners to all choice links
document.addEventListener('DOMContentLoaded', () => {
    // Start by showing the INTRO section
    showStoryPart('intro');

    // Select all links with the class 'choice-link'
    const choiceLinks = document.querySelectorAll('.choice-link');

    choiceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default link behaviour (which would try to navigate to a new page)
            event.preventDefault();
            
            // Get the ID of the next story part from the 'data-next' attribute
            const nextPartId = this.getAttribute('data-next');
            
            // Call the function to show the next part
            showStoryPart(nextPartId);
        });
    });
});
