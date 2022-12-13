document.addEventListener("DOMContentLoaded", () => {
    const pixel = document.querySelector(".pixel");

    pixel.addEventListener("click", mover);

    function mover() {
        pixel.style.top = Math.random() * 100;
        pixel.style.left = Math.random() * 100;
    }
});
