let currentIndex = 0;

function prevImage() {
    const carouselItems = document.getElementsByClassName('carousel-item');
    carouselItems[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + carouselItems.length - 1) % carouselItems.length;
    carouselItems[currentIndex].style.display = 'block';
}

function nextImage() {
    const carouselItems = document.getElementsByClassName('carousel-item');
    carouselItems[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    nextImage();
});
