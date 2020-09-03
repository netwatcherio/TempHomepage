const fs = require('fs');

if (!fs.existsSync("out")) fs.mkdirSync("out");

let indexfile = fs.readFileSync("index.html").toString().replace(/\n/g, '').replace(/ {2}/g, '').replace(/: /g, ':').replace(/;}/g, '}');

let workers = fs.readFileSync('index.js').toString();
workers = workers.replace('__INDEX__', `\`${indexfile}\``);

fs.writeFileSync('workers.js', workers);
