const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', 'my-key');
let result = cipher.update('아버지를 아버지라', 'utf-8', 'base64');
result += cipher.final("base64");
console.log(result);

const decipher = crypto.createDecipher('aes-256-cbc', 'my-key');
let result2 = decipher.update(result, 'base64', 'utf-8');
result2 += decipher.final("utf-8");
console.log(result2);