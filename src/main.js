// DATOS
const contrasena = document.getElementById('password');
const usuario = document.getElementById('usuario');
// BOTONES
const empezar = document.getElementById('ingresar');
const campeones = document.getElementById('campeones');
const begin = document.getElementById('inicio');
const descripcion = document.getElementById('contenido-personajes');
// VISTAS
const vistaLogin = document.getElementById('contenedor-pantalla-login');
const vistaBienvenida = document.getElementById('pantalla-bienvenida');
const vistaCampeones = document.getElementById('pantalla-campeones');

// CONTROLANDO HEADER
const cabecera = document.getElementById('cabecera');
const barraNavegacion = document.getElementById('nav');

// Contador de intentos en login
let password = 0;
// let arrayLOL = Object.values(LOL.data);

// evento para el boton de ingresar
empezar.addEventListener('click', () => {
  const datos = contrasena.value;
  const datosUsuario = usuario.value;
  if (password < 2) {
    if (datos === 'LABORATORIA' && datosUsuario === 'LABORATORIA') {
      vistaLogin.classList.add('hide');
      vistaBienvenida.classList.remove('hide');
      cabecera.classList.remove('hide');
      barraNavegacion.classList.remove('hide');
    } else {
      document.getElementById('mensaje-error').innerHTML =
                '*Datos Incorrectos*';
      password++;
    }
  }
});
// regresa a la pantalla 2

begin.addEventListener('click', () => {
  vistaCampeones.classList.add('hide');
  vistaBienvenida.classList.remove('hide');
});

// esta reemplaza a mi lol.js
fetch('https://raw.githubusercontent.com/Laboratoria/LIM010-data-lovers/master/src/data/lol/lol.json')
  .then(response => response.json())
  .then(data => {
    let dataLol = Object.values(data.data);
    setCampeonesListener(dataLol);
    setTiposCampeones(dataLol);
    llamadaPorOrdenAz(dataLol);
    llamadaPorOrdenAtaque(dataLol);
    llamadaModal(dataLol);
  })
  .catch(err => console.log(err));

// recorre la data
const mostrarCampeones = data => {
  let textC = '';
  for (let i = 0; i < data.length; i++) {
    const mostrar = `
    <div class="personajes-flex shadow" name="jalar" id="${data[i].id}">
        <img class="img" src='${data[i].splash}'/>
        <p class="decorado">${data[i].name}</p>
      </div>`;
    textC += mostrar;
  }
  return textC;
};

// llama a los campeones

setCampeonesListener = (dataLol) => {
  campeones.addEventListener('click', () => {
    let array = '';
    array = mostrarCampeones(dataLol);
    document.getElementById('contenido-personajes').innerHTML = array;
    vistaBienvenida.classList.add('hide');
    vistaCampeones.classList.remove('hide');
    document.getElementById('promedio').innerHTML = '';
  });
};
// llama a los campeones por tipo,promedio,total
setTiposCampeones = (dataLol) => {
  tipo.addEventListener('change', () => {
    const capturaSelect = document.getElementById('tipo').value;
    let vacio = '';
    let array1 = [];
    array1 = mostrarAsesinos(dataLol, capturaSelect);
    vacio = mostrarCampeones(array1);
    document.getElementById('contenido-personajes').innerHTML = vacio;
    document.getElementById('promedio').innerHTML =
            'Promedio de campeones :' + ' ' + suma(array1);
    document.getElementById('total').innerHTML =
            'Total de campeones:' + ' ' + array1.length;
  });
};

// llama al orden alfabetico
llamadaPorOrdenAz = (dataLol) => {
  const az = document.getElementById('az');
  az.addEventListener('change', () => {
    let capturarAlfa = document.getElementById('tipo').value;
    if (capturarAlfa === '0') {
      let array3 = sortAlfa(dataLol, az.value);
      document.getElementById(
        'contenido-personajes'
      ).innerHTML = mostrarCampeones(array3);
    } else {
      const ar = mostrarAsesinos(dataLol, capturarAlfa);
      let array2 = sortAlfa(ar, az.value);
      document.getElementById(
        'contenido-personajes'
      ).innerHTML = mostrarCampeones(array2);
    }
  });
};

// llama por daño de ataque
llamadaPorOrdenAtaque = (dataLol) => {
  const orden = document.getElementById('orden-ataque');
  orden.addEventListener('change', () => {
    let capturar = document.getElementById('tipo').value;
    if (capturar === '0') {
      let array3 = sortAtaque(dataLol, orden.value);
      document.getElementById(
        'contenido-personajes'
      ).innerHTML = mostrarCampeones(array3);
    } else {
      const ar = mostrarAsesinos(dataLol, capturar);
      let array2 = sortAtaque(ar, orden.value);
      document.getElementById(
        'contenido-personajes'
      ).innerHTML = mostrarCampeones(array2);
    }
  });
};

// llama a mi modal
llamadaModal = (dataLol) => {
  descripcion.addEventListener('click', () => {
    const campeon = event.target.parentElement.id;
    const idCampeones = dataLol
      .map(personajes => personajes.id)
      .indexOf(campeon);
    if (event.target.parentElement.getAttribute('name') === 'jalar') {
      // mostramos modal
      document.getElementById('mi-modal').classList.remove('hide');
      // insertamos caracteristicas en el modal
      document.getElementById('info-de-lol').innerHTML = `
     
     <p class="nombre main-color">${dataLol[idCampeones].id}</p> 
     <p class="su-titulo">${dataLol[idCampeones].title}</p>
    <div class="contenido-modal flex">
     <div class="contenido-descripcion flex">
     
        <p class="su-descripcion">${dataLol[idCampeones].blurb}</p>
      </div>
     <div class="habilidades flex">
     <i class="fas fa-hand-rock main-color"></i> <p class="su-info"> Ataque: ${dataLol[idCampeones].info.attack}</p>
      <i class="fas fa-meteor main-color"></i> <p class="su-info">Defensa: ${dataLol[idCampeones].info.defense}</p>
      <i class="fas fa-magic main-color"></i> <p class="su-info"> Magia: ${dataLol[idCampeones].info.magic}</p>
      <i class="fas fa-shield-alt main-color"></i> <p class="su-info"> Dificultad: ${dataLol[idCampeones].info.difficulty}</p>
    </div>`;
    }
  });
};
const cerrar = document.getElementById('close');
cerrar.addEventListener('click', () => {
  document.getElementById('mi-modal').classList.add('hide');
});