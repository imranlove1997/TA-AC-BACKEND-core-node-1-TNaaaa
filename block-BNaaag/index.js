var fs = require('fs');

fs.readFile('./content.md', 'utf-8', (err, content) => {
  // handle error or content of the file    
  console.log(content);
})

var buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write("Welcome to Buffer");