const { stats, statsAndValidate } = require('../statsFunction')
const { mdLinks } = require('../index')
const { mocks } = require('../mocks')

describe('Probando funciones', () => {

  it('mdLinks sea una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('mdLinks con validate en false', done => {
    mdLinks(mocks.path, { validate: false }).then(res => {
      const inValidateFalse = mocks.objValidateFalse;
      expect(res).toEqual(inValidateFalse)
      done()
    })
  });

  it('mdLinks con validate en true', done => {
    mdLinks(mocks.path, { validate: true }).then(res => {
      const inValidateTrue = mocks.objValidateTrue;
      expect(res).toEqual(inValidateTrue)
      done()
    })
  });

  it('stats sea una funcion', () => {
    expect(typeof stats).toBe('function');
  });

  it('stats cuando es true', done => {
    mdLinks(mocks.path, { validate: true }).then(res => {
      const resStats = stats(res)
      const inStatsTrue = mocks.statsTrue
      expect(resStats).toEqual(inStatsTrue)
      done()
    })
  });

  it('statsAndValidate sea una funcion', () => {
    expect(typeof statsAndValidate).toBe('function');
  });

  it('statsAndValidate cuando se dan las dos opciones', done => {
    mdLinks(mocks.path, { validate: true }).then(res => {
      const resStatsAndValidate = statsAndValidate(res)
      const inStatsAndValidate = mocks.statsAndValidate
      expect(resStatsAndValidate).toEqual(inStatsAndValidate)
      done()
    })
  });


});
