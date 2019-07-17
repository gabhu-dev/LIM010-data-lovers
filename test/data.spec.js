global.window = global;
require('../src/data');
require('./data.spec.js');


describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toEqual('function');
  });

  it('debería retornar "example"', () => {
    expect(example()).toEqual('example');
  });
});
const dataLol =
[{
  Aatrox: {
    id: 'Aatrox',
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
    stats: {
      attackdamage: 60.376,
    }
  },
  Ahri: {
    id: 'Akali',
    name: 'Ahri',
    tags: ['Mage', 'Assassin'],
    stats: {
      attackdamage: 53.04,
    }
  },
  Akali: {
    id: 'Akali',
    name: 'Akali',
    tags: ['Assassin'],
    stats: {
      attackdamage: 58.376, 
    }
  },
  Alistar: {
    id: 'Alistar',
    name: 'Alistar',
    tags: ['Tank', 'Support'],
    stats: {
      attackdamage: 61.1116,
    }}
}];
describe('mostrarAsesinos', () => {
  it('debería retornar los campeones de tipo Tank', () => {
    expect(mostrarAsesinos(dataLol, 'Tank')[0][0].tags).toEqual(['Tank', 'Support']);
  });
});