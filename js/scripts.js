// =======================================
// Shusan Gautam Website Scripts
// =======================================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Smooth Scrolling
    // ===============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });
    });


    // ===============================
    // Fade-in Animation
    // ===============================
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".card, .about, .hero").forEach(section => {
        observer.observe(section);
    });


    // ===============================
    // Back To Top Button
    // ===============================

    const topButton = document.createElement("button");

    topButton.id = "backToTop";

    topButton.innerHTML = "↑";

    document.body.appendChild(topButton);

    topButton.style.position = "fixed";
    topButton.style.right = "20px";
    topButton.style.bottom = "20px";
    topButton.style.width = "50px";
    topButton.style.height = "50px";
    topButton.style.borderRadius = "50%";
    topButton.style.border = "none";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.fontSize = "20px";
    topButton.style.background = "#38bdf8";
    topButton.style.color = "#000";
    topButton.style.boxShadow = "0 10px 20px rgba(0,0,0,.3)";
    topButton.style.zIndex = "999";


    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });


    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });


    // ===============================
    // Active Navigation Link
    // ===============================

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        document.querySelectorAll("section").forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    // ===============================
    // Image Hover Effect
    // ===============================

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.04)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });


    // ===============================
    // Footer Year
    // ===============================

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});
