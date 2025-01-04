function cargarEventos() {
    let botonMascota = document.getElementById("boton-mascota");
    botonMascota.addEventListener("click", seleccionarMascota);
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
}

window.addEventListener("load", cargarEventos);