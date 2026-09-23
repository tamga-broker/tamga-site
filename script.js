const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });
}
