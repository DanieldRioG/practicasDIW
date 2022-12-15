addEventListener("DOMContentLoaded", () => {
    let boton1 = document.getElementById("arriba");
    let boton2 = document.getElementById("izquierda");
    let boton3 = document.getElementById("derecha");
    let boton4 = document.getElementById("abajo");

    let botonA = document.getElementById("a");
    let botonB = document.getElementById("b");
    let botonC = document.getElementById("c");

    let imagen = document.getElementById("lul");

    boton1.addEventListener("click", () => {
        imagen.classList.remove("animacion");
        window.requestAnimationFrame(function () {
            imagen.classList.add("animacion");
        });
    });

    boton2.addEventListener("click", () => {
        imagen.style.transform = "translateX(-70px) ";
        imagen.style.transition = "ease-in-out 0.5s";
    });

    boton3.addEventListener("click", () => {
        imagen.style.transform = "translateX(70px) ";
        imagen.style.transition = "ease-in 0.3s";
    });

    boton4.addEventListener("click", () => {
        imagen.style.transform = "translateY(50px)";
        imagen.style.transition = "ease-in 0.3s";
    });

    botonA.addEventListener("click", () => {
        imagen.style.transform = "scale(0.5)";
        imagen.style.transition = "ease-in 0.2s";
    });

    botonB.addEventListener("click", () => {
        imagen.style.transform = "scale(1.5)";
        imagen.style.transition = "ease-in 0.2s";
    });

    botonC.addEventListener("click", () => {
        imagen.style.transform = "translateY(0)";
        imagen.style.transform = "translateX(0)";
        imagen.style.transition = "ease-in 0.3s";
    });


});

