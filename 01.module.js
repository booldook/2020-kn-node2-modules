const log = console.log;
const clear = console.clear;

log(__dirname);
log(__filename);

//console.time("시간");
for(let i=0; i<100000000; i++) {

}
//console.timeEnd("시간");

const obj = {
	name: "홍길동",
	summary: {
		age: 25,
		gender: "M"
	}
};
console.dir(obj);

setInterval(() => {}, 1000)
setImmediate(() => {})
setTimeout(()=>{}, 0);

clear();
const os = require('os');
log(os.arch());
log(os.platform());
log(os.type());
log(os.uptime());
log(os.hostname());
log(os.release());

// 경로
log(os.homedir());
log(os.tmpdir());

// CPU
log(os.cpus());
log(os.cpus().length);

// Memorie
log(os.freemem());
log(os.totalmem());

// path
clear();
const path = require('path');
let file = __filename;
log("dirname: " + path.dirname(file));
log("extname: " + path.extname(file));
log("basename: " + path.basename(file));
log(path.parse(file));

log(path.normalize("C:\\\\Users\\hi"));
let dir = path.join(__dirname, "../../../");
log(__dirname);
log(dir);


//URL
clear();
const url = require('url');
const query = require('querystring');
let myURL = new URL('https://nodejs.org/dist/latest-v12.x/docs/api/url.html?a=10&b=20#urlHash');
log(myURL);
log(url.format(myURL));

myURL.searchParams.append("test", "0000");
log(myURL.searchParams);
