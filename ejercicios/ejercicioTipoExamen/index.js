addEventListener("DOMContentLoaded", () => {
    let boton1 = document.getElementById("arriba");
    let boton2 = document.getElementById("izquierda");
    let boton3 = document.getElementById("derecha");
    let boton4 = document.getElementById("abajo");

    let mini = document.getElementById("a");
    let mega = document.getElementById("b");
    let reset = document.getElementById("c");
    let volar = document.getElementById("d");
    let nuke = document.getElementById("e");

    let imagen = document.getElementById("pj");
    let imagen2 = document.getElementById("nuke");

    // -------------------------------------------------------------

    imagen.classList.add("imagen");
    imagen.style.marginTop = "217px";

    boton1.addEventListener("click", () => {
        remove(imagen)
        imagen.classList.add("saltar");
        imagen.classList.add("imagen");
        setTimeout(() => {
            imagen.classList.remove("saltar");
        }, 700);
    });

    boton2.addEventListener("click", () => {
        remove(imagen)
        imagen.style.marginTop = "217px";
        imagen.classList.add("izquierdaA1");
        imagen.classList.add("imagen");
        setTimeout(() => {
            //imagen.classList.remove("izquierdaA");
        }, 3000);
    });

    boton3.addEventListener("click", () => {
        imagen.style.marginTop = "217px";
        imagen.classList.add("derechaA1");
        imagen.classList.add("imagen");
        setTimeout(() => {
            // imagen.classList.remove("derechaA1");

        }, 2500);
    });

    boton4.addEventListener("click", () => {
        remove(imagen);
        imagen.classList.add("abajo");
        imagen.classList.add("imagen");
        setTimeout(() => {
            imagen.classList.remove("abajo");
            imagen.classList.add("flotar");
        }, 1000);
    });

    mini.addEventListener("click", () => {
        remove(imagen);
        imagen.style.marginTop = "210px";
        imagen.style.transform = "scale(0.5)";
        imagen.style.transition = "ease-in 0.2s";

    });

    mega.addEventListener("click", () => {
        remove(imagen);
        imagen.style.transform = "scale(1.5)";
        imagen.style.transition = "ease-in 0.2s";
        imagen.style.marginTop = "188px";
    });

    reset.addEventListener("click", () => {
        imagen.src = "guide.png";
        remove(imagen);
        imagen.classList.add("imagen");
        imagen.style.transform = "translateY(0)";
        imagen.style.transform = "translateX(0)";
        imagen.style.marginTop = "217px";

    });

    volar.addEventListener("click", () => {
        remove(imagen);
        imagen.src = "glide1.png";
        imagen.classList.add("imagen2");
        imagen.style.marginTop = "217px";
        imagen.classList.add("volar");
        setTimeout(() => {
            imagen.src = "glide2.png";
            imagen.classList.add("imagen3");
            imagen.classList.add("mantenerVuelo");
            setTimeout(() => {
            }, 5000);
        }, 1000);
    });

    nuke.addEventListener("click", () => {
        remove(imagen);
        imagen2.classList.add("tirarNuke");
        setTimeout(() => {

        }, 1500);
    });
});

function remove(imagen) {
    imagen.classList.remove(...imagen.classList);
}

