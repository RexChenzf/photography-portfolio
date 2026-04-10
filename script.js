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

// ===== 动态加载 images/ 目录的图片 =====
const photoGrid = document.getElementById('photoGrid');

// 图片配置 - 按文件名映射标题
const photoConfig = {
    'IMG_2857.HEIC': { title: '生活随拍', desc: 'iPhone 摄影' },
    'IMG_2857.mov': { title: '视频记录', desc: 'iPhone 视频' },
    'dji_fly_20260123_115158_724_1769140428831_photo_optimized.JPG': { title: '航拍风光', desc: '无人机拍摄' }
};

// 获取文件扩展名
function getExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

// 判断是否是图片格式
function isImageFile(filename) {
    const ext = getExtension(filename);
    return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'heic', 'heif'].includes(ext);
}

// 判断是否是视频格式
function isVideoFile(filename) {
    const ext = getExtension(filename);
    return ['mov', 'mp4', 'webm'].includes(ext);
}

// 检测浏览器是否支持 HEIC
function supportsHeic() {
    const img = document.createElement('img');
    const canPlay = img.currentSrc?.toLowerCase().includes('.heic') || 
                    document.pictureElement !== undefined;
    // 也可以通过 Modernizr 或特征检测
    // Safari 14+ 原生支持 HEIC
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isEdge = /Edg/i.test(navigator.userAgent);
    return isSafari; // Safari 原生支持，其他浏览器需要转换
}

// 创建图片卡片 HTML
function createPhotoCard(filename, config) {
    const ext = getExtension(filename);
    const card = document.createElement('div');
    card.className = 'photo-card';
    
    let mediaHtml = '';
    
    if (isVideoFile(filename)) {
        // 视频文件
        mediaHtml = `
            <video class="photo-media" controls playsinline preload="metadata">
                <source src="images/${filename}" type="video/quicktime">
                您的浏览器不支持视频播放
            </video>
        `;
    } else {
        // 图片文件 - HEIC 直接使用，Safari 支持，其他浏览器通过 caniuse 检测
        const mimeType = ext === 'heic' ? 'image/heic' : `image/${ext === 'jpg' ? 'jpeg' : ext}`;
        mediaHtml = `
            <img class="photo-media" 
                 src="images/${filename}" 
                 alt="${config.title}"
                 loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="photo-fallback" style="display:none;">
                <span>无法加载图片</span>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="photo-media-wrapper">
            ${mediaHtml}
        </div>
        <div class="photo-info">
            <h3>${config.title}</h3>
            <p>${config.desc || '摄影作品'}</p>
        </div>
    `;
    
    return card;
}

// 加��所有图片
function loadPhotos() {
    const files = Object.keys(photoConfig);
    
    if (files.length === 0) {
        photoGrid.innerHTML = '<p style="text-align:center;color:#999;">暂无作品</p>';
        return;
    }
    
    files.forEach(filename => {
        const config = photoConfig[filename];
        const card = createPhotoCard(filename, config);
        photoGrid.appendChild(card);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    loadPhotos();
    console.log('📷 摄影作品集已加载 ' + Object.keys(photoConfig).length + ' 张作品');
});

// 点击卡片弹出大图（可选功能）
document.addEventListener('click', function(e) {
    const card = e.target.closest('.photo-card');
    if (card && !e.target.closest('video')) {
        // 可以在这里添加大图预览功能
        const img = card.querySelector('.photo-media');
        if (img && img.tagName === 'IMG') {
            // 简单的点击放大效果
            if (img.style.transform === 'scale(1.1)') {
                img.style.transform = 'scale(1)';
            } else {
                img.style.transform = 'scale(1.1)';
                img.style.transition = 'transform 0.3s ease';
            }
        }
    }
});