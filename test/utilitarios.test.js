const Utilitarios = require('../src/utilitarios');

describe('Utilitarios', () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  describe('inverterString', () => {
    it('deve inverter uma string corretamente', () => {
      expect(utilitarios.inverterString('hello')).toBe('olleh');
    });

    it('deve retornar uma string vazia se a entrada for vazia', () => {
      expect(utilitarios.inverterString('')).toBe('');
    });
  });

  describe('contarCaracteres', () => {
    it('deve contar os caracteres de uma string', () => {
      expect(utilitarios.contarCaracteres('jest')).toBe(4);
    });

    it('deve retornar 0 para uma string vazia', () => {
      expect(utilitarios.contarCaracteres('')).toBe(0);
    });
  });

  describe('paraMaiusculas', () => {
    it('deve converter a string para maiúsculas', () => {
      expect(utilitarios.paraMaiusculas('teste')).toBe('TESTE');
    });
  });

  describe('paraMinusculas', () => {
    it('deve converter a string para minúsculas', () => {
      expect(utilitarios.paraMinusculas('TESTE')).toBe('teste');
    });
  });

  describe('primeiraLetraMaiuscula', () => {
    it('deve colocar a primeira letra da string em maiúscula', () => {
      expect(utilitarios.primeiraLetraMaiuscula('rafael')).toBe('Rafael');
    });
  });

  // Testes para as operações matemáticas
  describe('Operações Matemáticas', () => {
    it('somar: deve somar dois números', () => {
      expect(utilitarios.somar(5, 3)).toBe(8);
    });

    it('subtrair: deve subtrair dois números', () => {
      expect(utilitarios.subtrair(10, 4)).toBe(6);
    });

    it('multiplicar: deve multiplicar dois números', () => {
      expect(utilitarios.multiplicar(3, 4)).toBe(12);
    });

    it('dividir: deve dividir dois números', () => {
      expect(utilitarios.dividir(10, 2)).toBe(5);
    });

    it('dividir: deve lançar um erro ao dividir por zero', () => {

      expect(() => utilitarios.dividir(10, 0)).toThrow('Divisão por zero');
    });
  });

  // Testes para o método ehPar
  describe('ehPar', () => {
    it('deve retornar true para um número par', () => {
      expect(utilitarios.ehPar(4)).toBeTruthy();
    });

    it('deve retornar false para um número ímpar', () => {
      expect(utilitarios.ehPar(5)).toBeFalsy();
    });
  });

  // Testes para manipulação de arrays
  describe('Manipulação de Arrays', () => {
    const arrayOriginal = [1, 5, 2, 4, 3];
    const arrayStrings = ['c', 'a', 'b'];

    it('primeiroElemento: deve retornar o primeiro elemento do array', () => {
      expect(utilitarios.primeiroElemento(arrayOriginal)).toBe(1);
    });

    it('ultimoElemento: deve retornar o último elemento do array', () => {
      expect(utilitarios.ultimoElemento(arrayOriginal)).toBe(3);
    });

    it('tamanhoArray: deve retornar o tamanho do array', () => {
      expect(utilitarios.tamanhoArray(arrayOriginal)).toBe(5);
    });

    it('ordenarArray: deve retornar um novo array ordenado', () => {

      expect(utilitarios.ordenarArray(arrayOriginal)).toEqual([1, 2, 3, 4, 5]);
      expect(utilitarios.ordenarArray(arrayStrings)).toEqual(['a', 'b', 'c']);
      // Garante que o array original não foi modificado
      expect(arrayOriginal).toEqual([1, 5, 2, 4, 3]);
    });

    it('inverterArray: deve retornar um novo array invertido', () => {
      expect(utilitarios.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
      // Garante que o array original não foi modificado
      const original = [1, 2, 3];
      utilitarios.inverterArray(original);
      expect(original).toEqual([1, 2, 3]);
    });
    
    it('mediaArray: deve calcular a média dos números em um array', () => {
        expect(utilitarios.mediaArray([1, 2, 3, 4, 5])).toBe(3);
    });

    it('mediaArray: deve retornar 0 para um array vazio', () => {
        expect(utilitarios.mediaArray([])).toBe(0);
    });

    it('removerDuplicados: deve remover elementos duplicados do array', () => {
        expect(utilitarios.removerDuplicados([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    });

    it('juntarArray: deve juntar os elementos de um array com um separador', () => {
        expect(utilitarios.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });
  });

  // Testes para métodos utilitários gerais
  describe('Utilitários Gerais', () => {
    it('gerarNumeroAleatorio: deve gerar um número dentro do intervalo esperado', () => {
      const numero = utilitarios.gerarNumeroAleatorio(50);
      expect(numero).toBeGreaterThanOrEqual(0);
      expect(numero).toBeLessThan(50);
    });

    it('ehNumero: deve retornar true para um número e false para outros tipos', () => {
      expect(utilitarios.ehNumero(10)).toBeTruthy();
      expect(utilitarios.ehNumero('10')).toBeFalsy();
      expect(utilitarios.ehNumero(NaN)).toBeFalsy();
    });

    it('removerEspacos: deve remover espaços do início e do fim da string', () => {
      expect(utilitarios.removerEspacos('  teste  ')).toBe('teste');
    });

    it('repetirTexto: deve repetir o texto o número de vezes especificado', () => {
      expect(utilitarios.repetirTexto('abc', 3)).toBe('abcabcabc');
    });

    it('contarPalavras: deve contar o número de palavras em uma string', () => {
      expect(utilitarios.contarPalavras('  um dois   três ')).toBe(3);
    });

    it('ehPalindromo: deve verificar corretamente se uma string é um palíndromo', () => {
      expect(utilitarios.ehPalindromo('arara')).toBeTruthy();
      expect(utilitarios.ehPalindromo('Anotaram a data da maratona')).toBeTruthy();
      expect(utilitarios.ehPalindromo('teste')).toBeFalsy();
    });
  });

  // Testes para manipulação de objetos
  describe('Manipulação de Objetos', () => {
    it('mesclarObjetos: deve mesclar dois objetos, com o segundo sobrescrevendo o primeiro', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const resultadoEsperado = { a: 1, b: 3, c: 4 };
      expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual(resultadoEsperado);
    });
  });
});