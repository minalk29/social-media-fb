var crypto = require('crypto'),algorithm = 'aes-256-ctr',password = 'RJ23edrf';
//Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
//Text is the Confidential data which we need to encrypt using 'password'(Key).
exports.encrypt=(text)=>{
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

// Decryption 
var crypto = require('crypto');
algorithm = 'aes-256-ctr';
password = 'RJ23edrf';
//Here "aes-256-cbc" is the advance encyption standard we used for encrytion.
//Text is the Cipher which we need to decrypt using 'password'(Key).
exports.decrypt=(text)=>{
   var decipher = crypto.createDecipher(algorithm,password)
   var dec = decipher.update(text,'hex','utf8')
   dec += decipher.final('utf8');
   return dec;
}