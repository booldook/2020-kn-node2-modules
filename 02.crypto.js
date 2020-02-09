const crypto = require('crypto');
let salt = "ABCD";
let pass = "1234"+salt;
let sha512 = crypto.createHash('sha512').update(pass).digest("base64");
console.log(sha512);

crypto.pbkdf2('1234', salt, 10000, 64, 'sha512', (err, key) => {
	console.log("key: "+ key.toString("base64"));
});
const util = require('util');
const pbkdf2Promise = util.promisify(crypto.pbkdf2);
(async () => {
	console.time("암호화");
	let key = await pbkdf2Promise('1234', salt, 12367, 64, 'sha512');
	console.timeEnd("암호화");
	console.log(key);
})();