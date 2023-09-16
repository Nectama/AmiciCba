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

function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Adjust this threshold to control when the fade-in effect triggers
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
}

window.onload = function gallery() {

    for (let i = 1; i < 91; i += 3) {
        const gallery = document.getElementById('gallery');

        var contenedorImags = document.createElement("div");
        contenedorImags.className = "gallery-module";

        var imgGrande = document.createElement("img");
        imgGrande.setAttribute("src", `./images/Fotos/${i}.jpg`);
        imgGrande.className = "big-image";

        var contenedorImagChicas = document.createElement("div");
        contenedorImagChicas.className = "small-images"

        var imgChica1 = document.createElement("img");
        imgChica1.setAttribute("src", `./images/Fotos/${i + 1}.jpg`);

        var imgChica2 = document.createElement("img");
        imgChica2.setAttribute("src", `./images/Fotos/${i + 2}.jpg`);

        if (gallery) {
            gallery.appendChild(contenedorImags);
            if (i % 2) {
                contenedorImags.appendChild(imgGrande);
                contenedorImags.appendChild(contenedorImagChicas);
            } else {
                contenedorImags.appendChild(contenedorImagChicas);
                contenedorImags.appendChild(imgGrande);
            }
            contenedorImagChicas.appendChild(imgChica1);
            contenedorImagChicas.appendChild(imgChica2);
        }
    }
}


