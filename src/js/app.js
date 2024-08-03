/* функция canIterate, которая определяет, соответствует ли объект протоколу итерирования,
  возвращая, соответственно, true/false */
export default function canIterate(obj) {
  // проверка на наличие свойства Symbol.iterator
  if (typeof obj[Symbol.iterator] === 'function') {
    return true;
  }

  // проверка на наличие свойства с индексом 0
  if (typeof obj === 'object' && obj.indexOf(0) !== -1) {
    return true;
  }

  // проверка на наличие свойства length
  if (Object.keys(obj).length === 1) {
    return true;
  }

  return false;
}
