/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
for(let i=0;i<LOL.length;i++)
    return 'example';
};

window.example = example;*/
const ataque = LOL.filter(LOL => (LOL.attack < 10));
console.log(equal(ataque))