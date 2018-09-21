var crypto = require('crypto'); // import needed for encryption functions

// starts passwordChecker class object with constructor
function Bloom(sz) {
    this.bitset = [];   // creates empty array named bitset
    for (var i =0; i < sz; i++){    // fills the above array of size(sz) with false values
        this.bitset[i] = false;
    }
};
// creates the prototype of the object(essentially sets methods for it)
Bloom.prototype = {
    length: function(){ // simple get length of array
        return this.bitset.length;
    },
    hash1: function(password) { // encryption method using 'sha256' encryption
        var value = crypto.createHash('sha256') // creates encrypted object
            .update(password)   // puts password into object to encrypt
            .digest('hex'); // outputs the encryption key in specified format('hex')
            return parseInt(value, 16); // turns hex encryption back into a usable integer
    },
    hash2: function(password){ // encryption method using 'md5' encryption
        var value = crypto.createHash('md5')
            .update(password)   // puts password into object to encrypt
            .digest('hex'); // outputs the encryption key in specified format('hex')
            return parseInt(value, 16); // turns hex encryption back into a usable integer
    },
    record: function(password) {    // get encrypted values for password and record them in bloom filter
        var h1 = this.hash1(password),  // get password encrypted sha256 value
            h2 = this.hash2(password);  // get password encrypted md5 value
        this.bitset[h1 % this.bitset.length] = true;    // sets the value of encrypted value modulus the array size to true
        this.bitset[h2 % this.bitset.length] = true;    // sets the value of encrypted value modulus the array size to true
    },
    check: function(password){  // check the bloom filter for a true/false of if value has been seen
        var length = this.bitset.length,    // get your bloom filter size
            h1 = this.hash1(password) % length, // set first encrypted value
            h2 = this.hash2(password) % length; // set second encrypted value
            return (this.bitset[h1] && this.bitset[h2]);    // only return true if BOTH values were seen otherwise return false
    }
};
// always make sure to export your object and make sure your plural is in the right spot!
module.exports = Bloom;