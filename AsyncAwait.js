//ASYNC AWAIT

const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');

fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

let firstSentence;
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8');
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8');
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
  console.log(firstSentence, secondSentence);
}

readFiles();

//The async Keyword

function withConstructor(num){
    return new Promise((resolve, reject) => {
        if (num === 0){
            resolve('zero');
        } else {
            resolve('not zero');
        }
    });
}
  
withConstructor(0)
    .then((resolveValue) => {
        console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});
  
async function withAsync(num){
    if (num === 0){
        return 'zero';
    } else {
        return 'not zero';
    }
}
  
withAsync(100)
    .then((resolveValue) => {
        console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
});