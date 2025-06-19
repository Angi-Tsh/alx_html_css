document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerBarIcon = hamburgerIcon.querySelector('i'); // Get the <i> element inside the button

    hamburgerIcon.addEventListener('click', function() {
        // Toggle the 'open' class on the navigation links
        navLinks.classList.toggle('open');

        // Toggle the hamburger/close icon
        if (navLinks.classList.contains('open')) {
            hamburgerBarIcon.classList.remove('fa-bars');
            hamburgerBarIcon.classList.add('fa-times'); // Change to close (X) icon
        } else {
            hamburgerBarIcon.classList.remove('fa-times');
            hamburgerBarIcon.classList.add('fa-bars'); // Change back to hamburger icon
        }
    });

    // Optional: Close the menu when a navigation link is clicked
    // This is useful for single-page websites where clicking a link scrolls to a section.
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                hamburgerBarIcon.classList.remove('fa-times');
                hamburgerBarIcon.classList.add('fa-bars');
            }
        });
    });
});