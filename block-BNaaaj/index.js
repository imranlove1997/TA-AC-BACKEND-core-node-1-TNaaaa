var {readFile} = require('fs');

readFile('./content.md', 'utf-8', (err, content) => {
    console.log(content);
});

var os = require('os');

var freeMem = os.freemem();
var cpus = os.cpus().length;
var upTime = os.uptime();
var osVersion = os.release();

console.log(freeMem, cpus, upTime, osVersion);

var buff1 = Buffer.alloc(12);
buff1.write("Hello World!");
console.log(buff1.toString());