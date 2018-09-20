var crypto = require('crypto');

function Bloom(sz) {
    this.bitset = [];
    for (var i =0; i < sz; i++){
        this.bitset[i] = false;
    }
};

Bloom.prototype = {
    length: function(){
        return this.bitset.length;
    },
    hash1: function(password) {
        var value = crypto.createHash('sha256')
            .update(password)
            .digest('hex');
            return parseInt(value, 16);
    },
    hash2: function(password){
        var value = crypto.createHash('md5')
            .update(password)
            .digest('hex');
            return parseInt(value, 16);
    },
    record: function(password) {
        var h1 = this.hash1(password),
            h2 = this.hash2(password);
        this.bitset[h1 % this.bitset.length] = true;
        this.bitset[h2 % this.bitset.length] = true;
    },
    check: function(password){
        var length = this.bitset.length,
            h1 = this.hash1(password) % length,
            h2 = this.hash2(password) % length;
            return (this.bitset[h1] && this.bitset[h2]);
    }
};

module.exports = Bloom;