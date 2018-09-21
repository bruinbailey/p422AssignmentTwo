// starts passwordChecker class object with constructor
function passwordChecker() {
}

// creates the prototype of the object(essentially sets methods for it)
passwordChecker.prototype = {
    atLeastEight: function(val){    // simple get length of password 
        return val.length >= 8;
    },
    hasNum: function(password){
        var check = /\d/;   // uses regex to check for numbers
        return check.test(password);
    },
    hasUppercase: function(password){
        var check = /[A-Z]/;    // uses regex to check for letters in range A-Z(capital only)
        return check.test(password);
    },
    hasSpecial: function(password){
        var check = /(.*[!,@,#,$,%,^,&,*,?,_,~])/;  //uses regex to check for special characters include in []
        return check.test(password);
    },
    passStr: function(password){    // counts to get a value for password strength
        var numUppers = 0,
            numNumbers = 0,
            numSymbols = 0,
            lenDiff = password.length - 8;
        for (var i = 0; i < password.length; i++){
            if (password[i].match(/[A-Z]/g)) {numUppers++;}
            if (password[i].match(/\d/g)) {numNumbers++;}
            if (password[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/g)) {numSymbols++;}
        }
    return numUppers + numNumbers + numSymbols + lenDiff;
    }
};
// always make sure to export your object and make sure your plural is in the right spot!
module.exports = passwordChecker;