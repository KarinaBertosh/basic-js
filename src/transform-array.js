const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
//  function transform(arr) {
//   if (!(Array.isArray(arr))) {
//     throw new Error(`'arr' parameter must be an instance of the Array!`);
//   }

//   const discardNext = '--discard-next';
//   const discardPrev = '--discard-prev';
//   const doubleNext = '--double-next';
//   const doublePrev = '--double-prev';
//   const newArr = [...arr];
//   const result = [];
//   for(i=0; i<newArr.length; i++) {
//     if(typeof newArr[i] === 'number') {
//       result.push(newArr[i]);
//     }
//     if (newArr[i] !== discardNext || newArr[i] !== discardPrev || newArr[i] !== doubleNext || newArr[i] !== doublePrev) {
//       continue;
//     }
//     else if(newArr[i] === discardNext && newArr[i+1]){
//       newArr.splice(i+1, 1);
//     }
//     else if(newArr[i] === discardPrev && result[i-1]){
//       result.splice(result.length - 1, 1);
//     }
//     else if(newArr[i] === doubleNext && newArr[i+1]){
//       result.push(newArr[i+1]);
//     }
//     else if(newArr[i] === doublePrev && newArr[i-1]) {
//       result.push(newArr[i-1]);
//     }
//   }
//   return result;
// }
function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  const newArr = [...arr];

  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] !== discardNext && newArr[i] !== discardPrev && newArr[i] !== doubleNext && newArr[i] !== doublePrev && typeof newArr[i] !== 'number') {
      continue;
    }
    else if (newArr[i] === discardNext && newArr[i + 1]) {
      newArr.splice(i + 1, 1, '#123')
    }
    else if (newArr[i] === discardPrev && newArr[i - 1]) {
      newArr.splice(i - 1, 1, '#123');
    }
    else if (newArr[i] === doubleNext && newArr[i + 1]) {
      const el = newArr[i + 1];
      newArr.splice(i, 1, el);
    }
    else if (newArr[i] === doublePrev && newArr[i + 1]) {
      const el = newArr[i - 1];
      newArr.splice(i, 1, el);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === discardNext
      || newArr[i] === discardPrev
      || newArr[i] === doubleNext
      || newArr[i] === doublePrev
      || newArr[i] === '#123') {
      newArr.splice(i, 1)
      i--
    }
  }
  return newArr;
}
module.exports = {
  transform
};
