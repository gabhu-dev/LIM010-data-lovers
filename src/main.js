//DATOS
const contrasena = document.getElementById('password');
const usuario = document.getElementById('usuario');
//BOTONES
const empezar = document.getElementById('ingresar');
//VISTAS
const vistaLogin = document.getElementById('pantalla-login');
const vistaBienvenida = document.getElementById('pantalla-bienvenida');
//Contador de intentos en login
let password = 0;
//Funciones
empezar.addEventListener('click', () => {
    const datos = contrasena.value;
    const datosUsuario = usuario.value;
    if (password < 2) {
        if (datos === 'LABORATORIA' && datosUsuario === 'LABORATORIA') {
            vistaLogin.classList.add('hide');
            vistaBienvenida.classList.remove('hide');
        } else {
            document.getElementById('mensajeError').innerHTML = 'Datos Incorrectos';
            password++;
        }
    }
});