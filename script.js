const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('welcome-overlay');
const audio = document.getElementById('bgMusic');

startBtn.addEventListener('click', () => {
    // 1. تشغيل الصوت فوراً مع الكليك
    audio.play().then(() => {
        console.log("Music is playing!");
    }).catch(error => {
        console.log("Playback failed:", error);
    });

   // 2. إخفاء الستارة
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        setInterval(createFlower, 450);
    }, 500);
});

function tryPlayMusic() {
    // محاولة التشغيل
    audio.play().then(() => {
        // لو نجح التشغيل، نمسح كل الـ Listeners عشان نوفر Performance
        console.log("Music started successfully!");
        removeListeners();
    }).catch(error => {
        // لو فشل (بسبب الـ Autoplay block) بنستنى الحركة الجاية
        console.log("Playback blocked by browser, waiting for next interaction...");
    });
}

function removeListeners() {
    window.removeEventListener('scroll', tryPlayMusic);
    window.removeEventListener('click', tryPlayMusic);
    window.removeEventListener('touchstart', tryPlayMusic);
}

// بنخلي الموقع "يتحرش" بالمتصفح مع كل حركة لحد ما يرضى يشغل الصوت
window.addEventListener('scroll', tryPlayMusic);
window.addEventListener('click', tryPlayMusic);
window.addEventListener('touchstart', tryPlayMusic);

// سطر إضافي للأمان: تفعيل الصوت لو اللينك فيه تفاعل سابق
document.addEventListener("DOMContentLoaded", tryPlayMusic);

// تفعيل السلايدر
const swiper = new Swiper(".mySwiper", {
    autoHeight: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// وظيفة إنشاء بتلات الورد
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 25 + 20 + 'px';
    flower.style.width = size;
    flower.style.height = size;
    const duration = Math.random() * 3 + 4;
    flower.style.animationDuration = duration + 's';
    
    document.body.appendChild(flower);
    setTimeout(() => { flower.remove(); }, duration * 1000);
}

// توليد الورد كل نصف ثانية
setInterval(createFlower, 500);
