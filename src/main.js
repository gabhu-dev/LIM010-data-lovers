// DATOS
const contrasena = document.getElementById('password');
const usuario = document.getElementById('usuario');
// BOTONES
const empezar = document.getElementById('ingresar');
const campeones = document.getElementById('campeones');
const begin = document.getElementById('inicio');
const descripcion = document.getElementById('contenido-personajes');
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
      </div>`;
    textC += mostrar;
  }
  return textC;
};
campeones.addEventListener('click', () => {
  let array = '';
  array = mostrarCampeones(arrayLOL);
  document.getElementById('contenido-personajes').innerHTML = array;
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
  document.getElementById('promedio').innerHTML = 'Promedio de campeones :' + ' ' + suma(array1);
  document.getElementById('total').innerHTML = 'Total de campeones:' + ' ' + array1.length;
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
  const idCampeones = arrayLOL.map(x=> x.id).indexOf(campeon); 
  if (event.target.parentElement.getAttribute('name') === 'jalar') {
  // mostramnos modal
    document.getElementById('mi-modal').classList.remove('hide');
    // insertamos caracteristicas en el modal
    document.getElementById('info-de-lol').innerHTML = `
     <div class="info-descripcion flex">
     <div class="contenido-modal flex">
     <p class="su-id">${arrayLOL[idCampeones].id}</p>
      <img  class = "imgModal"src="${arrayLOL[idCampeones].splash}"/> 
      <p class="su-descripcion">${arrayLOL[idCampeones].blurb}</p>
      </div>
      <div class="infor-macion flex">
      <p class="su-titulo">${arrayLOL[idCampeones].title}</p>
      <p class="su-info"> Ataque: ${arrayLOL[idCampeones].info.attack}</p>
      <p class="su-info"> Defensa:${arrayLOL[idCampeones].info.defense}</p>
      <p class="su-info"> Magia:${arrayLOL[idCampeones].info.magic}</p>
      <p class="su-info"> Dificultad:${arrayLOL[idCampeones].info.difficulty}</p>
    
      <div>
      </div>`;
  }
});
const cerrar = document.getElementById('close');
cerrar.addEventListener('click', () => {
  document.getElementById('mi-modal').classList.add('hide');
});