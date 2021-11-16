import capitalize from '../src/capitalize'



test('capitalize string FRED to Fred', () => {
    expect(capitalize('FRED')).toBe('Fred');
});

test('capitalize string footBall to Football', () => {
    expect(capitalize('footBall')).toBe('Football');
});

test('capitalize string cat to Cat', () => {
    expect(capitalize('cat')).toBe('Cat');
});

test('capitalize string apple pie to Apple pie', () => {
    expect(capitalize('apple pie')).toBe('Apple pie');
});

test('capitalize string father_christmas to Father_christmas', () => {
    expect(capitalize('father_christmas')).toBe('Father_christmas');
});
