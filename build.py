#!/usr/bin/env python3
"""
build.py — 扫描 images/ 目录，生成完整的 script.js
用法: python3 build.py
"""
import os

SCRIPT_JS = 'script.js'
IMAGES_DIR = 'images'

# 支持的图片格式
EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.heic', '.mov', '.mp4', '.bmp'}

def get_images():
    files = []
    if os.path.isdir(IMAGES_DIR):
        for f in os.listdir(IMAGES_DIR):
            path = os.path.join(IMAGES_DIR, f)
            if os.path.isfile(path):
                ext = os.path.splitext(f)[1].lower()
                if ext in EXTENSIONS:
                    files.append((os.path.getmtime(path), f))
    files.sort(key=lambda x: (-x[0], x[1]))  # mtime 倒序，同秒按文件名升序
    return [f for (_, f) in files]

def escape_js_string(s):
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '\\r')

def generate_script(images):
    count = len(images)
    esc_images = ',\n    '.join(["'" + escape_js_string(img) + "'" for img in images])
    if count == 0:
        esc_images = "''"

    return """'use strict';

/* === 由 build.py 自动生成，请勿手动修改 === */
var images = [
    {files}
];

var current = 0;
var slides = [];

function buildSlideshow() {{
    var container = document.getElementById('slideshow');
    if (!container) return;
    container.innerHTML = '';
    slides = [];
    images.forEach(function(name, i) {{
        var img = document.createElement('img');
        img.src = 'images/' + name;
        img.alt = 'Photo ' + (i + 1);
        img.className = 'slide-img';
        img.style.display = i === 0 ? 'block' : 'none';
        container.appendChild(img);
        slides.push(img);
    }});
}}

function buildHomeFeatured() {{
    var container = document.getElementById('home-featured');
    if (!container || images.length === 0) return;
    container.innerHTML = '';
    var img = document.createElement('img');
    img.src = 'images/' + images[images.length - 1];
    img.alt = 'Chen ZhuoFeng';
    img.id = 'featured-img';
    container.appendChild(img);
}}

function updateCounter() {{
    var counter = document.getElementById('counter');
    if (counter) {{
        counter.textContent = (current + 1) + ' / ' + slides.length;
    }}
}}

function goTo(index) {{
    if (slides.length === 0) return;
    slides[current].style.display = 'none';
    current = (index + slides.length) % slides.length;
    slides[current].style.display = 'block';
    updateCounter();
}}

function switchTab(tabId) {{
    document.querySelectorAll('.tab-content').forEach(function(el) {{
        el.classList.remove('active');
    }});
    document.querySelectorAll('#menu a[data-tab]').forEach(function(el) {{
        el.classList.remove('active');
    }});
    var tab = document.getElementById('tab-' + tabId);
    var link = document.querySelector('#menu a[data-tab="' + tabId + '"]');
    if (tab) tab.classList.add('active');
    if (link) link.classList.add('active');
    location.hash = tabId;
    if (tabId === 'gallery') {{
        if (slides.length === 0) {{
            buildSlideshow();
            updateCounter();
        }}
    }}
}}

document.addEventListener('DOMContentLoaded', function() {{

    // 首页封面图
    buildHomeFeatured();

    // Tab 切换
    document.querySelectorAll('#menu a[data-tab]').forEach(function(link) {{
        link.addEventListener('click', function(e) {{
            e.preventDefault();
            switchTab(this.getAttribute('data-tab'));
        }});
    }});

    // 幻灯片导航
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    if (prev) prev.addEventListener('click', function(e) {{
        e.preventDefault();
        goTo(current - 1);
    }});

    if (next) next.addEventListener('click', function(e) {{
        e.preventDefault();
        goTo(current + 1);
    }});

    // 键盘支持
    document.addEventListener('keydown', function(e) {{
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    }});

    // Hash 路由
    switchTab(location.hash.slice(1) || 'home');

    console.log('Chen ZhuoFeng Photography — {count} photos loaded');
}});
""".format(files=esc_images, count=count)

def main():
    images = get_images()
    print(f"发现 {len(images)} 个媒体文件:")
    for img in images:
        print(f"  {img}")

    new_content = generate_script(images)

    if os.path.exists(SCRIPT_JS):
        with open(SCRIPT_JS, 'r', encoding='utf-8') as f:
            old_content = f.read()
    else:
        old_content = ''

    if old_content == new_content:
        print(f"\nscript.js 已是最新，无需更新。")
    else:
        with open(SCRIPT_JS, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"\nscript.js 已更新（{len(images)} 个文件）。")

if __name__ == '__main__':
    main()
