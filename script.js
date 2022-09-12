let OpcionJugador;
let Opcionmaquina;

const Jugador = document.querySelector('#jugador');
const Maquina = document.querySelector('#maquina');
const anuncio = document.querySelector('#Anuncio');
const Boton_piedra = document.querySelector('#boton_piedra');
const Boton_papel = document.querySelector('#boton_papel');
const Boton_tijera = document.querySelector('#boton_tijera');
const Boton_reiniciar = document.querySelector('#Reinicio');


function OpcionMaq() {

  const ramdon = Math.floor(Math.random() * 3 + 1)

  if(ramdon === 1){
    Opcionmaquina = 'Tijera'
    Maquina.innerHTML = '<img src="./source/img/tijera.png"/>'
    Batalla()
  }

  if(ramdon === 2){
    Opcionmaquina = 'Piedra'
    Maquina.innerHTML = '<img src="./source/img/puño.png"/>'
    Batalla()
  }

  if(ramdon === 3){
    Opcionmaquina = 'Papel'
    Maquina.innerHTML = '<img src="./source/img/papel.png"/>'
    Batalla()
  }
};


function Batalla(){

  if(OpcionJugador === 'Tijera' && Opcionmaquina === 'Papel'){
    anuncio.innerHTML = '<p>Has ganado!!</p>'
    console.log('metida de pene')
  }

  else if(OpcionJugador === 'Piedra' && Opcionmaquina === 'Tijera'){
    anuncio.innerHTML = '<p>Has ganado!!</p>'
    console.log('metida de pene')
  }

  else if(OpcionJugador === 'Papel' && Opcionmaquina === 'Piedra'){
    anuncio.innerHTML = '<p>Has ganado!!</p>'
    console.log('metida de pene')
  }

  else if(OpcionJugador === Opcionmaquina){
    anuncio.innerHTML = '<p>Hubo un empate</p>'
  }

  else{
    anuncio.innerHTML = '<p>Has perdido</p>'
  }
};


Boton_papel.addEventListener('click', ()=>{
  OpcionJugador = 'Papel'
  Jugador.innerHTML = '<img src="./source/img/papel.png"/>'
  OpcionMaq()
});

Boton_tijera.addEventListener('click', ()=>{
  OpcionJugador = 'Tijera'
  Jugador.innerHTML = '<img src="./source/img/tijera.png"/>'
  OpcionMaq()
});

Boton_piedra.addEventListener('click', ()=>{
  OpcionJugador = 'Piedra'
  Jugador.innerHTML = '<img src="./source/img/puño.png"/>'
  OpcionMaq()
});

Boton_reiniciar.addEventListener('click', ()=>{
  Jugador.innerHTML = '' || ''
  Maquina.innerHTML = '' || ''
  anuncio.innerHTML = '<p>QUE EMPIEZE EL JUEGO</p>'
});