let ataqueJugador

function cargarEventos() {
    let botonMascota = document.getElementById("boton-mascota");
    botonMascota.addEventListener("click", seleccionarMascota);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascota() {
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    let inputLangostelvis = document.getElementById("langostelvis");
    let inputTucapalma = document.getElementById("tucapalma");
    let inputPidgit = document.getElementById("pidgit");
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
        alert("¡Has elegido a Hipodoge!");
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
        alert("¡Has elegido a Capipepo!");
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya";
        alert("¡Has elegido a Ratigueya!");
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis";
        alert("¡Has elegido a Langostelvis!");
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma";
        alert("¡Has elegido a Tucapalma!");
    } else if (inputPidgit.checked) {
        spanMascotaJugador.innerHTML = "Pidgit";
        alert("¡Has elegido a Pidgit!");
    } else {
        alert("No seleccionaste ninguna mascota");
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio === 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    } else if (ataqueAleatorio === 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
    } else if (ataqueAleatorio === 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya";
    } else if (ataqueAleatorio === 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis";
    } else if (ataqueAleatorio === 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma";
    } else if (ataqueAleatorio === 6) {
        spanMascotaEnemigo.innerHTML = "Pidgit";
    }
}

function ataqueFuego() {
    ataqueJugador = "Fuego"
    alert(ataqueJugador)
}

function ataqueAgua() {
    ataqueJugador = "Agua"
    alert(ataqueJugador)
}

function ataqueTierra() {
    ataqueJugador = "Tierra"
    alert(ataqueJugador)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", cargarEventos);
