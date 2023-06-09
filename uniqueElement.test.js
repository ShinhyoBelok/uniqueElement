import uniqueElement from './uniqueElement.js';

describe('unique Element function', () => {
  test('Test if return an array with only unique elements', () => {
    const array1 = [10,2,30,3,34,6,7];
    const array2 = [1,2,3,6,7];
    let result = uniqueElement(array1, array2);
    result = result.sort();
    expect(result).toStrictEqual([1,10,30,34]);
  });
});


