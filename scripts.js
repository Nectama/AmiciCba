// Mobile hamburger menu function

function hamburgerMenu() {
    const menuItems = document.getElementById("menuLinks");
    menuItems.classList.toggle('show');
}

// Close the menu when clicking outside
document.addEventListener("click", function (event) {
    const menu = document.getElementById("menuLinks");
    const icon = document.querySelector(".icon");

    // Check if the clicked element is outside the menu and the icon
    if (
        !menu.contains(event.target) &&
        !icon.contains(event.target)
    ) {
        menu.classList.remove('show');
    }
});