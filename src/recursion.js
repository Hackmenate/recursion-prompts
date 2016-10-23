/* jshint esversion: 6 */

// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if (n < 0)
    return null;
  else if (n === 0)
    return 1;
  else
    return n*factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if (array.length === 0)
    return 0;
  else if (array.length === 1)
    return array[0];
  return sum([array[0] + array[1]].concat(array.slice(2)))
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0)
    return 0;
  else if (Array.isArray(array[0]))
    array = [arraySum(array[0])].concat(array.slice(1));
  if (array.length === 1)
    return array[0];
  else if (Array.isArray(array[1]))
    array = [array[0], arraySum(array[1])].concat(array.slice(2));
  return arraySum([array[0]+array[1]].concat(array.slice(2)))
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0)
    return isEven(-n);
  if (n > 1)
    return isEven(n-2);
  else
    return !Boolean(n);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n < 0)
    n++;
  else if (n > 0)
   n--;
  if (n === 0)
    return 0;
  else
    return n+sumBelow(n);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (x <= y+1 && x >= y - 1)
    return [];
  else if (y === x + 2)
    return [x + 1];
  else if (x === y + 2)
    return [x - 1];
  else if (y > x)
    return [x+1].concat(range(x+1, y-1)).concat([y-1]);
  else if (x > y)
    return [x-1].concat(range(x-1, y + 1)).concat([y+1]);
};



// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0)
    return 1;
  else if (base < 0)
    return -exponent(-base, exp);
  else if (exp%2 === 0)
    return exponent(base*base, exp/2);
  else if (exp === 1)
    return base;
  else if (exp > 1)
    return base*exponent(base, exp-1);
  else
    return exponent(base, exp+1)/base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1)
    return true;
  else if (n > 1)
    return powerOfTwo(n/2);
  else if (n >= 0)
    return false;
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (string.length === 1)
    return string;
  else
    return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.replace(/ /g, "").toLowerCase();
  if (string.length === 0)
    return true;
  else if (string.length === 1)
    return true;
  else
    return (string[0] === string[string.length-1]) && palindrome(string.slice(1, string.length-1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (y < 0)
    return modulo(x, -y)
  else if (x < 0)
    return -modulo(-x, y);
  else if (y === 0)
    return NaN;
  else if (x < y) {
    return x; }
  else
    return modulo(x-y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (y < 0)
    return -multiply(x, -y);
  if (y === 1)
    return x;
  else if (y === 0)
    return 0;
  else
    return x + multiply(x, y-1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if (y < 0) {
    return -divide(x, -y);
  } else if (x < 0) {
    return -divide(-x, y);
  } else if (x < y) {
    return 0;
  } else if (y === 0) {
    return NaN;
  } else if (y <= x) {
    return 1 + divide(x-y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  } else if (x === 1 || y === 1) {
    return 1;
  } else {
    var divisor = 2;
    while (divisor <= x && divisor <= y) {
      if (x%divisor === 0 && y%divisor === 0) {
        return divisor * gcd(x/divisor, y/divisor);
      }

      divisor++;
    }

    if (divisor > x || divisor > y)
      return 1;
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === "" && str2 === ""){
    return true;
  } else {
    return (str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1)));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1)
    return [str[0]];
  else
    return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if (array.length === 1)
    return array;
  else
    return [array[array.length-1]].concat(reverseArr(array.slice(0, array.length-1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1)
    return [value];
  else
    return [value].concat(buildList(value, length-1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 1)
    return array[0] === value?1:0;
  else
    return (array[0] === value?1:0) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 1)
    return [callback(array[0])];
  else
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var k in obj){
    if (k === key)
      count++;
    if (typeof obj[k] === 'object')
      count += countKeysInObj(obj[k], key);
  }
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var key in obj){
    if (obj[key] === value)
      count++;
    else if (typeof obj[key] === 'object')
      count += countValuesInObj(obj[key], value);
  }
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  var object = {};
  for (var k in obj){
    if (k === key){
      if (typeof obj[k] === 'object')
        object[newKey] = replaceKeysInObj(obj[k], key, newKey);
      else
        object[newKey] = obj[k];
    } else {
      if (typeof obj[k] === 'object')
        object[k] = replaceKeysInObj(obj[k], key, newKey);
      else
        object[k] = obj[k];
    }
  }
  return object;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0)
    return null;
  else if (n === 1)
    return [0, 1];
  else {
    var prevArray = fibonacci(n-1);
    return prevArray.concat(prevArray[prevArray.length-1] + prevArray[prevArray.length-2]);
  }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0)
    return null;
  if (n === 0 || n === 1)
    return n;
  else
    return nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  return array.length > 1?[array[0].toUpperCase()].concat(capitalizeWords(array.slice(1))):array[0].toUpperCase();
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  return array.length>1?[array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1))):[array[0][0].toUpperCase() + array[0].slice(1)]
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var count = 0;
  for (var key in obj){
    if (obj[key]%2 === 0){
      count += obj[key];
    } else if (typeof obj[key] === 'object'){
      count += nestedEvenSum(obj[key]);
    }
  }
  return count;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  var flattened = [];
  for (var i = 0; i < arrays.length; i++){
    if (Array.isArray(arrays[i])){
      flattened = flattened.concat(flatten(arrays[i]));
    } else {
      flattened.push(arrays[i]);
    }
  }
  return flattened;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  if (str.length === 1)
    return {[str[0]]: 1};
  else {
    obj = letterTally(str.slice(1), obj)
    if (str[0] in obj)
      obj[str[0]]++;
    else
      obj[str[0]] = 1;
    return obj;
  }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if (list.length === 1){
    return list[0];
  } else {
    return list[0]===list[1]?compress(list.slice(1)):[list[0]].concat(compress(list.slice(1)));
  }
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 1)
    return [array[0].concat(aug)];
  else
    return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 1)
    return [array[0]];
  else
    return array[0]===0&&array[1]===0?minimizeZeroes(array.slice(1)):[array[0]].concat(minimizeZeroes(array.slice(1)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 1)
    return array[0]>0?[array[0]]:[-array[0]];
  else {
    var rest = alternateSign(array.slice(1));
    for (var i = 0; i < rest.length; i++){
      rest[i] = -rest[i];
    }
    return array[0]>0?[array[0]].concat(rest):[-array[0]].concat(rest);
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var pairs = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  }

  str = str.split(" ");

  if (str.length === 1) {
    if (str[0] in pairs)
      return pairs[str[0]];
    else
      return str[0];
  } else {

    if (str[0] in pairs)
      return [pairs[str[0]]].concat(numToText(str.slice(1).join(" ")).slice(" ")).join(" ");
    else
      return [str[0]].concat(numToText(str.slice(1).join(" ")).slice(" ")).join(" ");
  }
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};
