// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupScrollEffects();
});

// 导航栏功能
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有active类
            navLinks.forEach(l => l.classList.remove('active'));

            // 给当前点击的链接添加active类
            this.classList.add('active');
        });
    });

    // 页面加载时根据URL设置active链接
    setActiveNavLink();

    // 监听窗口变化
    window.addEventListener('hashchange', setActiveNavLink);
}

function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 平滑滚动效果
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有卡片元素
    document.querySelectorAll('.highlight-card, .project-card, .award-item, .job-item, .project-detail').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 平滑滚动到联系部分
document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 页面加载时的动画
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// 添加页面过渡效果
if (document.readyState === 'loading') {
    document.body.style.opacity = '0';
}

// 返回顶部按钮（可选）
function setupScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #0066cc;
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 999;
        font-size: 20px;
        font-weight: bold;
    `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

setupScrollToTop();

// 联系方式复制功能
document.querySelectorAll('.contact-item span').forEach(item => {
    if (item.textContent.includes('WeChat')) {
        item.style.cursor = 'pointer';
        item.title = '点击复制微信号';
        item.addEventListener('click', function() {
            const wechat = 'Leora-LI';
            navigator.clipboard.writeText(wechat).then(() => {
                const originalText = this.textContent;
                this.textContent = '已复制！';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    }
});

// 添加焦点管理（辅助功能）
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #0066cc';
        this.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

console.log('网站已加载完成');
