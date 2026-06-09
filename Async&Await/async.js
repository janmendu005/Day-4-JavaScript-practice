// Problerm 1:Get name using async
async function getName() {
    return "Janmendu";
}
getName()
  .then(name => console.log(name));
// Problem 2: Get Age using async
async function getAge() {
    return 25;
}
getAge()
    .then(age => console.log(age));
// Problem 3:Get city using async
async function getCity() { 
    return "Bengaluru";
}
getCity()
    .then(city => console.log(city));
// Problem 4: Get course using async
async function getCourse() {
    return "MERN Stack Development";
}
getCourse()
    .then(course => console.log(course));