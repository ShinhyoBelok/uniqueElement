// array1 to hashmap
// array2 to hashmap
// check e array1 to map2
// check e array2 to map1
// return result array

function isTheValueNotExist(result, value) {
  if (!result.includes(value)) {
    return true;
  }
  return false;
}

export default function uniqueElement(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      if (isTheValueNotExist(result, array1[i])) {
        result.push(array1[i]);
      }
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      if (isTheValueNotExist(result, array2[i])) {
        result.push(array2[i]);
      }
    }
  }
  return result;
}

console.log(uniqueElement([1,2,3,3,3,6,7], [10,1,6,9,2]));