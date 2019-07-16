// DATOS
const contrasena = document.getElementById('password');
const usuario = document.getElementById('usuario');
// BOTONES
const empezar = document.getElementById('ingresar');
const campeones = document.getElementById('campeones');
const begin = document.getElementById('inicio');
const descripcion = document.getElementById('name');
// VISTAS
const vistaLogin = document.getElementById('pantalla-login');
const vistaBienvenida = document.getElementById('pantalla-bienvenida');
const vistaCampeones = document.getElementById('pantalla-campeones');

// CONTROLANDO HEADER
const cabecera = document.getElementById('cabecera');
const barraNavegacion = document.getElementById('nav');

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
const mostrarCampeones = (data) => {
  let textC = '';
  for (let i = 0; i < data.length; i++) {
    const mostrar = `
      <div class="personajes-flex" name="jalar" id="${data[i].id}">
        <img class="img" src='${data[i].splash}'/>
        <p class="decorado">${data[i].name}</p>
        <p class="decorado">${data[i].title}</p>
      </div>`;
    textC += mostrar;
  }
  return textC;

};
campeones.addEventListener('click', () => {
  let array = '';
  array = mostrarCampeones(arrayLOL);
  document.getElementById('name').innerHTML = array;
  vistaBienvenida.classList.add('hide');
  vistaCampeones.classList.remove('hide');
  document.getElementById('promedio').innerHTML = '';
});
tipo.addEventListener('change', () => {
  const agarre = document.getElementById('tipo').value;
  let vacio = '';
  let array1 = [];
  array1 = mostrarAsesinos(arrayLOL, agarre);
  vacio = mostrarCampeones(array1);
  document.getElementById('name').innerHTML = vacio;
  document.getElementById('promedio').innerHTML = suma(array1);
  document.getElementById('total').innerHTML = array1.length;
});
const az = document.getElementById('az');
az.addEventListener('change', () => {
  let capturarAlfa = document.getElementById('tipo').value;
  if (capturarAlfa === '0') {
    let array3 = sortAlfa(arrayLOL, az.value);
    document.getElementById('name').innerHTML = mostrarCampeones(array3);
  } else {
    const ar = mostrarAsesinos(arrayLOL, capturarAlfa);
    let array2 = sortAlfa(ar, az.value);
    document.getElementById('name').innerHTML = mostrarCampeones(array2);
  } 
});
// orden de ataque
const orden = document.getElementById('orden-ataque');
orden.addEventListener('change', () => {
  let capturar = document.getElementById('tipo').value;  
  if (capturar === '0') {
    let array3 = sortAtaque(arrayLOL, orden.value);
    document.getElementById('name').innerHTML = mostrarCampeones(array3);
  } else {
    const ar = mostrarAsesinos(arrayLOL, capturar);
    let array2 = sortAtaque(ar, orden.value);
    document.getElementById('name').innerHTML = mostrarCampeones(array2);
  } 
});
// para ver las obtener las imagenes
descripcion.addEventListener('click', () => {
  const campeon = event.target.parentElement.id;
  console.log(campeon);
  const lolcito = arrayLOL.map(function(x) {
    return x.id; 
  }).indexOf(campeon);
  console.log(lolcito);
  if (event.target.parentElement.getAttribute('name') === 'jalar') {
  // mostramnos modal
    document.getElementById('mi-modal').classList.remove('hide');
    // insertamos caracteristicas en el modal
    document.getElementById('info-de-lol').innerHTML = `
     <div class="info-descripcion flex">
     <div class="contenido-modal flex">
     <p class="su-id">${arrayLOL[lolcito].id}</p>
      <img  class = "imgModal"src="${arrayLOL[lolcito].splash}"/> 
      <p class="su-descripcion">${arrayLOL[lolcito].blurb}</p>
      </div>
      <div class="infor-macion flex">
      <p class="su-titulo">${arrayLOL[lolcito].title}</p>
      <p class="su-info">ataque:${arrayLOL[lolcito].info.attack}</p>
      <p class="su-info">defensa:${arrayLOL[lolcito].info.defense}</p>
      <p class="su-info">magic:${arrayLOL[lolcito].info.magic}</p>
      <p class="su-info">dificultad:${arrayLOL[lolcito].info.difficulty}</p>
    
      <div>
      </div>`;
  }
});
const cerrar = document.getElementById('close');
cerrar.addEventListener('click', () => {
  document.getElementById('mi-modal').classList.add('hide');
});
// let modal =document.getElementById('mi-modal');