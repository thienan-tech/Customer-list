document.addEventListener('DOMContentLoaded', () => {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listener to each navigation link
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = event.target.getAttribute('href');
            loadPage(url);
        });
    });

    // Function to load a page
    function loadPage(url) {
        fetch(url)
            .then((response) => response.text())
            .then((html) => {
                // Replace the content of the main body
                document.querySelector('body').innerHTML = html;

                // Reattach the click event listeners to the new navigation links
                const newNavLinks = document.querySelectorAll('nav a');
                newNavLinks.forEach((link) => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        const newUrl = event.target.getAttribute('href');
                        loadPage(newUrl);
                    });
                });
            })
            .catch((error) => {
                console.error('Error loading page:', error);
            });
    }
});