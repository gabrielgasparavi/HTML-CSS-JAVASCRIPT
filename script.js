/* =========================================
   AUREA TRAVEL JAVASCRIPT
========================================= */


/* FIND THE TRAVEL FORM */

const travelForm = document.getElementById("travelForm");

const formMessage = document.getElementById("formMessage");


/* FORM SUBMISSION */

travelForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!travelForm.reportValidity()) {
        return;
    }

    formMessage.textContent =
        "Ačiū! Jūsų forma užpildyta. Norint išsiųsti užklausą, reikia prijungti el. pašto paslaugą arba serverį.";

});


/* UPDATE THE COPYRIGHT YEAR */

const currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;


/* SMOOTH NAVIGATION FOR MENU LINKS */

const menuLinks = document.querySelectorAll(
    '.side-menu-item, .nav-link, .footer-navigation a'
);

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const target = link.getAttribute("href");

        if (target && target.startsWith("#")) {

            const section = document.querySelector(target);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        }

    });

});