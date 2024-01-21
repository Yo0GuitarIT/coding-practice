const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success!1"), 400);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success!2"), 400);
});

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success!3"), 400);
});

myPromise1
  .then((result) => {
    console.log("resolved", result);
    return myPromise2;
  })
  .then((result2) => {
    console.log("resolved", result2);
    return myPromise3;
  })
  .then((result3) => {
    console.log("resolved", result3);
  })
  .catch((error) => {
    console.log("reject", error);
  });
