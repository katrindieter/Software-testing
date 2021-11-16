import compact from '../src/compact'



test('removes falsys and nulls', () => {
    expect(compact([null, 'a', false, '', 'b', 'c'])).toBe(['a', 'b', 'c']);
});

test('removes falsys and nulls', () => {
    expect(compact([null, '1', false, '', '2', '3'])).toBe(['1', '2', '3']);
});

test('removes falsys, emptys and nulls', () => {
    expect(compact(['apple', 'orange', '', '', 'pear', null])).toBe(['apple', 'orange', 'pear']);
});

test('removes falsys, emptys and nulls', () => {
    expect(compact([false, false, '', 'one', '', 'two'])).toBe(['one', 'two']);
});

test('removes falsys, emptys and nulls', () => {
    expect(compact(['', '', false, null, '1'])).toBe(['1']);
});

// compact.js toimii muuten oikein, mutta tiputtaa aina
// listan ekan säilytettävän arvon pois? Poistaa kuitenkin
// myös vaaditut falsyt ja nullit.
// Jos listalla vain yksi palautettava, ei palauta mitään.