global.window = global;
require('../src/data');
require('./data.spec.js');

const dataLol =
  [{

    id: 'Aatrox',
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
    stats: {
      attackdamage: 60.376,
    }
  },
  {
    id: 'Ahri',
    name: 'Ahri',
    tags: ['Mage', 'Assassin'],
    stats: {
      attackdamage: 53.04,
    }
  },
  {
    id: 'Akali',
    name: 'Akali',
    tags: ['Assassin'],
    stats: {
      attackdamage: 58.376,
    }
  },
  {
    id: 'Alistar',
    name: 'Alistar',
    tags: ['Tank', 'Support'],
    stats: {
      attackdamage: 61.1116,
    }
  }];
describe('mostrarAsesinos', () => {
  it('debería retornar los campeones de tipo Tank', () => {
    expect(mostrarAsesinos(dataLol, 'Tank')[0].tags[1]).toEqual('Tank');
  });
});
describe('sortAlfa', () => {
  it('debería retornar los campeones de tipo Aatrox', () => {
    expect(sortAlfa(dataLol, '0')[0].name).toEqual('Aatrox');
  });
  it('debería retornar los campeones de tipo Alistar', () => {
    expect(sortAlfa(dataLol, '1')[0].name).toEqual('Alistar');
  });
  it('debería retornar los campeones de tipo Alistar', () => {
    expect(sortAlfa(dataLol, '2')).toEqual(undefined);
  });
});
describe('sortAtaque', () => {
  it('debería retornar los campeones de menor ataque ', () => {
    expect(sortAtaque(dataLol, '0')[0].stats.attackdamage).toEqual(53.04);
  });
  it('debería retornar los campeones de mayor ataque ', () => {
    expect(sortAtaque(dataLol, '1')[0].stats.attackdamage).toEqual(61.1116);
  });
  it('debería retornar los campeones de mayor ataque ', () => {
    expect(sortAtaque(dataLol, '2')).toEqual(undefined);
  });
});
describe('suma', () => {
  it('debería retornar el promedio por daño de ataque', () => {
    expect(suma(dataLol)).toEqual(58);
  });
});
