const botonInicioPausa = document.getElementById("boton-inicio-pausa");
const botonReiniciar = document.getElementById("boton-reiniciar");

let roja = document.getElementById("luzRoja");
let amarilla = document.getElementById("luzAmarilla");
let verde = document.getElementById("luzVerde");

roja.style.backgroundColor = "white";
amarilla.style.backgroundColor = "white";
verde.style.backgroundColor = "white";

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloTienpo;

let estadoCronometro = "PAUSADO";

function ActualizarCronometro() {
  segundos++;

  if (segundos === 1) {
    roja.style.backgroundColor = "red";
    amarilla.style.backgroundColor = "white";
    verde.style.backgroundColor = "white";
  }

  if (segundos === 20) {
    amarilla.style.backgroundColor = "yellow";
    roja.style.backgroundColor = "white";
  }

  if (segundos === 40) {
    verde.style.backgroundColor = "green";
    amarilla.style.backgroundColor = "white";
    roja.style.backgroundColor = "white";
  }

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormatos = asignarFormato(segundos);
  const minutosConFormatos = asignarFormato(minutos);
  const horasConFormatos = asignarFormato(horas);

  const conometro = document.getElementById("cronometro");
  conometro.innerText = `${horasConFormatos}:${minutosConFormatos}:${segundosConFormatos}`;
}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
}

botonInicioPausa.addEventListener("click", () => {
  if (estadoCronometro === "PAUSADO") {
    intervaloTienpo = window.setInterval(ActualizarCronometro, 1000);

    document.getElementById(
      "boton-inicio-pausa"
    ).innerHTML = `<i class="bi bi-pause" id="boton-inicio-pausa"></i>`;
    botonInicioPausa.classList.remove("iniciar");
    botonInicioPausa.classList.add("pausar");

    estadoCronometro = "ANDANDO";
  } else {
    window.clearInterval(intervaloTienpo);

    document.getElementById(
      "boton-inicio-pausa"
    ).innerHTML = `<i class="bi bi-play-fill" id="boton-inicio-pausa"></i>`;
    botonInicioPausa.classList.remove("pausar");
    botonInicioPausa.classList.add("iniciar");

    estadoCronometro = "PAUSADO";
  }
});

botonReiniciar.addEventListener("click", () => {
  roja.style.backgroundColor = "white";
  amarilla.style.backgroundColor = "white";
  verde.style.backgroundColor = "white";

  window.clearInterval(intervaloTienpo);
  horas = 0;
  minutos = 0;
  segundos = 0;

  const conometro = document.getElementById("cronometro");
  conometro.innerHTML = `00:00:00`;

  document.getElementById(
    "boton-inicio-pausa"
  ).innerHTML = `<i class="bi bi-play-fill" id="iniciar"></i>`;

  botonInicioPausa.classList.remove("pausar");
  botonInicioPausa.classList.add("iniciar");

  estadoCronometro = "PAUSADO";
});
