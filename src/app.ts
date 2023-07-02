let arr: Array<string | number>;

arr = ["1", 1];

const promise: Promise<string> = new Promise((resolve) => {
  resolve("String");
});

promise.then((data) => {
  console.log(data);
});
