/* Manejo del DOM */
const empezar = document.getElementById('ingresar');
empezar.addEventListener('click', () => {
    document.getElementById('pantalla-login').classList.add('hide');
    document.getElementById('pantalla-2').classList.remove('hide');
})