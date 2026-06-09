// Problem 1:Login process using Promises
const loginPromise =
  new Promise((resolve, reject) => {

    const isLoggedIn = false;

    if (isLoggedIn) {
      resolve("Login Successful");
    } else {
      reject("Login Failed");
    }

  });

loginPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
//   Problem 2:Payment process using Promises
const paymentPromise =
new Promise((resolve, reject) => {

    const isPaymentSuccessful = true;

    if (isPaymentSuccessful) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }
});
paymentPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
//   Problem 3:Download process using Promises
const downloadPromise =
new Promise((resolve, reject) => {
    const isDownloadSuccessful = false;
    if (isDownloadSuccessful) {
        resolve("Download Successful");
    } else {
        reject("Download Failed");
    }
});
downloadPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
//   problem 4:Exam results using Promises
const examPromise =
new Promise((resolve, reject) => {
    const marks = 75;

    if (marks >= 40) {
      resolve("Passed");
    } else {
      reject("Failed");
    }
});
examPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));