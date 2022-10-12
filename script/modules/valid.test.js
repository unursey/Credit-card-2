import {
    codeCardTest,
    nameCardTest,
    numberCardTest,
  } from './valid';

  describe('Проверка кода карты', () => {
    it('Правильный код карты', () => {
      expect(codeCardTest('453')).toBe(true);
    });
  
    it('Неправильный код карты', () => {
      expect(codeCardTest('4')).toBe(false);
      expect(codeCardTest('34')).toBe(false);
      expect(codeCardTest('122477')).toBe(false);
      expect(codeCardTest('2,2')).toBe(false);
    });
  });
  
  describe('Проверка имени карты', () => {
    it('Правильное имя карты', () => {
      expect(nameCardTest('ANNA ANNA')).toBe(true);
      expect(nameCardTest('ANNA  ANNA')).toBe(true);
      expect(nameCardTest('Anna Anna  ')).toBe(true);
    });
  
    it('Неправильное имя карты', () => {
      expect(nameCardTest('ANNA')).toBe(false);
      expect(nameCardTest('АННА АННА')).toBe(false);
      expect(nameCardTest('ANNA ANNA ANNA')).toBe(false);
      expect(nameCardTest('323 ANNA')).toBe(false);
    });
  });
  
  describe('Проверка номера карты', () => {
    it('Правильный номер карты', () => {
      expect(numberCardTest('1234 1234 1234 1234')).toBe(true);
      expect(numberCardTest('1234 123456 12345')).toBe(true);
    });
  
    it('Неправильный номер карты', () => {
      expect(numberCardTest('вввв аааа ееее ееее')).toBe(false);
      expect(numberCardTest('fsdf fdsfsd fffds')).toBe(false);
      expect(numberCardTest('1234 12,34 1234 1234')).toBe(false);
      expect(numberCardTest('123 1234 123')).toBe(false);
      expect(numberCardTest('1234 1234 1234 1234 1234')).toBe(false);
    });
  });
  