/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const organizarData = (personajes,data) => {
  const arrayPrueba = Object.values(data);
  for (let i =0 ; i < arrayPrueba.length; i++){
    if(personajes.hasOwnProperty(arrayPrueba[i].id)){
      arrayPrueba[i].splash = obj[arrayPrueba.id];
      console.log(arrayPrueba[i]);
    }
  }
  //return campeones;
};

//window.example = example;
