/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const mostrarCampeones = (data) => {
    let textC = '';
    for (let i = 0; i < data.length; i++) {
        const mostrar = `
        <div class = personajes-flex name="jalar">
        <img  class = "img"src='${data[i].splash}'/>
        <p class="decorado">${data[i].name}</p>
        <p class="decorado">${data[i].title}</p>
        </div>`;
        textC += mostrar;
    }
    return textC;

};
// recorrer toda la informacion,blurd
/*const runInfoBlurd = (data) => {
    let textD = '';
    for (let i = 0; i < data.length; i++) {
        const mostrar = `
     <div class = caracteristicas>
     <img  class = "imagen"src='${data[i].splash}'/>
     <p class="decorade">${data[i].name}</p>
     <p class="decorade">${data[i].title}</p>
     <p class="info">${data[i].blurb}</p>
     <p class="descripcion">${data[i].info}</p>
     </div>`;
        textD += mostrar;
    }
    return textD;
};

window.runInfoBlurd = runInfoBlurd;*/

// filtra solo imagen,titulo y nombre segun la condicion
// la condicion es el tipo que selecciona el usuario
const mostrarAsesinos = (data, condition) => {
    const mostrar = data.filter(caracter => (caracter.tags[0] === condition || caracter.tags[1] === condition));
    return mostrar;
};




/*const mostrarInfo = (data, condition) => {
    const mostrar = data.filter(caracter => (caracter.tags[0] === condition && caracter.name[1] === condition));
    return mostrar;
};
window.mostrarInfo = mostrarInfo;*/
// ordenando segun el orden alfabético
const sortAtaque = (data, condition) => {
    const mostrarA = data.sort((a, b) => {
        // ordenando de menor a mayor
        if (a.name > b.name)
            return 1;

        if (a.name < b.name)
            return -1;

        // a must be equal to b
        return 0;
    });
    if (condition === '0')
        return mostrarA;

    if (condition === '1')
        return mostrarA.reverse();

    return 0;
};
const sortAlfa = (data, condition) => {
    const mostrarB = data.sort((a, b) => {
        // ordenando de menor a mayor
        if (a.stats.attackdamage > b.stats.attackdamage)
            return 1;

        if (a.stats.attackdamage < b.stats.attackdamage)
            return -1;

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


window.mostrarCampeones = mostrarCampeones;
window.mostrarAsesinos = mostrarAsesinos;
window.sortAtaque = sortAtaque;
window.sortAlfa = sortAlfa;