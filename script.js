'use strict';

/* === 由 build.py 自动生成，请勿手动修改 === */
var images = [
    'IMG_9015 2.JPG',
    'IMG_9298 2.JPG',
    'IMG_9360 2.JPG',
    'IMG_9472 2.JPG',
    'RIMG0014的副本.JPG',
    'dji_fly_20260123_115158_724_1769140428831_photo_optimized.JPG'
];

var current = 0;
var slides = [];

function buildSlideshow() {
    var container = document.getElementById('slideshow');
    if (!container) return;

    container.innerHTML = '';
    slides = [];

    images.forEach(function(name, i) {
        var img = document.createElement('img');
        img.src = 'images/' + name;
        img.alt = 'Photo ' + (i + 1);
        img.className = 'slide-img';
        img.style.display = i === 0 ? 'block' : 'none';
        container.appendChild(img);
        slides.push(img);
    });
}

function updateCounter() {
    var counter = document.getElementById('counter');
    if (counter) {
        counter.textContent = (current + 1) + ' / ' + slides.length;
    }
}

function goTo(index) {
    if (slides.length === 0) return;
    slides[current].style.display = 'none';
    current = (index + slides.length) % slides.length;
    slides[current].style.display = 'block';
    updateCounter();
}

document.addEventListener('DOMContentLoaded', function() {
    buildSlideshow();

    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    if (prev) prev.addEventListener('click', function(e) {
        e.preventDefault();
        goTo(current - 1);
    });

    if (next) next.addEventListener('click', function(e) {
        e.preventDefault();
        goTo(current + 1);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    });

    updateCounter();
    console.log('Chen ZhuoFeng Photography — ' + slides.length + ' photos loaded');
});
