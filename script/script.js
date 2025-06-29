// Initialize WOW.js
new WOW().init();

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // --- NEW: Testimonial Carousel Logic ---
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            // Add fade-out animation to the current item
            if (i === currentIndex && i !== index) {
                item.classList.add('fade-out');
                item.classList.remove('fade-in');
            }
        });

        // Use a timeout to allow the fade-out animation to complete
        setTimeout(() => {
            testimonials.forEach((item, i) => {
                item.classList.add('hidden');
                item.classList.remove('fade-out', 'fade-in');
            });

            // Show the new item with a fade-in animation
            testimonials[index].classList.remove('hidden');
            testimonials[index].classList.add('fade-in');
            
            currentIndex = index;
        }, 500); // This timeout should match the CSS animation duration
    }

    prevButton.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(newIndex);
    });

    nextButton.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(newIndex);
    });

    // Optional: Auto-play the carousel
    setInterval(() => {
        nextButton.click();
    }, 7000); // Change testimonial every 7 seconds
});


// ADD THIS CODE TO THE END OF YOUR script/script.js FILE

document.addEventListener('DOMContentLoaded', function () {
    // --- Gallery Filter Logic ---
    const filterContainer = document.querySelector('#gallery-filters');
    if (filterContainer) {
        const filterButtons = filterContainer.querySelectorAll('.gallery-filter-button');
        const galleryItems = document.querySelectorAll('#gallery-grid .gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Set active class on button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    item.classList.add('hidden-item'); // Hide all items initially
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        // Use a timeout to allow for a small visual effect if desired, or just show
                        setTimeout(() => {
                           item.classList.remove('hidden-item');
                        }, 10);
                    }
                });
            });
        });
    }

    // --- Initialize GLightbox ---
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        width: '90vw',
        height: '80vh'
    });
});