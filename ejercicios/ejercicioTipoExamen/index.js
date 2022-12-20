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

    let pj = document.getElementById("pj");
    let nukeImg = document.getElementById("nuke");
    let pantalla = document.getElementById("pantallazoBlanco");

    // -------------------------------------------------------------

    pj.classList.add("imagen");
    pj.style.marginTop = "217px";

    boton1.addEventListener("click", () => {
        remove(pj, nukeImg, pantalla);
        pj.classList.add("saltar");
        pj.classList.add("imagen");
        setTimeout(() => {
            pj.classList.remove("saltar");
        }, 700);
    });

    boton2.addEventListener("click", () => {
        remove(pj, nukeImg, pantalla);
        pj.style.marginTop = "217px";
        pj.classList.add("izquierdaA1");
        pj.classList.add("imagen");
        setTimeout(() => {
            //imagen.classList.remove("izquierdaA");
        }, 3000);
    });

    boton3.addEventListener("click", () => {
        pj.style.marginTop = "217px";
        pj.classList.add("derechaA1");
        pj.classList.add("imagen");
        setTimeout(() => {
            // imagen.classList.remove("derechaA1");

        }, 2500);
    });

    boton4.addEventListener("click", () => {
        remove(pj, nukeImg, pantalla);
        pj.classList.add("abajo");
        pj.classList.add("imagen");
        setTimeout(() => {
            pj.classList.remove("abajo");
            pj.classList.add("flotar");
        }, 1000);
    });

    mini.addEventListener("click", () => {
        remove(pj, nukeImg, pantalla);
        pj.style.marginTop = "210px";
        pj.style.transform = "scale(0.5)";
        pj.style.transition = "ease-in 0.2s";

    });

    mega.addEventListener("click", () => {
        remove(pj, nukeImg, pantalla);
        pj.style.transform = "scale(1.5)";
        pj.style.transition = "ease-in 0.2s";
        pj.style.marginTop = "188px";
    });

    reset.addEventListener("click", () => {
        pj.src = "guide.png";
        remove(pj, nukeImg, pantalla);
        pj.classList.add("imagen");
        pj.style.transform = "translateY(0)";
        pj.style.transform = "translateX(0)";
        pj.style.marginTop = "217px";

    });

    volar.addEventListener("click", () => {
        remove(pj, nukeImg, pantalla);
        pj.src = "glide1.png";
        pj.classList.add("imagen2");
        pj.style.marginTop = "217px";
        pj.classList.add("volar");
        setTimeout(() => {
            pj.src = "glide2.png";
            pj.classList.add("imagen3");
            pj.classList.add("mantenerVuelo");
            setTimeout(() => {
            }, 5000);
        }, 1000);
    });

    nuke.addEventListener("click", () => {
        remove(pj, nukeImg, pantalla);
        pj.classList.add("imagen");
        nukeImg.classList.add("tirarNuke");
        setTimeout(() => {
            nukeImg.classList.remove("tirarNuke");
            pantalla.classList.add("explosion");
            setTimeout(() => {

            }, 500);
        }, 1500);
    });
});

function remove(pj, nukeImg, pantalla) {
    pj.classList.remove(...pj.classList);
    nukeImg.classList.remove(...nukeImg.classList);
    pantalla.classList.remove(...pantalla.classList);
}


