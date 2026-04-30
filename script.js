// ===========================
// GX挑战者协会官网 JavaScript
// 活力彩色风格设计
// ===========================

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initFAQ();
    initContactForm();
    initActiveLink();
});

// ===== 导航菜单功能 =====
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // 汉堡菜单点击事件
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // 点击导航链接时关闭菜单
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // 滚动时隐藏菜单
    document.addEventListener('scroll', function() {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
}

// ===== FAQ 手风琴功能 =====
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // 关闭其他项
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // 切换当前项
                item.classList.toggle('active');
            });
        }
    });
}

// ===== 联系表单功能 =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // 获取表单数据
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // 验证表单
            if (!validateForm(data)) {
                alert('请填写所有必填项目！');
                return;
            }

            // 模拟提交（实际项目中应该发送到服务器）
            console.log('表单数据:', data);

            // 显示成功消息
            form.style.display = 'none';
            if (successMessage) {
                successMessage.style.display = 'block';
            }

            // 3秒后重置表单
            setTimeout(function() {
                form.reset();
                form.style.display = 'block';
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
            }, 3000);
        });
    }
}

// ===== 表单验证 =====
function validateForm(data) {
    return data.name && data.email && data.subject && data.message;
}

// ===== 设置活跃导航链接 =====
function initActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== 平滑滚动到顶部按钮 =====
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #FF6B6B;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
    `;

    document.body.appendChild(button);

    // 滚动事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    // 点击滚回顶部
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 鼠标悬停效果
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = '#FF5555';
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = '#FF6B6B';
        button.style.transform = 'scale(1)';
    });
}

// 页面加载完成后创建回到顶部按钮
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createScrollToTopButton);
} else {
    createScrollToTopButton();
}

// ===== 响应式菜单样式 =====
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: #FF6B6B;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav-menu.active {
            display: flex;
        }

        .nav-menu a {
            padding: 0.75rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-menu a:last-child {
            border-bottom: none;
        }
    }
`;
document.head.appendChild(style);

// ===== 页面加载动画 =====
window.addEventListener('load', function() {
    // 添加页面加载完成的效果
    document.body.style.opacity = '1';
});

// 设置初始透明度
document.body.style.opacity = '0.95';

// ===== 数据统计（可选） =====
// 可以在这里添加页面浏览统计或其他分析
function trackPageView() {
    const pageTitle = document.title;
    console.log('访问页面: ' + pageTitle);
    // 实际项目中可以发送到分析服务器
}

trackPageView();

// ===== 导出功能（如需要） =====
console.log('GX挑战者协会官网 - 已加载');
console.log('技术栈: HTML + CSS + JavaScript');
console.log('风格: 活力彩色设计');
