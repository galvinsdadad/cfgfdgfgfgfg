document.querySelectorAll('.scroll-container').forEach((scrollContainer) => {
    const scrollLeftBtn = scrollContainer.querySelector('.scroll-btn.left');
    const scrollRightBtn = scrollContainer.querySelector('.scroll-btn.right');
    const container = scrollContainer.querySelector('.container');

    // Scroll Left
    scrollLeftBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -350, // Adjust the scroll amount
            behavior: 'smooth'
        });
    });

    // Scroll Right
    scrollRightBtn.addEventListener('click', () => {
        container.scrollBy({
            left: 350, // Adjust the scroll amount
            behavior: 'smooth'
        });
    });
});