const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
  let utils;

  beforeEach(() => {
    utils = new Utilitarios();
  });

  describe('Funções de manipulação de Strings', () => {
    test('Deve inverter uma string', () => {
      expect(utils.inverterString('abc')).toBe('cba');
    });

    test('Deve contar o número de caracteres em uma string', () => {
      expect(utils.contarCaracteres('LeandroUgioni')).toBe(13);
    });

    test('Deve converter a string para letras maiúsculas', () => {
      expect(utils.paraMaiusculas('abc')).toBe('ABC');
    });

    test('Deve converter a string para letras minúsculas', () => {
      expect(utils.paraMinusculas('ABC')).toBe('abc');
    });

    test('Deve capitalizar a primeira letra da string', () => {
      expect(utils.primeiraLetraMaiuscula('teste')).toBe('Teste');
    });

    test('Deve lidar com string vazia ao capitalizar a primeira letra', () => {
      expect(utils.primeiraLetraMaiuscula('')).toBe('');
    });

    test('Deve remover espaços em branco no início e no fim da string', () => {
      expect(utils.removerEspacos('  teste ')).toBe('teste');
    });

    test('Deve repetir a string N vezes', () => {
      expect(utils.repetirTexto('ha', 3)).toBe('hahaha');
    });

    test('Deve contar o número de palavras na string', () => {
      expect(utils.contarPalavras('  Olá mundo   teste ')).toBe(3);
    });

    test('Deve verificar se a string é um palíndromo', () => {
      expect(utils.ehPalindromo('Ame a ema')).toBe(true);
    });

    test('Deve verificar se a string não é um palíndromo', () => {
      expect(utils.ehPalindromo('banana')).toBe(false);
    });
  });

  describe('Funções de operações com Números', () => {
    test('Deve somar dois números', () => {
      expect(utils.somar(2, 3)).toBe(5);
    });

    test('Deve subtrair dois números', () => {
      expect(utils.subtrair(10, 4)).toBe(6);
    });

    test('Deve multiplicar dois números', () => {
      expect(utils.multiplicar(3, 4)).toBe(12);
    });

    test('Deve dividir dois números', () => {
      expect(utils.dividir(10, 2)).toBe(5);
    });

    test('Deve lançar um erro ao tentar dividir por zero', () => {
      expect(() => utils.dividir(5, 0)).toThrow('Divisão por zero');
    });

    test('Deve retornar verdadeiro para números pares', () => {
      expect(utils.ehPar(8)).toBe(true);
    });

    test('Deve retornar falso para números ímpares', () => {
      expect(utils.ehPar(7)).toBe(false);
    });

    test('Deve validar corretamente se a entrada é um número', () => {
      expect(utils.ehNumero(42)).toBe(true);
    });

    test('Deve retornar falso para entradas não numéricas', () => {
      expect(utils.ehNumero('42')).toBe(false);
    });

    test('Deve retornar falso para NaN', () => {
      expect(utils.ehNumero(NaN)).toBe(false);
    });

    test('Deve retornar falso para null e undefined', () => {
      expect(utils.ehNumero(null)).toBe(false);
      expect(utils.ehNumero(undefined)).toBe(false);
    });

    test('Deve gerar um número aleatório dentro de um limite especificado', () => {
      const n = utils.gerarNumeroAleatorio(50);
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThan(50);
    });

    test('Deve gerar um número aleatório com o limite padrão (100) se nenhum for especificado', () => {
      const n = utils.gerarNumeroAleatorio();
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThan(100);
    });
  });

  describe('Funções de manipulação de Arrays', () => {
    test('Deve obter o primeiro elemento de um array', () => {
      expect(utils.primeiroElemento([1, 2, 3])).toBe(1);
    });

    test('Deve obter o último elemento de um array', () => {
      expect(utils.ultimoElemento([1, 2, 3])).toBe(3);
    });

    test('Deve retornar o tamanho do array', () => {
      expect(utils.tamanhoArray([1, 2, 3])).toBe(3);
    });

    test('Deve ordenar um array de números', () => {
      expect(utils.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
    });

    test('Deve inverter a ordem dos elementos de um array', () => {
      expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('Deve juntar os elementos do array com um separador customizado', () => {
      expect(utils.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });

    test('Deve juntar os elementos do array com o separador padrão (vírgula)', () => {
      expect(utils.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
    });

    test('Deve calcular a média dos valores em um array', () => {
      expect(utils.mediaArray([2, 4, 6])).toBe(4);
    });

    test('Deve retornar 0 ao calcular a média de um array vazio', () => {
      expect(utils.mediaArray([])).toBe(0);
    });

    test('Deve remover valores duplicados de um array', () => {
      expect(utils.removerDuplicados([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    });
  });

  describe('Funções de manipulação de Objetos', () => {
    test('Deve mesclar dois objetos, sobrescrevendo chaves duplicadas', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('Deve mesclar um objeto com um objeto vazio, mantendo o original', () => {
      const obj1 = { a: 1 };
      const obj2 = {};
      expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1 });
    });

    test('Deve mesclar dois objetos vazios, resultando em um objeto vazio', () => {
      expect(utils.mesclarObjetos({}, {})).toEqual({});
    });
  });
});