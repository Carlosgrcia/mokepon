let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function cargarEventos() {
    let botonMascota = document.getElementById("boton-mascota");
    botonMascota.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador() {
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
        spanMascotaJugador.innerHTML = "Ratigüeya";
        alert("¡Has elegido a Ratigüeya!");
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
        spanMascotaEnemigo.innerHTML = "Ratigüeya";
    } else if (ataqueAleatorio === 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis";
    } else if (ataqueAleatorio === 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma";
    } else if (ataqueAleatorio === 6) {
        spanMascotaEnemigo.innerHTML = "Pidgit";
    }
}

function ataqueFuego() {
    ataqueJugador = "Fuego 🔥"
    alert("Elegiste ataque de Fuego 🔥")
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "Agua 💧"
    alert("Elegiste ataque de Agua 💧")
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "Tierra 🌱"
    alert("Elegiste ataque de Tierra 🌱")
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego 🔥"
        alert("Tu enemigo eligió Fuego 🔥")
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua 💧"
        alert("Tu enemigo eligió Agua 💧")
    } else {
        ataqueEnemigo = "Tierra 🌱"
        alert("Tu enemigo eligió Tierra 🌱")
    }

    batalla()
}

function batalla() {
    let resultado

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueJugador === ataqueEnemigo) {
        resultado = "¡EMPATE! 🤝"
    } else if (
        (ataqueJugador === "Fuego 🔥" && ataqueEnemigo === "Tierra 🌱") ||
        (ataqueJugador === "Agua 💧" && ataqueEnemigo === "Fuego 🔥") ||
        (ataqueJugador === "Tierra 🌱" && ataqueEnemigo === "Agua 💧")
    ) {
        resultado = "¡GANASTE! 🎉"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        resultado = "¡PERDISTE! 😢"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    let parrafo = document.createElement("p")
    parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} - ${resultado}`
    let mensajes = document.getElementById("mensajes")
    mensajes.appendChild(parrafo)

    revisarVidas()
}

function revisarVidas() {
    if (vidasJugador === 0) {
        crearMensajeFinal("¡Lo sentimos, perdiste! 😢")
    } else if (vidasEnemigo === 0) {
        crearMensajeFinal("¡Felicidades, ganaste! 🎉")
    } 
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")

    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", cargarEventos);
