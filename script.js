document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Anna Buffet!");
    // Add interactive functionality if needed
});
const sliderWrapper = document.querySelector('.slider-wrapper');

sliderWrapper.addEventListener('mouseenter', () => {
    sliderWrapper.style.animationPlayState = 'paused';
});

sliderWrapper.addEventListener('mouseleave', () => {
    sliderWrapper.style.animationPlayState = 'running';
});
const images = document.querySelectorAll(".menu-image");
const titles = [
    "Hải sản",
    "Thịt Bò",
    "Thịt Heo",
    "Lẩu",
    "Sushi/Sashimi",
    "Nước"
];
const descriptions = [
    "Tươi ngon từ biển cả: tôm, cua, hàu, bạch tuộc và nhiều loại hải sản cao cấp khác, mang đến hương vị đậm đà, chuẩn vị.",
    "Thịt bò được chọn lọc kỹ càng, ướp gia vị đặc biệt, nướng hoặc chế biến tạo nên vị thơm ngon không thể chối từ.",
    "Thịt heo được chọn lọc kỹ càng, ướp gia vị đặc biệt, nướng hoặc chế biến tạo nên vị thơm ngon không thể chối từ.",
    "Đậm đà với các loại nước lẩu đặc biệt như lẩu Thái, lẩu nấm, lẩu hải sản, kết hợp với các loại rau và topping đa dạng.",
    "Sushi/Sashimi tươi ngon với cá hồi, cá ngừ, trứng cá và cơm cuộn, mang đến phong vị Nhật Bản đầy tinh tế.",
    "Đa dạng các loại nước uống từ nước ngọt, nước ép trái cây tươi đến bia và cocktail, phù hợp mọi khẩu vị."
];

const titleElement = document.getElementById("menu-title");
const descriptionElement = document.getElementById("menu-description");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;

function updateSlide(index) {
    images.forEach((image, i) => {
        image.classList.remove("active");
        if (i === index) {
            image.classList.add("active");
        }
    });

    titleElement.textContent = titles[index];
    descriptionElement.textContent = descriptions[index];
}

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide(currentIndex);
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide(currentIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide(currentIndex);
}, 5000);

// Initialize first slide
updateSlide(currentIndex);
