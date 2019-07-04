/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const mostrarCampeones = (data) => {
let textC = '';
for (let i = 0; i < data.length; i++) {
    const mostrar = '<div class = personajes-flex><img src="'+data[i].img +'"></img><p>'+data[i].name +'</p><p>'+data[i].title+'</p></div>';
    textC += mostrar;
}
return textC;
};

const mostrarAsesinos = (data,condition)=>{
 const mostrar =  data.filter(caracter => (caracter.tags[0]===condition || caracter.tags[1] === condition));
  return mostrar;
};


window.mostrarCampeones = mostrarCampeones;
window.mostrarAsesinos=mostrarAsesinos;
