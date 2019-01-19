let promise = new Promise((resolve, reject) => {
  // resolve("Resolved promise data");
  // reject("Rejected Promise Data");
  setTimeout(() => resolve("resolved promise data"), 3000);
});

export default promise;
