/* eslint-disable no-prototype-builtins */
const isEmpty = (objectOrArray) => {
  for (var key in objectOrArray) {
    if (objectOrArray.hasOwnProperty(key)) { return false; }
  }
  return true;
}

const isEmptyString = str => {
  if (!str || str.toString() === '') {
    return true;
  }
  return false;
}

const Utility = {
  isEmpty: (objectOrArray) => isEmpty(objectOrArray),
  isEmptyString: (str) => isEmptyString(str)
}

export default Utility;
