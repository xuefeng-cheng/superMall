const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
  let fpath;
  if(req.url === '/'){
    fpath = path.join(__dirname, `../public/index.html`);
  }else{
    fpath = path.join(__dirname, `../public/${req.url}`);
  }
  fs.readFile(fpath, 'utf-8', (err, data) => {
    if(err) {
      console.log(`read file ${err.message}`);
      return res.end('404 not found');
    }
    res.end(data);
  });
});
server.listen('3333', () => {
  console.log(`server is running on 3333`);
});