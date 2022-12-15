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
        remove(imagen)
        imagen.classList.add("saltar");
        setTimeout(() => {
            imagen.classList.remove("saltar");
        }, 700);
    });

    boton2.addEventListener("click", () => {
        remove(imagen)
        imagen.style.marginTop = "210px";
        imagen.classList.add("izquierdaA1");
        setTimeout(() => {
            //imagen.classList.remove("izquierdaA");
        }, 3000);
    });

    boton3.addEventListener("click", () => {
        imagen.style.marginTop = "210px";
        imagen.classList.add("derechaA1");
        setTimeout(() => {
            // imagen.classList.remove("derechaA1");

        }, 2500);
    });

    boton4.addEventListener("click", () => {
        remove(imagen)
        imagen.classList.add("abajo");
        setTimeout(() => {
            imagen.classList.remove("abajo");
            imagen.classList.add("flotar");
        }, 1000);
    });

    botonA.addEventListener("click", () => {
        remove(imagen)
        imagen.style.transform = "scale(0.7)";
        imagen.style.transition = "ease-in 0.2s";
        imagen.style.marginTop = "215px";
    });

    botonB.addEventListener("click", () => {
        remove(imagen)
        imagen.style.transform = "scale(1.5)";
        imagen.style.transition = "ease-in 0.2s";
    });

    botonC.addEventListener("click", () => {
        remove(imagen)
        imagen.style.transform = "translateY(0)";
        imagen.style.transform = "translateX(0)";
        imagen.style.transition = "ease-in 0.3s";
        imagen.style.marginTop = "210px";
    });
});

function remove(imagen) {
    imagen.classList.remove(...imagen.classList);
}

