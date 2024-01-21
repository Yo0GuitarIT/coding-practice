const myPromise = new Promise((resolve, reject) => {
  // Promise 初始化時狀態為 pending
  const number = Math.floor(Math.random() * 10);

  if (number > 5) {
    // 调用 resolve 時狀態變為 fulfilled
    resolve(["success", number]);
  } else {
    // 调用 reject 時狀態變為 rejected
    reject(["Error", number]);
  }
});

// then 處理 fulfilled 狀態
myPromise.then((result) => {
  console.log("resolve", result);
});

// catch 處理 rejected 狀態
myPromise.catch((error) => {
  console.log("reject", error);
});
