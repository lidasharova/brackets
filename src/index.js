module.exports = function check(str, bracketsConfig) {
  //сделаем проверку на валидность числа скобочек, их должно быть четное количество
  if (str.length % 2 !== 0) {
    return false;
  }

  let BRACKETS_PAIR = {};

  // формируем объект пар закрывающая - открывающая
  for (let i = 0; i < bracketsConfig.length; i++) {
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    //заводим переменную в которой лежит текущий знак
    let current = str[i];
    //находим символ, что лежит сверху стека
    let top = stack[stack.length - 1];
    //сравниваем символ из стека и символ по ключу объекта (значит они пара), так же проверяем длину стека
    if (BRACKETS_PAIR[current] === top && stack.length !== 0) {
      stack.pop(); //удаляем этот символ
    } else {
      stack.push(current); //не совпадающие добавляем в стек
    }
  }

  return stack.length === 0; //если в стеке что то есть - значит неккоректная последовательность
};

//методы которые не пригодились, но интересные
//массив из открывающихся скобочек
// let startBracket = '';
// let endBracket = '';
// for (brackets of bracketsConfig) {
//   startBracket += brackets[0];
//   endBracket += brackets[1];
// }
// let OPEN_BRACKETS = startBracket.split('');

//как сделать объект из данного массива
// let BRACKETS_PAIR = Object.fromEntries(bracketsConfig);
//но не в той, последовательности, которая нужна, строится массив
