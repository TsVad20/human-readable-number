module.exports = function toReadable(number) {
  const arr = [...`${number}`];
  let result = '';
  const textValues = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
  };

  if (arr.length === 1) {
    result = `${textValues[arr[0]]}`;
  } else if (arr.length === 2) {
    if (+arr[1] === 0) {
      result = `${textValues[arr[0] * 10]}`;
    } else if (arr[0] + arr[1] < 20) {
      result = `${textValues[arr[0] + arr[1]]}`;
    } else {
      result = `${textValues[arr[0] * 10]} ${textValues[arr[1] * 1]}`;
    }
  } else if (arr.length === 3) {
    if (+arr[2] === 0 && +arr[1] === 0) {
      result = `${textValues[arr[0]]} ${textValues[100]}`;
    } else if (+arr[2] === 0) {
      result = `${textValues[arr[0]]} ${textValues[100]} ${
        textValues[arr[1] * 10]
      }`;
    } else if (+arr[1] === 0) {
      result = `${textValues[arr[0]]} ${textValues[100]} ${textValues[arr[2]]}`;
    } else if (arr[1] + arr[0] < 20) {
      result = `${textValues[arr[0]]} ${textValues[100]} ${
        textValues[arr[1] + arr[2]]
      }`;
    } else {
      result = `${textValues[arr[0]]} ${textValues[100]} ${
        textValues[arr[1] * 10]
      } ${textValues[arr[2] * 1]}`;
    }
  }
  return result;
};
