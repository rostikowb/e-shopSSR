export const parsFiltOfUrl = (q, valDel = false) => {
  const query = {...q}
  const finalArr = [];

  for (const name in query) {
    if (query.hasOwnProperty(name)) {

      if (checkIsValid(name)) continue;

      const valueArr = query[name].split(',');

      if (!valueArr.length) continue;

      if (valDel) {
        if (valueArr.length > 1) {
          const index = valueArr.indexOf(valDel);
          if (index > -1) {
            valueArr.splice(index, 1);
          }
        } else {
          continue;
        }
      }
      finalArr.push({name, valueArr});
    }
  }

  return finalArr.length ? finalArr : false;
}

const checkIsValid = (name) => {
  switch (name) {
    case 'catalog':
    case 'sort':
    case 'page':
    case 'search':
    case 'menu':
    case 'like':
    case 'basket':
    case 'onegoods':
      return true
    default:
      return false
  }
}