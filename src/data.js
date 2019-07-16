/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// filtra solo imagen,titulo y nombre segun la condicion
// la condicion es el tipo que selecciona el usuario
const mostrarAsesinos = (data, condition) => {
  const mostrar = data.filter(caracter => (caracter.tags[0] === condition || caracter.tags[1] === condition));
  return mostrar;
};

// ordenando segun el orden alfabético
const sortAlfa = (data, condition)=> {
  const mostrarA = data.sort((ab, bc) => {
    // ordenando de menor a mayor
    if (ab.name > bc.name) {
      return 1;
    }
    if (ab.name < bc.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });    
  if (condition === '0') {
    return mostrarA;
  }
  if (condition === '1') {
    return mostrarA.reverse();
  }
  return 0;
};
const sortAtaque = (data, condition)=> {
  const mostrarB = data.sort((ab, bc) => {
    // ordenando de menor a mayor
    if (ab.stats.attackdamage > bc.stats.attackdamage) {
      return 1;
    }
    if (ab.stats.attackdamage < bc.stats.attackdamage) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });    
  if (condition === '0') {
    return mostrarB;
  }
  if (condition === '1') {
    return mostrarB.reverse();
  }
  return 0;
};
const suma = (data) => {
  const extrayendo = data.map(tipo=>tipo.stats.attackdamage);
  const suma = extrayendo.reduce((previous,current)=>current+=previous);
  const promedio = suma /extrayendo.length;
  return promedio;
};
window.suma = suma;
window.mostrarAsesinos = mostrarAsesinos;
window.sortAtaque = sortAtaque;
window.sortAlfa = sortAlfa;