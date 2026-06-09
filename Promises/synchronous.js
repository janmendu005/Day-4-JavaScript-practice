// Problem 1:
function promise1() {
    return new Promise((resolve, reject) => {
        resolve("Promise 1 resolved");
        reject("Promise 1 rejected");
    });
}
console.log(promise1());
console.log("This will be logged before the promise is resolved");

