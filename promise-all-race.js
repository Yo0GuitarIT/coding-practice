function getRandom() {
  return Math.floor(Math.random() * 10);
}

const P1 = new Promise((resolve, reject) => {
  getRandom() > 5 ? resolve("success 1") : reject("failed 1");
});
const P2 = new Promise((resolve, reject) => {
  getRandom() > 5 ? resolve("success 2") : reject("failed 2");
});
const P3 = new Promise((resolve, reject) => {
  getRandom() > 5 ? resolve("success 2") : reject("failed 3");
});

//使用 Promise.all() 同時處理多個 Promise，等待所有 Promise 完成。
Promise.all([P1, P2, P3])
  .then((value) => console.log("OK:", value))
  .catch((error) => console.log("Error:", error));

// 使用 Promise.race() 等待第一個完成的 Promise
Promise.race([P1, P2, P3])
  .then((value) => console.log("OK:", value))
  .catch((error) => console.log("Error:", error));
