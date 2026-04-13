#!/usr/bin/env python3
"""
build.py — 扫描 images/ 目录，生成 script.js 中的图片列表
用法: python3 build.py
"""
import os
import re

SCRIPT_JS = 'script.js'
IMAGES_DIR = 'images'

# 支持的图片/视频格式
EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.heic', '.mov', '.mp4', '.bmp'}

def get_images():
    files = []
    if os.path.isdir(IMAGES_DIR):
        for f in sorted(os.listdir(IMAGES_DIR)):
            if os.path.isfile(os.path.join(IMAGES_DIR, f)):
                ext = os.path.splitext(f)[1].lower()
                if ext in EXTENSIONS:
                    files.append(f)
    return files

def escape_js_string(s):
    """转义 JS 字符串中的特殊字符"""
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '\\r')

def generate_script(images):
    lines = []
    lines.append("'use strict';")
    lines.append("")
    lines.append("/* === 由 build.py 自动生成，请勿手动修改 === */")
    lines.append("var images = [")

    escaped = [f"    '{escape_js_string(img)}'" for img in images]
    lines.append(',\n'.join(escaped))

    lines.append("];")
    lines.append("")
    lines.append("var current = 0;")
    lines.append("var slides = [];")
    lines.append("")
    lines.append("function buildSlideshow() {")
    lines.append("    var container = document.getElementById('slideshow');")
    lines.append("    if (!container) return;")
    lines.append("")
    lines.append("    container.innerHTML = '';")
    lines.append("    slides = [];")
    lines.append("")
    lines.append("    images.forEach(function(name, i) {")
    lines.append("        var img = document.createElement('img');")
    lines.append("        img.src = 'images/' + name;")
    lines.append("        img.alt = 'Photo ' + (i + 1);")
    lines.append("        img.className = 'slide-img';")
    lines.append("        img.style.display = i === 0 ? 'block' : 'none';")
    lines.append("        container.appendChild(img);")
    lines.append("        slides.push(img);")
    lines.append("    });")
    lines.append("}")
    lines.append("")
    lines.append("function updateCounter() {")
    lines.append("    var counter = document.getElementById('counter');")
    lines.append("    if (counter) {")
    lines.append("        counter.textContent = (current + 1) + ' / ' + slides.length;")
    lines.append("    }")
    lines.append("}")
    lines.append("")
    lines.append("function goTo(index) {")
    lines.append("    if (slides.length === 0) return;")
    lines.append("    slides[current].style.display = 'none';")
    lines.append("    current = (index + slides.length) % slides.length;")
    lines.append("    slides[current].style.display = 'block';")
    lines.append("    updateCounter();")
    lines.append("}")
    lines.append("")
    lines.append("document.addEventListener('DOMContentLoaded', function() {")
    lines.append("    buildSlideshow();")
    lines.append("")
    lines.append("    var prev = document.getElementById('prev');")
    lines.append("    var next = document.getElementById('next');")
    lines.append("")
    lines.append("    if (prev) prev.addEventListener('click', function(e) {")
    lines.append("        e.preventDefault();")
    lines.append("        goTo(current - 1);")
    lines.append("    });")
    lines.append("")
    lines.append("    if (next) next.addEventListener('click', function(e) {")
    lines.append("        e.preventDefault();")
    lines.append("        goTo(current + 1);")
    lines.append("    });")
    lines.append("")
    lines.append("    document.addEventListener('keydown', function(e) {")
    lines.append("        if (e.key === 'ArrowLeft') goTo(current - 1);")
    lines.append("        if (e.key === 'ArrowRight') goTo(current + 1);")
    lines.append("    });")
    lines.append("")
    lines.append("    updateCounter();")
    lines.append("    console.log('Chen ZhuoFeng Photography — ' + slides.length + ' photos loaded');")
    lines.append("});")

    return '\n'.join(lines) + '\n'

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
        print(f"\nscript.js 已更新 ({len(images)} 个文件)。")

if __name__ == '__main__':
    main()
