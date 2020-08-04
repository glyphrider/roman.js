const Roman = require('./roman');
const { TestScheduler } = require('jest');
var roman = new Roman();

var testCases = [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [11, 'XI'],
    [14, 'XIV'],
    [15, 'XV'],
    [16, 'XVI'],
    [19, 'XIX'],
    [20, 'XX'],
    [21, 'XXI'],
    [39, 'XXXIX'],
    [40, 'XL'],
    [41, 'XLI'],
    [42, 'XLII'],
    [43, 'XLIII'],
    [44, 'XLIV'],
    [45, 'XLV'],
    [46, 'XLVI'],
    [47, 'XLVII'],
    [48, 'XLVIII'],
    [49, 'XLIX'],
    [50, 'L']
];

describe('.toRoman()', () => {
    test.each(testCases)('should convert %i to %s', (a,r) => {
        expect(roman.toRoman(a)).toBe(r);
    })
});

describe('.toArabic()', () => {
    test.each(testCases.map((arr) => { return [arr[1], arr[0]]; }))('should convert %s to %i', (r,a) => {
        expect(roman.toArabic(r)).toBe(a);
    })
});
