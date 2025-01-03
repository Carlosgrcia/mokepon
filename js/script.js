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

    if (inputHipodoge.checked) {
        alert("Seleccionaste a Hipodoge");
    } else if (inputCapipepo.checked) {
        alert("Seleccionaste a Capipepo");
    } else if (inputRatigueya.checked) {
        alert("Seleccionaste a Ratigueya");
    } else if (inputLangostelvis.checked) {
        alert("Seleccionaste a Langostelvis");
    } else if (inputTucapalma.checked) {
        alert("Seleccionaste a Tucapalma");
    } else if (inputPidgit.checked) {
        alert("Seleccionaste a Pidgit");
    } else {
        alert("No seleccionaste ninguna mascota");
    }
}

window.addEventListener("load", cargarEventos);