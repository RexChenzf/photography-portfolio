// 摄影作品幻灯片 - Yan Ming 风格

(function($) {
    'use strict';
    
    // 配置 - 自动加载 images/ 目录
    var settings = {
        path: 'images/',
        speed: 2000,
        timeout: 0 // 手动切换
    };
    
    var currentIndex = 0;
    var $slides, $container;
    
    // 自动扫描 images/ 目录
    function scanImages() {
        var images = [];
        
        // 预设的图片列表 - 可以在这里添加你的图片
        // 也可以通过 AJAX 获取目录
        var fileList = [
            'IMG_9015 2.JPG',
            'IMG_9298 2.JPG', 
            'IMG_9360 2.JPG',
            'IMG_9472 2.JPG',
            'RIMG0014的副本.JPG',
            'dji_fly_20260123_115158_724_1769140428831_photo_optimized.JPG'
        ];
        
        return fileList;
    }
    
    // 初始化幻灯片
    function init() {
        var images = scanImages();
        
        if (images.length === 0) {
            $('#slideshow').html('<p style="text-align:center;color:#999;">暂无作品</p>');
            return;
        }
        
        // 构建 HTML
        var html = '';
        images.forEach(function(img, i) {
            html += '<img src="' + settings.path + img + '" alt="作品 ' + (i+1) + '" class="slide-img">';
        });
        
        $('#slideshow').html(html);
        $slides = $('#slideshow img');
        $container = $('#slideshow');
        
        // 默认显示第一张
        $slides.hide().first().show();
        
        // 绑定切换事件
        $('#prev').click(function(e) {
            e.preventDefault();
            navigate(-1);
        });
        
        $('#next').click(function(e) {
            e.preventDefault();
            navigate(1);
        });
        
        console.log('📷 已加载 ' + images.length + ' 张作品');
    }
    
    // 切换图片
    function navigate(direction) {
        var $current = $slides.eq(currentIndex);
        var $next;
        
        if (direction > 0) {
            currentIndex = (currentIndex + 1) % $slides.length;
        } else {
            currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
        }
        
        $next = $slides.eq(currentIndex);
        
        // 淡入切换效果
        $current.fadeOut(500);
        $next.fadeIn(500);
    }
    
    // 页面加载完成后初始化
    $(document).ready(function() {
        // 等待 DOM 就绪
        setTimeout(init, 100);
    });
    
})(jQuery);