// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Smooth fade-in animation for sections
    gsap.from("section", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
    });

    // Navbar shrink effect on scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#ddd";
            header.style.transition = "background-color 0.3s ease-in-out";
        } else {
            header.style.backgroundColor = "#f5f5f5";
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("ul.headnav li a").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Button hover effect using GSAP
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("mouseenter", () => {
            gsap.to(button, { scale: 1.1, duration: 0.2 });
        });
        button.addEventListener("mouseleave", () => {
            gsap.to(button, { scale: 1, duration: 0.2 });
        });
    });
});
