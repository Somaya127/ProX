// ==========================================
// 1. Order Buttons - تغيير نص الأزرار عند النقر
// ==========================================
const orderButtons = document.querySelectorAll('.btn-main');

orderButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // تخزين النص الأصلي
        const originalText = button.textContent;
        
        // تغيير النص والمظهر
        button.textContent = 'تمت الإضافة للسلة ✓';
        button.style.backgroundColor = '#10b981';
        
        // منع النقر المتكرر
        button.disabled = true;
        
        // إعادة الزر لحالته الأصلية بعد 3 ثواني
        setTimeout(function() {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            button.disabled = false;
        }, 3000);
    });
});

// ==========================================
// 2. FAQ Section - إظهار وإخفاء الإجابات
// ==========================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
        // إغلاق جميع الأسئلة الأخرى
        faqItems.forEach(function(otherItem) {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // تبديل حالة السؤال المضغوط
        item.classList.toggle('active');
    });
});

// ==========================================
// 3. Light & Dark Mode - تبديل الوضع
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('.icon');

// التحقق من الوضع المحفوظ
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.textContent = '☀️';
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // تغيير الأيقونة
    if (body.classList.contains('dark-mode')) {
        icon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// ==========================================
// إضافات تحسينية (Bonus)
// ==========================================
// تأثير سلس عند التحميل
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// تتبع تمرير الصفحة
window.addEventListener('scroll', function() {
    const themeToggle = document.getElementById('themeToggle');
    if (window.scrollY > 100) {
        themeToggle.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
    } else {
        themeToggle.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    }
});

console.log('✅ JavaScript تم تحميله بنجاح!');
console.log('📱 جميع الوظائف جاهزة للعمل');