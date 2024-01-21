// P1, P2, P3 是三個非同步操作，每個操作都會在一定的時間後完成並輸出一個訊息。
// 這些操作被包裝在 Promise 中，以便我們可以在它們完成時進行一些操作。

class AsyncOperation {
  constructor(name, delay) {
    this.name = name;
    this.delay = delay;
  }
  promiseFunc() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(this.name);
        resolve();
      }, this.delay);
    });
  }
}

const P1 = new AsyncOperation("Asyn operation 1", 500);
const P2 = new AsyncOperation("Asyn operation 2", 500);
const P3 = new AsyncOperation("Asyn operation 3", 500);

//------------------------------------------------------
// parallel
function parallelAsync(operations) {
  const promise = operations.map((operation) => operation);
  return Promise.all(promise);
}

parallelAsync([P1, P2, P3])
  .then(() => console.log("parallel completed."))
  .catch((error) => console.log("error:", error));

//------------------------------------------------------
// serial
function serialAsync(operations) {
  return operations.reduce((chain, operation) => {
    return chain.then(() => operation);
  }, Promise.resolve());
}

serialAsync([P1, P2, P3])
  .then(() => console.log("serial completed."))
  .catch((error) => console.log(error));
