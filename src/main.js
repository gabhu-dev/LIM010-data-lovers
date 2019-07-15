// DATOS
const secretWord = document.getElementById('password');
const user = document.getElementById('usuario');
// BOTONES
const start = document.getElementById('ingresar');
const champions = document.getElementById('campeones');
const comeBack = document.getElementById('inicio');
const content = document.getElementById('contenido-campeones');
// VISTAS
const viewLogin = document.getElementById('pantalla-login');
const viewWelcome = document.getElementById('pantalla-bienvenida');
const viewChampions = document.getElementById('pantalla-campeones');

// CONTROLANDO HEADER
const head = document.getElementById('cabecera');
const nav = document.getElementById('barra');

//CONVIRTIENDO LA DATA --->ARRAY
let arrayLOL = Object.values(LOL.data);

// Contador de intentos en login
let password = 0;
//1.Evento del primer boton---INGRESAR------------
start.addEventListener('click', () => {
    const data = secretWord.value;
    const dataUser = user.value;
    if (password < 2) {
        if (data === '' && dataUser === '') {
            viewLogin.classList.add('hide');
            viewWelcome.classList.remove('hide');
            head.classList.remove('hide');
            nav.classList.remove('hide');
        } else {
            document.getElementById('mensajeError').innerHTML = '*Datos Incorrectos*';
            password++;
        }
    }
});
//Evento del boton de -----INICIO---ubicado en el menú-----
comeBack.addEventListener('click', () => {
    viewChampions.classList.add('hide');
    viewWelcome.classList.remove('hide');
});
//Evento del boton de -----CAMPEONES----Ubicado en el menú-----
champions.addEventListener('click', () => {
    let array = '';
    array = showChampions(arrayLOL);
    content.innerHTML = array;
    viewWelcome.classList.add('hide');
    viewChampions.classList.remove('hide');
});
//Evento del select ---TIPO----ubicado en el aside----
tipo.addEventListener('change', () => {
    const captureType = document.getElementById('tipo').value;
    let empty = '';
    let array1 = [];
    array1 = showTypes(arrayLOL, captureType);
    empty = showChampion(array1);
    content.innerHTML = empty;
});
//ordena en orden alfabetico
const az = document.getElementById('az');
az.addEventListener('change', () => {
    let captureAlfabeth = document.getElementById('tipo').value;
    if (captureAlfabeth === '0') {
        let array1 = sortAlfa(arrayLOL, az.value);
        content.innerHTML = showChampions(array1);
    } else {
        const array2 = showTypes(arrayLOL, captureAlfabeth);
        let array3 = sortAlfa(array2, az.value);
        content.innerHTML = showChampions(array3);
    }
});
// orden de ataque segun daño de ataque
const orden = document.getElementById('orden-ataque');
orden.addEventListener('change', () => {
    let capture = document.getElementById('tipo').value;
    if (capture === '0') {
        let array1 = sortAtaque(arrayLOL, orden.value);
        content.innerHTML = showChampions(array1);
    } else {
        const array2 = showTypes(arrayLOL, capture);
        let array3 = sortAtaque(array2, orden.value);
        content.innerHTML = showChampions(array3);
    }
});
// evento para el modal
content.addEventListener('click', () => {
    const champion = event.target.parentElement.id;
    const position = arrayLOL.map(x => x.id).indexOf(champion);
    if (event.target.parentElement.getAttribute('name') === 'jalar') {
        // abriendo modal
        document.getElementById('mi-modal').classList.remove('hide');
        // poniendo informacion en el modal
        document.getElementById('info-de-lol').innerHTML = `
     <div class="info-descripcion flex">
     <div class="contenido-modal flex">
     <p class="su-id">${arrayLOL[position].id}</p>
      <img  class = "imgModal"src="${arrayLOL[position].splash}"/> 
      <p class="su-descripcion">${arrayLOL[position].blurb}</p>
      </div>
      <div class="infor-macion flex">
      <p class="su-titulo">${arrayLOL[position].title}</p>
      <p class="su-info">ataque:${arrayLOL[position].info.attack}</p>
      <p class="su-info">defensa:${arrayLOL[position].info.defense}</p>
      <p class="su-info">magic:${arrayLOL[position].info.magic}</p>
      <p class="su-info">dificultad:${arrayLOL[position].info.difficulty}</p>
    
      <div>
      </div>`;
    }
});
//evento para el "X" en el modal
const close = document.getElementById('close');
close.addEventListener('click', () => {
    document.getElementById('mi-modal').classList.add('hide');
});