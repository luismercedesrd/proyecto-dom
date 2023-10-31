let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min, max){
    return  Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let indceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText =`"${citas[indceAleatorio].texto}"`;
    autorElem.innerText =citas[indceAleatorio].autor;
}

cambiarCita();
botonElem.addEventListener('click', () =>{
    cambiarCita();
});