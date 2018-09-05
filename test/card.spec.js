const assert = require('assert');
const cardValidador = require('../index');

describe('validaCartao()', () => {

 it('Deve retornar true', () => {
        assert.equal(cardValidador('36490102462661'), 'true');
    });
 it('Deveria retornar true para um número de cartão válido', () => {
    assert.equal(cardValidador('5453010000066167'), 'true');
  });
  it('Deveria retornar false para a um número de cartão inválido', () => {
    assert.equal(cardValidador('5453010000066172'), 'false');
  });

  it('Quando informar uma string', () => {
    assert.equal(cardValidador('abc'), "Erro");
  });
  it('Quando informar um número inválido', () => {
    assert.equal(cardValidador(''), "Erro");
  });
  it('Quando informar um número com um dígito', () => {
    assert.equal(cardValidador('1'), "Erro");
  });
});



