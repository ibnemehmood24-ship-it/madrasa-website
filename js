// مدرسے کی ویب سائٹ - JavaScript

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Console Message
console.log("خوش آمدید ہمارے مدرسے کی ویب سائٹ پر!");

window.addEventListener('load', function() {
    console.log("ویب سائٹ کامیابی سے لوڈ ہو گئی!");
});
