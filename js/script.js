let mascotaJugador = '';
let mascotaEnemigo = '';
let vidasJugador = 3;
let vidasEnemigo = 3;
export const mokepones = [
    { nombre: 'Hipodoge', id: 'hipodoge' },
    { nombre: 'Capipepo', id: 'capipepo' },
    { nombre: 'Ratigüeya', id: 'ratigueya' },
    { nombre: 'Langostelvis', id: 'langostelvis' },
    { nombre: 'Tucapalma', id: 'tucapalma' },
    { nombre: 'Pidgit', id: 'pidgit' }
];
function iniciarJuego() {
    const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    const sectionReiniciar = document.getElementById('reiniciar');
    if (sectionSeleccionarAtaque && sectionReiniciar) {
        sectionSeleccionarAtaque.style.display = 'none';
        sectionReiniciar.style.display = 'none';
    }
    const botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador === null || botonMascotaJugador === void 0 ? void 0 : botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    const botonFuego = document.getElementById('boton-fuego');
    const botonAgua = document.getElementById('boton-agua');
    const botonTierra = document.getElementById('boton-tierra');
    const botonReiniciar = document.getElementById('boton-reiniciar');
    botonFuego === null || botonFuego === void 0 ? void 0 : botonFuego.addEventListener('click', () => ataque({ tipo: 'FUEGO' }));
    botonAgua === null || botonAgua === void 0 ? void 0 : botonAgua.addEventListener('click', () => ataque({ tipo: 'AGUA' }));
    botonTierra === null || botonTierra === void 0 ? void 0 : botonTierra.addEventListener('click', () => ataque({ tipo: 'TIERRA' }));
    botonReiniciar === null || botonReiniciar === void 0 ? void 0 : botonReiniciar.addEventListener('click', reiniciarJuego);
}
function seleccionarMascotaJugador() {
    const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    for (const mokepon of mokepones) {
        const inputMascota = document.getElementById(mokepon.id);
        if (inputMascota === null || inputMascota === void 0 ? void 0 : inputMascota.checked) {
            mascotaJugador = mokepon.nombre;
            const spanMascotaJugador = document.getElementById('mascota-jugador');
            if (spanMascotaJugador) {
                spanMascotaJugador.innerHTML = mascotaJugador;
            }
            break;
        }
    }
    if (mascotaJugador === '') {
        alert('Selecciona una mascota');
        return;
    }
    if (sectionSeleccionarMascota && sectionSeleccionarAtaque) {
        sectionSeleccionarMascota.style.display = 'none';
        sectionSeleccionarAtaque.style.display = 'flex';
    }
    seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
    const mascotaAleatoria = mokepones[Math.floor(Math.random() * mokepones.length)];
    mascotaEnemigo = mascotaAleatoria.nombre;
    const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    if (spanMascotaEnemigo) {
        spanMascotaEnemigo.innerHTML = mascotaEnemigo;
    }
}
function ataque(ataqueJugador) {
    const ataques = ['FUEGO', 'AGUA', 'TIERRA'];
    const ataqueEnemigo = {
        tipo: ataques[Math.floor(Math.random() * ataques.length)]
    };
    if (ataqueJugador.tipo === ataqueEnemigo.tipo) {
        crearMensaje('EMPATE');
    }
    else if ((ataqueJugador.tipo === 'FUEGO' && ataqueEnemigo.tipo === 'TIERRA') ||
        (ataqueJugador.tipo === 'AGUA' && ataqueEnemigo.tipo === 'FUEGO') ||
        (ataqueJugador.tipo === 'TIERRA' && ataqueEnemigo.tipo === 'AGUA')) {
        crearMensaje('GANASTE');
        vidasEnemigo--;
        actualizarVidas();
    }
    else {
        crearMensaje('PERDISTE');
        vidasJugador--;
        actualizarVidas();
    }
    revisarVidas();
}
function actualizarVidas() {
    const spanVidasJugador = document.getElementById('vidas-jugador');
    const spanVidasEnemigo = document.getElementById('vidas-enemigo');
    if (spanVidasJugador && spanVidasEnemigo) {
        spanVidasJugador.innerHTML = vidasJugador.toString();
        spanVidasEnemigo.innerHTML = vidasEnemigo.toString();
    }
}
function crearMensaje(resultado) {
    const sectionMensajes = document.getElementById('mensajes');
    if (sectionMensajes) {
        const parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu mascota atacó con ${mascotaJugador}, la mascota del enemigo atacó con ${mascotaEnemigo} - ${resultado}`;
        sectionMensajes.appendChild(parrafo);
    }
}
function revisarVidas() {
    if (vidasEnemigo === 0) {
        crearMensajeFinal('FELICITACIONES! Ganaste 🎉');
        finalizarJuego();
    }
    else if (vidasJugador === 0) {
        crearMensajeFinal('Lo siento, perdiste 😢');
        finalizarJuego();
    }
}
function crearMensajeFinal(resultado) {
    const sectionMensajes = document.getElementById('mensajes');
    if (sectionMensajes) {
        const parrafo = document.createElement('p');
        parrafo.innerHTML = resultado;
        sectionMensajes.appendChild(parrafo);
    }
}
function finalizarJuego() {
    const botonFuego = document.getElementById('boton-fuego');
    const botonAgua = document.getElementById('boton-agua');
    const botonTierra = document.getElementById('boton-tierra');
    const sectionReiniciar = document.getElementById('reiniciar');
    if (botonFuego && botonAgua && botonTierra) {
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true;
    }
    if (sectionReiniciar) {
        sectionReiniciar.style.display = 'block';
    }
}
function reiniciarJuego() {
    location.reload();
}
window.addEventListener('load', iniciarJuego);
