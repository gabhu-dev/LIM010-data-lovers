/* Manejo del DOM */
const empezar = document.getElementById('empezar');
empezar.addEventListener('click', () => {
    document.getElementById('pantalla-1').classList.add('hide');
    document.getElementById('pantalla-2').classList.remove('hide');
})