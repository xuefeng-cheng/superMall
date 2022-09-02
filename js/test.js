// let arr = [1, 2, 3];
// for(let i = 0; i < arr.length; i++){
//   arr[i] = arr[i]+1;
// }
// console.log(arr);
const path = require('path');

let fileAddr = '/user/cheng/desktop/index.html';
console.log(path.basename(fileAddr));  //index.html
console.log(path.basename(fileAddr, '.html'));   //index
console.log(path.extname(fileAddr));
