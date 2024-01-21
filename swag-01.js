//Implement Web API: Array.prototype.flat

//Version 1
Array.prototype.myFlat = function () {
  const myString = this.join(",").split(",");
  const result = myString.map((element) => parseInt(element));
  return result;
};

//Version 2
// Array.prototype.myFlat = function () {
//   return this.reduce((result, element) => {
//     return result.concat(Array.isArray(element) ? element.myFlat() : [element]);
//   }, []);
// };

//result
console.log([1, 2, 3, 4, 5].myFlat()); // [1, 2, 3, 4, 5]
console.log([1, 2, [3, 4, 5]].myFlat()); // [1, 2, 3, 4, 5]
console.log([1, [2, [3, [4, [5]]]]].myFlat()); // [1, 2, 3, 4, 5]
