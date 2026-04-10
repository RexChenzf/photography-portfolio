// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 图片懒加载（当添加真实图片时启用）
const photos = document.querySelectorAll('.photo-card');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

photos.forEach(photo => {
    photo.style.opacity = '0';
    photo.style.transform = 'translateY(30px)';
    photo.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(photo);
});

// 添加点击效果到作品卡片
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', function() {
        // 这里可以添加全屏查看图片的功能
        alert('这里可以展示大图预览功能！');
    });
});

console.log('📷 摄影作品集网站已加载！');
