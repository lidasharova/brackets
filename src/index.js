module.exports = function check(str, bracketsConfig) {
  // let BRACKETS_PAIR = Object.fromEntries(bracketsConfig); //не в той последовательности строится массив

  let BRACKETS_PAIR = {};
  let startBracket = '';
  let endBracket = '';

  // формируем объект пар закрывающая - открывающая
  for (let i = 0; i < bracketsConfig.length; i++) {
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for (brackets of bracketsConfig) {
    startBracket += brackets[0];
    endBracket += brackets[1];
  }
  let OPEN_BRACKETS = startBracket.split(''); //массив из открывающихся скобочек
  let stack = [];

  for (const current of str) {
    if (current in BRACKETS_PAIR) {
      if (BRACKETS_PAIR[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }

  return !stack.length;
};
