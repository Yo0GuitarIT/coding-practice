// 計算陣列總和
// 給定一個數字陣列，使用 reduce 方法計算所有數字的總和。

function sumTotal(ns) {
  const result = ns.reduce((sum, item) => {
    return (sum += item);
  }, 0);

  return result;
}

console.log(sumTotal([1, 2, 3, 4, 5]));

//----------------------------------------------------------------
// 陣列元素轉換
// 給定一個字串陣列，使用 reduce 方法將每個字串轉換為大寫，並將轉換後的字串連接成一個新的字串。

function alterElement(array) {
  const output = array.reduce((result, element) => {
    result += element.toUpperCase();
    return result;
  }, "");

  return output;
}

console.log(alterElement(["won", "der", "full"]));

//----------------------------------------------------------------
// 陣列元素統計
// 給定一個包含多個相同元素的陣列，使用 reduce 方法統計每個元素出現的次數，並返回一個包含元素與對應次數的物件。

function calculateSameElemnt(ns) {
  const result = ns.reduce((output, element) => {
    // output[element] ? (output[element] += 1) : (output[element] = 1);
    output[element] = (output[element] || 0) + 1;
    return output;
  }, {});

  return result;
}
console.log(calculateSameElemnt([1, 2, 1, 3, 1, 4, 2, 3, 3]));

//----------------------------------------------------------------
// 給定一個陣列 [3, 7, 2, 8, 5]，使用 reduce() 方法找到其中的最大值。
function findMax(ns) {
  const max = ns.reduce((result, element) => {
    if (!result) {
      result = element;
    } else {
      result > element ? result : (result = element);
    }

    return result;
  }, null);

  return max;
}

console.log(findMax([3, 7, 2, 8, 5]));
