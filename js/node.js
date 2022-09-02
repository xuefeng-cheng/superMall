// console.log('hello nodejs');



// const fs = require('fs');

// fs.readFile('../data/data.txt', 'utf-8',  (err, data) => {
//   if(err) console.log(err.message);
//   console.log(data);
//   // console.log(data.toString());
// });
// fs.writeFile('../data/data.txt', 'cheng',  err => {
//   if(err) console.log(err.message);
// });

const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '../data/data.txt'), 'utf-8', (err, data) => {
  if(err) console.log(`fail ${err.message}`);

  let dataArr = data.split(' ');
  for(let i = 0; i < dataArr.length; i++){
    dataArr[i] = dataArr[i].replace('=', ': ')
  }
  let newDataStr = dataArr.join('\r\n');
  fs.writeFile(path.join(__dirname, '../data/data-format.txt'), newDataStr, err => {
    if(err) console.log(err.message);
  })
})