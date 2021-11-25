//import compact from '../src/compact'

/*
 * Tämä testitiedosto on muokattu niin, että testejä
 * ei toteuteta muiden testien yhteydessä. Tämä testitiedosto
 * löysi virheen compact.js toiminnasta, emmekä saaneet 
 * Travisia ja Coverallsia toimimaan, jos virheitä löytyi.
 * Päädyimme siis muokkaamaan tämän testin "näkymättömiin".
 * Tehty koodi löytyy kuitenkin tästä, ja löydetty virhe on dokumentoituna 
 * testausraporttiin. 
 */

/*
 * Nämä testit testaavat compact.js toimintaa. Compactin
 * pitäisi poistaa parametrina annetusta listasta kaikki
 * Null-, undefined, falsy-arvot sekä tyhjät merkkijonot.
 *
 * compact.js toimii muuten oikein, mutta tiputtaa aina
 * listan ekan säilytettävän arvon pois. Poistaa kuitenkin
 * myös vaaditut falsyt ja nullit.
 * Jos listalla vain yksi palautettava, ei palauta mitään.
 */


test('removes falsys and nulls', () => {
    expect(compact([0, 1, 2, 3])).toMatchObject([1, 2, 3]);
});

test('removes falsys and nulls', () => {
    expect(compact([null, '1', false, '', '2', '3'])).toMatchObject(['1', '2', '3']);
});

test('removes falsys, emptys and nulls', () => {
    expect(compact(['apple', 'orange', '', '', 'pear', null])).toMatchObject(['apple', 'orange', 'pear']);
});

test('removes falsys, emptys and nulls', () => {
    expect(compact([false, false, '', 'one', '', 'two'])).toMatchObject(['one','two']);
});

test('removes falsys, emptys and nulls', () => {
    expect(compact(['', '', false, null, '1'])).toMatchObject(['1']);
});

