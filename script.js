document.addEventListener('DOMContentLoaded', () => {
    const filterLinks = document.querySelectorAll('nav a');
    const videos = document.querySelectorAll('.video');

    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-filter');
            videos.forEach(video => {
                if (filter === 'all' || video.getAttribute('data-category') === filter) {
                    video.style.display = 'block';
                } else {
                    video.style.display = 'none';
                }
            });
        });
    });
});const lightbox = document.querySelector('.lightbox');
const lightboxVideo = document.querySelector('#lightbox-video');
const closeLightboxBtn = document.querySelector('.close-lightbox-btn');
const lightboxBtns = document.querySelectorAll('.lightbox-btn');

lightboxBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const videoSrc = e.target.parentNode.querySelector('video').src;
        lightboxVideo.src = videoSrc;
        lightbox.style.display = 'block';
    });
});

closeLightboxBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.style.display = 'none';
    }
});
