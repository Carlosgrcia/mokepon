export interface Mokepon {
    nombre: string;
    id: string;
}

export interface Ataque {
    tipo: 'FUEGO' | 'AGUA' | 'TIERRA';
    resultado?: 'GANASTE' | 'PERDISTE' | 'EMPATE';
}

let mascotaJugador: string = '';
let mascotaEnemigo: string = '';
let vidasJugador: number = 3;
let vidasEnemigo: number = 3;

export const mokepones: Mokepon[] = [
    { nombre: 'Hipodoge', id: 'hipodoge' },
    { nombre: 'Capipepo', id: 'capipepo' },
    { nombre: 'Ratigüeya', id: 'ratigueya' },
    { nombre: 'Langostelvis', id: 'langostelvis' },
    { nombre: 'Tucapalma', id: 'tucapalma' },
    { nombre: 'Pidgit', id: 'pidgit' }
];

function iniciarJuego(): void {
    const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    const sectionReiniciar = document.getElementById('reiniciar');
    
    if (sectionSeleccionarAtaque && sectionReiniciar) {
        sectionSeleccionarAtaque.style.display = 'none';
        sectionReiniciar.style.display = 'none';
    }

    const botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador?.addEventListener('click', seleccionarMascotaJugador);

    const botonFuego = document.getElementById('boton-fuego');
    const botonAgua = document.getElementById('boton-agua');
    const botonTierra = document.getElementById('boton-tierra');
    const botonReiniciar = document.getElementById('boton-reiniciar');

    botonFuego?.addEventListener('click', () => ataque({ tipo: 'FUEGO' }));
    botonAgua?.addEventListener('click', () => ataque({ tipo: 'AGUA' }));
    botonTierra?.addEventListener('click', () => ataque({ tipo: 'TIERRA' }));
    botonReiniciar?.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador(): void {
    const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');

    for (const mokepon of mokepones) {
        const inputMascota = document.getElementById(mokepon.id) as HTMLInputElement;
        if (inputMascota?.checked) {
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

function seleccionarMascotaEnemigo(): void {
    const mascotaAleatoria = mokepones[Math.floor(Math.random() * mokepones.length)];
    mascotaEnemigo = mascotaAleatoria.nombre;
    
    const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    if (spanMascotaEnemigo) {
        spanMascotaEnemigo.innerHTML = mascotaEnemigo;
    }
}

function ataque(ataqueJugador: Ataque): void {
    const ataques: Ataque['tipo'][] = ['FUEGO', 'AGUA', 'TIERRA'];
    const ataqueEnemigo: Ataque = {
        tipo: ataques[Math.floor(Math.random() * ataques.length)]
    };

    if (ataqueJugador.tipo === ataqueEnemigo.tipo) {
        crearMensaje('EMPATE');
    } else if (
        (ataqueJugador.tipo === 'FUEGO' && ataqueEnemigo.tipo === 'TIERRA') ||
        (ataqueJugador.tipo === 'AGUA' && ataqueEnemigo.tipo === 'FUEGO') ||
        (ataqueJugador.tipo === 'TIERRA' && ataqueEnemigo.tipo === 'AGUA')
    ) {
        crearMensaje('GANASTE');
        vidasEnemigo--;
        actualizarVidas();
    } else {
        crearMensaje('PERDISTE');
        vidasJugador--;
        actualizarVidas();
    }

    revisarVidas();
}

function actualizarVidas(): void {
    const spanVidasJugador = document.getElementById('vidas-jugador');
    const spanVidasEnemigo = document.getElementById('vidas-enemigo');
    
    if (spanVidasJugador && spanVidasEnemigo) {
        spanVidasJugador.innerHTML = vidasJugador.toString();
        spanVidasEnemigo.innerHTML = vidasEnemigo.toString();
    }
}

function crearMensaje(resultado: string): void {
    const sectionMensajes = document.getElementById('mensajes');
    
    if (sectionMensajes) {
        const parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu mascota atacó con ${mascotaJugador}, la mascota del enemigo atacó con ${mascotaEnemigo} - ${resultado}`;
        sectionMensajes.appendChild(parrafo);
    }
}

function revisarVidas(): void {
    if (vidasEnemigo === 0) {
        crearMensajeFinal('FELICITACIONES! Ganaste 🎉');
        finalizarJuego();
    } else if (vidasJugador === 0) {
        crearMensajeFinal('Lo siento, perdiste 😢');
        finalizarJuego();
    }
}

function crearMensajeFinal(resultado: string): void {
    const sectionMensajes = document.getElementById('mensajes');
    
    if (sectionMensajes) {
        const parrafo = document.createElement('p');
        parrafo.innerHTML = resultado;
        sectionMensajes.appendChild(parrafo);
    }
}

function finalizarJuego(): void {
    const botonFuego = document.getElementById('boton-fuego') as HTMLButtonElement;
    const botonAgua = document.getElementById('boton-agua') as HTMLButtonElement;
    const botonTierra = document.getElementById('boton-tierra') as HTMLButtonElement;
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

function reiniciarJuego(): void {
    location.reload();
}

window.addEventListener('load', iniciarJuego); 