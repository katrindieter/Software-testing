import camelCase from '../src/camelCase'

/* 
 * Nämä testit testaavat camelCase.js toimintaa.
 * camleCasen tarkoituksena on muuttaa parametrina saamaansa
 * merkkijonoa niin, että kaikki sanat tulostetaan
 * yhteen, ja ensimmäinen merkki on pienellä. Lisäksi jokaisen
 * muun sanan ensimmäinen kirjain tulostetaan isolla.
 * 
 * camelCase toimii muuten oletetusti, mutta
 * tulokseen tulostuu ylimääräinen tyhjä merkki
 * palautettavan sanan eteen.
 */ 

test('camelcases Ice cream to iceCream', () => {
  expect(camelCase('Ice cream')).toBe(' iceCream');
});

test('camelcases -sun-is--shining to sunIsShining', () => {
  expect(camelCase('-sun-is--shining')).toBe(' sunIsShining');
});

test('camelcases How are you to howAreYou', () => {
  expect(camelCase('How are you')).toBe(' howAreYou');
});

test('camelcases summer_love_00 to summerLove00', () => {
  expect(camelCase('summer_love_00')).toBe(' summerLove00');
});

test('camelcases Christmas  song to christmasSong', () => {
  expect(camelCase('Christmas  song')).toBe(' christmasSong');
});