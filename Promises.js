//JAVASCRIPT PROMISES
////node <name_file>.js

//Constructing a Promise Object

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
  
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
}
  
const sunglasses = new Promise(myExecutor);
  
const orderSunglasses = () => {
    return new Promise(myExecutor);
}
  
const orderPromise = orderSunglasses();
console.log(orderPromise);

//The Node setTimeout() Function

console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log("This line of code will log to the console last.");
};
setTimeout(usingSTO, 100);

console.log("This is the last line of code in app.js.");

//Consuming Promises
////Success and Failure Callback Functions

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
checkInventory(order).then(handleSuccess, handleFailure);

//Using catch() with Promises

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

checkInventory(order)
	.then(handleSuccess)
	.catch(handleFailure);


