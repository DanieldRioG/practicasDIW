addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("wrapper");

    let cuadradoArriba = document.getElementById("cuadrado1");
    let cuadradoIzquierda = document.getElementById("cuadrado2");
    let cuadradoCentro = document.getElementById("centro");
    let cuadradoDerecha = document.getElementById("cuadrado3");
    let cuadradoAbajo = document.getElementById("cuadrado4");

    let posA = 0;
    let posI = 0;
    let posD = -0;

    cuadradoArriba.addEventListener("mouseover", () => {
        posA = posA + 50;
        contenedor.style.transform = "scale(1.1)";
        contenedor.style.transform = "translateX(" + posI + "px) translateX(" + posD + "px) translateY(" + posA + "px)";
        contenedor.style.transition = "0.3s ease-in-out";

    });

    cuadradoIzquierda.addEventListener("mouseover", () => {
        posI = posI + 50;
        contenedor.style.transform = "translateX(" + posI + "px) translateY(" + posA + "px) translateX(" + posD + "px)";
        contenedor.style.transition = "0.3s ease-in-out";

    });

    cuadradoDerecha.addEventListener("mouseover", () => {
        posD = posD - 50;
        contenedor.style.transform = "translateX(" + posD + "px) translateY(" + posA + "px) translateX(" + posI + "px)";
        contenedor.style.transition = "0.3s ease-in-out";

    });

    cuadradoAbajo.addEventListener("mouseover", () => {
        posA = posA - 50;
        contenedor.style.transform = "translateX(" + posI + "px) translateX(" + posD + "px) translateY(" + posA + "px)";
        contenedor.style.transition = "0.3s ease-in-out";
    });
});