/* ===== LIGHTBOX ===== */
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");

let index = 0;

images.forEach((img,i)=>{
    img.addEventListener("click",()=>{
        index = i;
        openLightbox();
    });
});

function openLightbox(){
    lightbox.style.display="flex";
    lbImg.src = images[index].src;
}

function closeLightbox(){
    lightbox.style.display="none";
}

function next(){
    index = (index + 1) % images.length;
    lbImg.src = images[index].src;
}

function prev(){
    index = (index - 1 + images.length) % images.length;
    lbImg.src = images[index].src;
}

document.querySelector(".close").onclick = closeLightbox;
document.querySelector(".next").onclick = next;
document.querySelector(".prev").onclick = prev;

document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape") closeLightbox();
    if(e.key==="ArrowRight") next();
    if(e.key==="ArrowLeft") prev();
});

/* ===== SIMPLE PARTICLES (MATCH HOME STYLE) ===== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        dx:(Math.random()-0.5)*0.5,
        dy:(Math.random()-0.5)*0.5
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if(p.x<0 || p.x>canvas.width) p.dx *= -1;
        if(p.y<0 || p.y>canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});