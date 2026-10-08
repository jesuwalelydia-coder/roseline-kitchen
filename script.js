document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       HERO SLIDER
    ========================== */

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");

    let currentSlide = 0;
    let slideInterval;


    function showSlide(index) {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });


        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }


        if (slides[currentSlide]) {
            slides[currentSlide].classList.add("active");
        }

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }

    }


    function nextSlide() {
        showSlide(currentSlide + 1);
    }


    function previousSlide() {
        showSlide(currentSlide - 1);
    }


    function startSlider() {

        clearInterval(slideInterval);

        slideInterval = setInterval(function () {
            nextSlide();
        }, 8000);

    }


    if (nextButton) {

        nextButton.addEventListener("click", function () {

            nextSlide();

            startSlider();

        });

    }


    if (prevButton) {

        prevButton.addEventListener("click", function () {

            previousSlide();

            startSlider();

        });

    }


    dots.forEach((dot, index) => {

        dot.addEventListener("click", function () {

            showSlide(index);

            startSlider();

        });

    });


    /* Start hero slider */

    if (slides.length > 0) {

        showSlide(0);

        startSlider();

    }



    /* =========================
       HOME MENU HORIZONTAL SCROLL
    ========================== */

    const menuScroll = document.getElementById("menuScroll");
    const menuLeft = document.getElementById("menuScrollLeft");
    const menuRight = document.getElementById("menuScrollRight");


    if (menuScroll && menuRight) {

        menuRight.addEventListener("click", function () {

            menuScroll.scrollBy({
                left: 350,
                behavior: "smooth"
            });

        });

    }


    if (menuScroll && menuLeft) {

        menuLeft.addEventListener("click", function () {

            menuScroll.scrollBy({
                left: -350,
                behavior: "smooth"
            });

        });

    }



    /* =========================
       MENU PAGE FOOD SCROLL
    ========================== */

    const scrollLeftButtons = document.querySelectorAll(".food-scroll-left");
    const scrollRightButtons = document.querySelectorAll(".food-scroll-right");


    scrollLeftButtons.forEach((button) => {

        button.addEventListener("click", function () {

            const targetId = button.getAttribute("data-target");
            const targetRow = document.getElementById(targetId);

            if (targetRow) {

                targetRow.scrollBy({
                    left: -380,
                    behavior: "smooth"
                });

            }

        });

    });


    scrollRightButtons.forEach((button) => {

        button.addEventListener("click", function () {

            const targetId = button.getAttribute("data-target");
            const targetRow = document.getElementById(targetId);

            if (targetRow) {

                targetRow.scrollBy({
                    left: 380,
                    behavior: "smooth"
                });

            }

        });

    });



    /* =========================
       MOBILE MENU
    ========================== */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");

        });

    }



    /* Close mobile menu after clicking a link */

    const navLinks = document.querySelectorAll(".navbar a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navbar) {

                navbar.classList.remove("active");

            }

        });

    });



    /* =========================
       CURRENT YEAR
    ========================== */

    const currentYear = document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }

});