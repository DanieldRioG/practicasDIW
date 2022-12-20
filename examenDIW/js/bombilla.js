addEventListener("DOMContentLoaded", () => {

    let bombilla = document.getElementById("bombilla");
    let circulo1 = document.getElementById("circulo1");
    let circulo2 = document.getElementById("circulo2");
    let menu = document.getElementById("menu");

    let encendida = false;

    bombilla.addEventListener("click", () => {
        if (encendida == false) {
            document.body.style.backgroundColor = "white";
            encendida = true;
            menu.style.filter = "invert(0)";
        } else {
            document.body.style.backgroundColor = "black";
            encendida = false;
            menu.style.filter = "invert(1)";
        }
    });
});