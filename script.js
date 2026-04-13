'use strict';

/* === 由 build.py 自动生成，请勿手动修改 === */
var images = [
    'IMG_2967.jpeg',
    'IMG_2782.jpeg',
    'IMG_2970.jpeg',
    'IMG_3088.jpeg',
    'IMG_5522.jpg',
    'dji_fly_20260123_115158_724_1769140428831_photo_optimized.JPG',
    'IMG_9472 2.JPG',
    'IMG_9360 2.JPG',
    'IMG_9298 2.JPG',
    'IMG_9015 2.JPG',
    'RIMG0014的副本.JPG'
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

function buildHomeFeatured() {
    var container = document.getElementById('home-featured');
    if (!container || images.length === 0) return;
    container.innerHTML = '';
    var img = document.createElement('img');
    img.src = 'images/' + images[images.length - 1];
    img.alt = 'Chen ZhuoFeng';
    img.id = 'featured-img';
    container.appendChild(img);
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

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(function(el) {
        el.classList.remove('active');
    });
    document.querySelectorAll('#menu a[data-tab]').forEach(function(el) {
        el.classList.remove('active');
    });
    var tab = document.getElementById('tab-' + tabId);
    var link = document.querySelector('#menu a[data-tab="' + tabId + '"]');
    if (tab) tab.classList.add('active');
    if (link) link.classList.add('active');
    location.hash = tabId;
    if (tabId === 'gallery') {
        if (slides.length === 0) {
            buildSlideshow();
            updateCounter();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    // 首页封面图
    buildHomeFeatured();

    // Tab 切换
    document.querySelectorAll('#menu a[data-tab]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // 幻灯片导航
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

    // 键盘支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    });

    // Hash 路由
    switchTab(location.hash.slice(1) || 'home');

    console.log('Chen ZhuoFeng Photography — 11 photos loaded');
});
