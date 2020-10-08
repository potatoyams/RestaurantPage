const burgerBtn = document.querySelector(".burger-menu");
const navLinkContainer = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
burgerBtn.addEventListener("click", () => {
    navLinkContainer.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkAnimation 0.5s ease ${index / 5 + 0.5}s forwards`;
        }
    })
});