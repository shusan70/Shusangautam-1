let currentIndex = 0;

const images = Array.from(document.querySelectorAll(".gallery img"));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function showImage(index) {
    currentIndex = index;

    if (currentIndex < 0)
        currentIndex = images.length - 1;

    if (currentIndex >= images.length)
        currentIndex = 0;

    lightboxImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        showImage(index);
    });
});

document.querySelector(".close").addEventListener("click", () => {
    lightbox.style.display = "none";
});

document.querySelector(".prev").addEventListener("click", () => {
    showImage(currentIndex - 1);
});

document.querySelector(".next").addEventListener("click", () => {
    showImage(currentIndex + 1);
});

lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown", function(e) {

    if (lightbox.style.display !== "flex")
        return;

    if (e.key === "Escape")
        lightbox.style.display = "none";

    if (e.key === "ArrowLeft")
        showImage(currentIndex - 1);

    if (e.key === "ArrowRight")
        showImage(currentIndex + 1);
});
