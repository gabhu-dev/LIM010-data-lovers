//DATOS
const contrasena =document.getElementById('password');
const usuario= document.getElementById('usuario');
//BOTONES
const empezar = document.getElementById('ingresar');
//const campeones= document.getElementById('campeones');
//VISTAS
const vistaLogin=document.getElementById('pantalla-login');
const vistaBienvenida=document.getElementById('pantalla-bienvenida');
const cabecera =document.getElementById('cabecera');
const barraNavegacion =document.getElementById('barra')
//const vistaCampeones = document.getElementById('pantallaCampeones')
//Contador de intentos en login
let password = 0;
//Funciones
empezar.addEventListener('click', ()=>{
    const datos = contrasena.value;
    const datosUsuario = usuario.value;
    if (password < 2) {
     if(datos==='' && datosUsuario===''){
         vistaLogin.classList.add('hide');
         vistaBienvenida.classList.remove('hide');
         cabecera.classList.remove('hide');
         barraNavegacion.classList.remove('hide')

     }else{
        document.getElementById('mensajeError').innerHTML='*Datos Incorrectos*';
        password++;
    }    
    }
});
 fetch
//campeones.addEventListener('click', ()=>{
  // alert('HOla');
    
//});