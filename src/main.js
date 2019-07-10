// DATOS
const contrasena = document.getElementById('password');
const usuario = document.getElementById('usuario');
// BOTONES
const empezar = document.getElementById('ingresar');
const campeones = document.getElementById('campeones');
const begin = document.getElementById('inicio');
const name = document.getElementById('name')
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

begin.addEventListener('click', () => {
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

const az = document.getElementById('az');
az.addEventListener('change', () => {
    let array2 = sortAtaque(arrayLOL, az.value);
    document.getElementById('name').innerHTML = mostrarCampeones(array2);
    // console.log()
});
// orden de ataque
const orden = document.getElementById('orden-alfabetico');
orden.addEventListener('change', () => {
    let array3 = sortAlfa(arrayLOL, orden.value);
    document.getElementById('name').innerHTML = mostrarCampeones(array3);
});

// para ver las obtener las imagenes
name.addEventListener('click', () => {
    const propiedad = event.target.parentElement.id - 1;
    if (event.target.parentElement.getAttribute('name') === 'propiedad') {
        //mostramnos modal
        document.getElementById('modal').classList.remove('hide');
        //insertamos caracteristicas en el modal
        document.getElementById('character').innerHTML = `
    <img  class = "imgModal" src=" + ${arrayLOL[propiedad].img} "></img>
    <p> ${arrayLOL[propiedad].name}</p>
    <p>  ${arrayLOL[propiedad].tagk} </p>
    `;
    }
});

close.addEventListener('click', () => {
    document.getElementById('modal').classList.add('hide');
});