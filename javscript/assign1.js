/**
 * Checks if an array includes one of the elements from another array.
 * Supports arrays of arrays, objects, and primitive values.
 * @param {Array} list - The array to check against.
 * @returns {Boolean} True if the array includes one of the elements, false otherwise.
 */
Array.prototype.includesOneOf = function(list) {
    // Early return if either array is empty
    if (!Array.isArray(list) || this.length === 0 || list.length === 0) return false;
  
    // Check for arrays of arrays
    if (Array.isArray(this[0]) && Array.isArray(list[0])) {
      return this.some(array1 =>
        list.some(array2 =>
          Array.isArray(array1) && Array.isArray(array2) &&
          array1.length === array2.length &&
          array1.every((value, index) => value === array2[index])
        )
      );
    }
  
    // Check for arrays of objects
    if (
      typeof this[0] === "object" && this[0] !== null &&
      typeof list[0] === "object" && list[0] !== null
    ) {
      return this.some(object1 =>
        list.some(object2 =>
          typeof object1 === "object" && typeof object2 === "object" &&
          Object.keys(object1).length === Object.keys(object2).length &&
          Object.entries(object1).every(([key, value]) => value === object2[key])
        )
      );
    }
  
    // Check for primitive values
    return this.some(value => list.includes(value));
  };
  
  // Test cases
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.includesOneOf([2, 8, 10])); // true
  console.log(arr.includesOneOf([10, 11, 12])); // false
  console.log(arr.includesOneOf([])); // false
  
  const arr2 = [{ name: "James Bond", code: "007" }, { name: "Edward Donne", code: "001" }];
  console.log(arr2.includesOneOf([{ name: "James Bond", code: "007" }])); // true
  console.log(arr2.includesOneOf([{ name: "James Bond", code: "007", organization: "MI6" }])); // false
  
  const arr3 = [[1, 22, 33, 4], [4, 55, 6, 772]];
  console.log(arr3.includesOneOf([[1, 22, 33, 4]])); // true
  console.log(arr3.includesOneOf([[1, 33, 22, 4]])); // false
  