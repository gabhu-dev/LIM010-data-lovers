//DATOS
const contrasena = document.getElementById('password');
const usuario = document.getElementById('usuario');
//BOTONES
const empezar = document.getElementById('ingresar');
const campeones = document.getElementById('campeones');
//VISTAS
const vistaLogin = document.getElementById('pantalla-login');
const vistaBienvenida = document.getElementById('pantalla-bienvenida');
const vistaCampeones = document.getElementById('pantallaCampeones');
//CONTROLANDO HEADER
const cabecera = document.getElementById('cabecera');
const barraNavegacion = document.getElementById('barra')
    //const vistaCampeones = document.getElementById('pantallaCampeones')
    //Contador de intentos en login
let password = 0;
let arrayLOL = Object.values(LOL.data);

//Funciones
empezar.addEventListener('click', () => {
    const datos = contrasena.value;
    const datosUsuario = usuario.value;
    if (password < 2) {
        if (datos === '' && datosUsuario === '') {
            vistaLogin.classList.add('hide');
            vistaBienvenida.classList.remove('hide');
            cabecera.classList.remove('hide');
            barraNavegacion.classList.remove('hide')

        } else {
            document.getElementById('mensajeError').innerHTML = '*Datos Incorrectos*';
            password++;
        }
    }
});
campeones.addEventListener('click', () => {
    let array = '';
    array = mostrarCampeones(arrayLOL);
    document.getElementById('name').innerHTML = array;
    vistaBienvenida.classList.add('hide');
    vistaCampeones.classList.remove('hide');

});

tagk.addEventListener('change', () => {
    const agarrre = document.getElementById('tagk').value;
    let vacio = '';
    let array1 = [];
    array1 = mostrarAsesinos(arrayLOL, agarrre);
    vacio = mostrarCampeones(array1);
    document.getElementById('name').innerHTML = vacio;

});
ad.addEventListener('change', () => {
    const ascendente = document.getElementById('ad').value;
    let vacio_1 = '';
    let array2 = [];
    array2 = ataque(arrayLOL, ascendente);
    vacio_1 = mostrarCampeones(array2);
    document.getElementById('name').innerHTML = vacio_1;
});