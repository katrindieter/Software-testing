import ceil from '../src/ceil'

/* 
 * Nämä testit testaavat ceil.js toimintaa. Ceil pyöristää
 * parametrina annetun luvun toisen parametrin määrittämällä
 * tarkkuudella ylöspäin. Jos toista parametria ei ole, 
 * pyöristys tapahtuu kokonaisluvun tarkkuudella ylöspäin.
 */ 


test('rounds 4.006 with precision 0 to be 5', () => {
    expect(ceil(4.006)).toBe(5);
});

test('rounds 6.05 with precision 1 to be 6.1', () => {
    expect(ceil(6.05, 1)).toBe(6.1);
});

test('rounds 6040 with precision -2 to be 6100', () => {
    expect(ceil(6040, -2)).toBe(6100);
});

test('rounds 0.0605 with precision 4 to be 0.0606', () => {
    expect(ceil(0.06057, 4)).toBe(0.0606);
});

test('rounds 1978.67 with precision -1 to be 1980', () => {
    expect(ceil(1978, -1)).toBe(1980);
});
