// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Functionality ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        // Toggle the 'active' class on the nav links when the menu button is clicked
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent this click from being caught by the document click listener
            navLinks.classList.toggle('active');
        });

        // Close the mobile menu if a navigation link is clicked
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Close the mobile menu when clicking anywhere else on the document
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== mobileMenuToggle) {
            navLinks.classList.remove('active');
        }
    });

});


// --- Lightbox Functionality ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');

// Function to open the lightbox and populate it with content
function openLightbox(imageSrc, title, description) {
    if (lightbox && lightboxImg && lightboxTitle && lightboxDescription) {
        lightboxImg.src = imageSrc;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling of the background
    }
}

// Function to close the lightbox
function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

if (lightbox) {
    // Close lightbox when clicking on the dark background (the lightbox element itself) or the close button
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            closeLightbox();
        }
    });
}

// Close lightbox with the 'Escape' key for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});