AOS.init({
    duration: 1000,
    once: true
});

function moverCarrusel(direccion) {
    const carrusel = document.getElementById("carrusel");
    const item = carrusel.querySelector(".carrusel-item");
    const anchoItem = item.offsetWidth + 32;

    carrusel.scrollBy({
        left: direccion * anchoItem,
        behavior: 'smooth'
    });

    // Animación rebote
    carrusel.style.animation = "bounceScroll 0.4s";
    setTimeout(() => {
        carrusel.style.animation = "";
    }, 400);
}
