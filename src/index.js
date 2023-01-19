module.exports = function check(str, bracketsConfig) {
  let BRACKETS_PAIR = Object.fromEntries(bracketsConfig);

  let startBracket = '';
  let endBracket = '';
  for (brackets of bracketsConfig) {
    startBracket += brackets[0];
    endBracket += brackets[1];
  }
  let OPEN_BRACKETS = startBracket.split(''); //массив из открывающихся скобочек
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
