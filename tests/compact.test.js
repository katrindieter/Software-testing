import compact from '../src/compact'

/*compact.js toimii muuten oikein, mutta tiputtaa aina
  listan ekan säilytettävän arvon pois? Poistaa kuitenkin
  myös vaaditut falsyt ja nullit.
  Jos listalla vain yksi palautettava, ei palauta mitään.
 */

test('removes falsys and nulls', () => {
    expect(compact([null, 'a', false, '', 'b', 'c'])).toBe(['b', 'c']);
});

test('removes falsys and nulls', () => {
    expect(compact([null, '1', false, '', '2', '3'])).toBe(['2', '3']);
});

test('removes falsys, emptys and nulls', () => {
    expect(compact(['apple', 'orange', '', '', 'pear', null])).toBe(['orange', 'pear']);
});

test('removes falsys, emptys and nulls', () => {
    expect(compact([false, false, '', 'one', '', 'two'])).toBe(['two']);
});

//test('removes falsys, emptys and nulls', () => {
//    expect(compact(['', '', false, null, '1'])).toBe(['1']);
//});

