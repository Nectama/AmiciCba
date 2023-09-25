// Mobile hamburger menu function

function hamburgerMenu() {
    const menuItems = document.getElementById("menuLinks");
    const overlay = document.getElementById("menuOverlay");
    
    menuItems.classList.toggle('show');
    overlay.style.display = menuItems.classList.contains('show') ? 'block' : 'none';
}

document.addEventListener("click", function (event) {
    const menu = document.getElementById("menuLinks");
    const icon = document.querySelector(".icon");
    const overlay = document.getElementById("menuOverlay");

    // Check if the clicked element is outside the menu and the icon
    if (
        !menu.contains(event.target) &&
        !icon.contains(event.target)
    ) {
        menu.classList.remove('show');
        overlay.style.display = 'none';
    }
});