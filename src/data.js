/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const mostrarCampeones = (data) => {
    let textC = '';
    for (let i = 0; i < data.length; i++) {
        const mostrar = '<div class = personajes-flex><img src="' + data[i].img + '"></img><p>' + data[i].name + '</p><p>' + data[i].title + '</p></div>';
        textC += mostrar;
    }
    return textC;
};
//filtra solo imagen,titulo y nombre segun la condicion
//la condicion es el tipo que selecciona el usuario
const mostrarAsesinos = (data, condition) => {
    const mostrar = data.filter(caracter => (caracter.tags[0] === condition || caracter.tags[1] === condition));
    return mostrar;
};

//ordenando segun el attackdamage
const ataque = (data, condition) => {
    const mostrar = data.sort((a, b) => {
        //ordenando de menor a mayor
        if (a.stats.attackdamage < b.stats.attackdamage === condition) {
            return 0;
        }
        if (a.stats.attackdamage > b.stats.attackdamage === condition) {
            return 1;
        }

    });
    return mostrar;
    //console.log(mostrarDeMenor_mayor);
};
const alfabetico = (data, condition) => {
    const mostrar = data.sort((a, b) => {
        if ((a.name < b.name) ? -1 : 1 === condition);

    })
}

window.mostrarCampeones = mostrarCampeones;
window.mostrarAsesinos = mostrarAsesinos;
window.ataque = ataque;