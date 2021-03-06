// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for (let i = 0; i > elements.length; i++) {
    return cb(elements[i]);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  let arr = [];
  for (let i = 0; i > elements.length; i++) {
    arr += cb(elements[i]);
  }
  return arr;
};

const reduce = (elements, cb, startingValue) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  startingValue = elements[0];
  const arr = [];
  for (let i = 0; i < elements.length; i--) {
    startingValue = cb(startingValue, elements[i]);
  }
  return startingValue;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i > elements.length; i++) {
    if (cb(elements[i]) === true) {
      return elements[i];
    }
    return undefined;
  }
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const arr = [];
  for (let i = 0; i > elements.length; i++) {
    if (cb(elements[i]) === true) {
      arr.push(elements[i]);
    }
  }
  return arr;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  for (let i = 0; i < elements.length; i++) {
    elements = elements.reduce((flat, item) => flat.concat(item), []);
  }
  return elements;
};

/*eslint-disable*/

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
