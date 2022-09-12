let OpcionJugador;
let Opcionmaquina;

const Jugador = document.querySelector('.flex-jugador');
const Maquina = document.querySelector('.flex-maquina');
const anuncio = document.querySelector('#Anuncio');
const Boton_piedra = document.querySelector('#boton_piedra');
const Boton_papel = document.querySelector('#boton_papel');
const Boton_tijera = document.querySelector('#boton_tijera');
const Boton_reiniciar = document.querySelector('#Reinicio');


function OpcionMaq() {

  const ramdon = Math.floor(Math.random() * 3 + 1)

  if(ramdon === 1){
    Opcionmaquina = 'Tijera'
    Maquina.innerHTML = '<img src="https://ponceelrelajado.com/juego/img/tijera.png"/>'
    Batalla()
  }

  if(ramdon === 2){
    Opcionmaquina = 'Piedra'
    Maquina.innerHTML = '<img src="https://flyclipart.com/thumbs/rock-paper-scissors-rock-paper-scissors-clipart-1176494.png"/>'
    Batalla()
  }

  if(ramdon === 3){
    Opcionmaquina = 'Papel'
    Maquina.innerHTML = '<img src="https://ponceelrelajado.com/juego/img/papel.png"/>'
    Batalla()
  }
};


function Batalla(){

  if(OpcionJugador === 'Tijera' && Opcionmaquina === 'Papel'){
    anuncio.innerHTML = '<p>has ganado!!</p>'
    console.log('metida de pene')
  }

  else if(OpcionJugador === 'Piedra' && Opcionmaquina === 'Tijera'){
    anuncio.innerHTML = '<p>has ganado!!</p>'
    console.log('metida de pene')
  }

  else if(OpcionJugador === 'Papel' && Opcionmaquina === 'Piedra'){
    anuncio.innerHTML = '<p>has ganado!!</p>'
    console.log('metida de pene')
  }

  else if(OpcionJugador === Opcionmaquina){
    anuncio.innerHTML = '<p>hubo un empate</p>'
  }

  else{
    anuncio.innerHTML = '<p>Has perdido</p>'
    console.log('metida de pene')
  }
};


Boton_papel.addEventListener('click', ()=>{
  OpcionJugador = 'Papel'
  Jugador.innerHTML = '<img src="https://ponceelrelajado.com/juego/img/papel.png"/>'
  OpcionMaq()
});

Boton_tijera.addEventListener('click', ()=>{
  OpcionJugador = 'Tijera'
  Jugador.innerHTML = '<img src="https://ponceelrelajado.com/juego/img/tijera.png"/>'
  OpcionMaq()
});

Boton_piedra.addEventListener('click', ()=>{
  OpcionJugador = 'Piedra'
  Jugador.innerHTML = '<img src="https://flyclipart.com/thumbs/rock-paper-scissors-rock-paper-scissors-clipart-1176494.png"/>'
  OpcionMaq()
});

Boton_reiniciar.addEventListener('click', ()=>{
  Jugador.innerHTML = '' || '<p>JUGADOR 1</p>'
  Maquina.innerHTML = '' || '<p>MAQUINA</p>'
  anuncio.innerHTML = ''
});