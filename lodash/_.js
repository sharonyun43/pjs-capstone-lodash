const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
/* test passed on codecademy but not on local
  inRange(number, start, end) {
    let isInRange = false;
    if (end === undefined) {
      end = start;
      start = 0;
      if (number > start && number < end) {
        return true;
      }
      else if (number < start || number > end) {
        return false;
      }
      else if (number === start || number === end) {
        return false;
      }
    };
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    };
    if (number > start && number < end) {
       isInRange = true;
      }
      else if (number < start || number > end) {
        return false;
      }
      else if (number === start || number === end) {
        return false;
    }
    return isInRange;
  },
*/
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
      return isInRange;
  },

  words(string) {
    let words = string.split(' ');
    return words;
  },

  pad(string, length) {
    if (length <= string.length) {
      return string;
    } else {
      let startPaddingLength = Math.floor((length - string.length) / 2);
      let endPaddingLength = length - string.length - startPaddingLength;
      const spacer = ' ';
      const paddedString = spacer.repeat(startPaddingLength) + string + spacer.repeat(endPaddingLength);
      return paddedString;
    }
  },

  has(object, key) {
    let hasValue = object[key];
    if(hasValue != undefined) {
      return true;
    } else {
      return false;
    };
  },

  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      invertedObject[object[key]] = key;
    };
    return invertedObject;
  },

  findKey(object, predicate) {
      for (let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        }
      };
    },

  drop(array, n) {
      let droppedArray = [];
      if(n === undefined) {
        n = 1;
      };
      for (let i = 0; i < array.length; i++) {
        droppedArray.push(array[i]);
      };
      return droppedArray.slice(n);
    },

  dropWhile(array, predicate) {
      let dropNumber = array.findIndex(function(element, index) {
        return !(predicate(element, index, array));
      });
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },

  chunk(array, size) {
      let arrayChunks = [];
      if (!size) {
        size = 1;
      }
      for (let i = 0; i < array.length - 2; i++) {
        let arrayChunk = array.slice(i + i, i + size);
        arrayChunks.push(arrayChunk);
        size++
      };
      return arrayChunks;
    }
};



// Do not write or modify code below this line.
module.exports = _;
