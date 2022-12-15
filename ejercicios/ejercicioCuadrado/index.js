addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("wrapper");

    let cuadradoArriba = document.getElementById("cuadrado1");
    let cuadradoIzquierda = document.getElementById("cuadrado2");
    let cuadradoCentro = document.getElementById("centro");
    let cuadradoDerecha = document.getElementById("cuadrado3");
    let cuadradoAbajo = document.getElementById("cuadrado4");

    cuadradoArriba.addEventListener("click", () => {
        contenedor.classList.add("moverAbajo");
    });
});