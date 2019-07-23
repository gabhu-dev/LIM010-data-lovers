/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// la condicion es el tipo que selecciona el usuario
const mostrarAsesinos = (data, condition) => {
    const mostrar = data.filter(caracter => (caracter.tags[0] === condition || caracter.tags[1] === condition));
    return mostrar;
};

// ordenando segun el orden alfabético
const sortAlfa = (data, condition) => {
    const mostrarA = data.sort((ab, bc) => (ab.name > bc.name ? 1 : -1));
    if (condition === '0') {
        return mostrarA;
    }
    if (condition === '1') {
        return mostrarA.reverse();
    }
};
//Ordenando segun daño de ataque
const sortAtaque = (data, condition) => {
    const mostrarB = data.sort((ab, cd) => (ab.stats.attackdamage > cd.stats.attackdamage ? 1 : -1));

    if (condition === '0') {
        return mostrarB;
    } else if (condition === '1') {
        return mostrarB.reverse();
    }
};
// suma y obtiene el promedio por medio de ataque
const suma = (data) => {
    const extrayendo = data.map(tipo => {
        return tipo.stats.attackdamage;
    });
    const suma = extrayendo.reduce((previous, current) => current += previous);
    const promedio = Math.round(suma / extrayendo.length);
    return promedio;
};
window.suma = suma;
window.mostrarAsesinos = mostrarAsesinos;
window.sortAtaque = sortAtaque;
window.sortAlfa = sortAlfa;



