const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  const defaultSeparator = separator ? separator : '+';
  const defaultAdditionSeparator = additionSeparator ? additionSeparator : '|';

  let result = '';
  if (additionRepeatTimes) {
    const oneAdditionTime = new Array(additionRepeatTimes).fill(addition === null ? 'null' : addition).join(defaultAdditionSeparator);
    result = new Array(repeatTimes).fill(str + oneAdditionTime).join(defaultSeparator);
  }
  else {
    let repeatText = addition ? str + addition : str;
    result = new Array(repeatTimes).fill(repeatText).join(defaultSeparator);
  }
  return result;
}

module.exports = {
  repeater
};
