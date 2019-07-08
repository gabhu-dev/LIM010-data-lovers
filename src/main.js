// DATOS
const contrasena = document.getElementById('password');
const usuario = document.getElementById('usuario');
// BOTONES
const empezar = document.getElementById('ingresar');
const campeones = document.getElementById('campeones');
const begin = document.getElementById('inicio');
// VISTAS
const vistaLogin = document.getElementById('pantalla-login');
const vistaBienvenida = document.getElementById('pantalla-bienvenida');
const vistaCampeones = document.getElementById('pantalla-campeones');

// CONTROLANDO HEADER
const cabecera = document.getElementById('cabecera');
const barraNavegacion = document.getElementById('barra');
// const vistaCampeones = document.getElementById('pantallaCampeones')
// Contador de intentos en login
let password = 0;
let arrayLOL = Object.values(LOL.data);

// Funciones
empezar.addEventListener('click', () => {
  const datos = contrasena.value;
  const datosUsuario = usuario.value;
  if (password < 2) {
    if (datos === '' && datosUsuario === '') {
      vistaLogin.classList.add('hide');
      vistaBienvenida.classList.remove('hide');
      cabecera.classList.remove('hide');
      barraNavegacion.classList.remove('hide');
    } else {
      document.getElementById('mensajeError').innerHTML = '*Datos Incorrectos*';
      password++;
    }
  }
});

begin.addEventListener('click', ()=>{
  vistaCampeones.classList.add('hide'); 
  vistaBienvenida.classList.remove('hide');   
});
campeones.addEventListener('click', () => {
  let array = '';
  array = mostrarCampeones(arrayLOL);
  document.getElementById('name').innerHTML = array;
  vistaBienvenida.classList.add('hide');
  vistaCampeones.classList.remove('hide');
});
tagk.addEventListener('change', () => {
  const agarre = document.getElementById('tagk').value;
  let vacio = '';
  let array1 = [];
  array1 = mostrarAsesinos(arrayLOL, agarre);
  vacio = mostrarCampeones(array1);
  document.getElementById('name').innerHTML = vacio;
});

az.addEventListener('change', () => {
  const azs = document.getElementById('az').value;
  let array2 = sortAtaque(arrayLOL, azs.value);
  let vacio1 = mostrarCampeones(array2);
  document.getElementById('name').innerHTML = vacio1;
  console.log()
});