module.exports = function check(str, bracketsConfig) {
  // let BRACKETS_PAIR = Object.fromEntries(bracketsConfig); //не в той которая нужна , последовательности строится массив

  let BRACKETS_PAIR = {};
  // let startBracket = '';
  // let endBracket = '';

  // формируем объект пар закрывающая - открывающая
  for (let i = 0; i < bracketsConfig.length; i++) {
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  // for (brackets of bracketsConfig) {
  //   startBracket += brackets[0];
  //   endBracket += brackets[1];
  // }
  // let OPEN_BRACKETS = startBracket.split(''); //массив из открывающихся скобочек

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    //находим символ что лежит сверху стека
    let top = stack[stack.length - 1];
    //сравниваем символ из стека и символ по ключу объекта (значит они пара), так же проверяем длину стека
    if (top === BRACKETS_PAIR[str[i]] && stack.length !== 0) {
      stack.pop();   //удаляем символ из стека
    } else {
      stack.push(str[i]); //не совпадающие добавляем в стек
    }
  }

  return stack.length === 0;
};
