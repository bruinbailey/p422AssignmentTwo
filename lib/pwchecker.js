function passwordChecker() {
}

passwordChecker.prototype = {
    atLeastEight: function(val){
        return val.length >= 8;
    },
    hasNum: function(password){
        var check = /\d/;
        return check.test(password);
    },
    hasUppercase: function(password){
        var check = /[A-Z]/;
        return check.test(password);
    },
    hasSpecial: function(password){
        var check = /(.*[!,@,#,$,%,^,&,*,?,_,~])/;
        return check.test(password);
    },
    passStr: function(password){
        var numUppers = 0;
        var numNumbers = 0;
        var numSymbols = 0;
        for (var i = 0; i < password.length; i++){
            if (password[i].match(/[A-Z]/g)) {numUppers++;}
            if (password[i].match(/\d/g)) {numNumbers++;}
            if (password[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/g)) {numSymbols++;}
        }
    return numUppers + numNumbers + numSymbols;
    }
};

module.exports = passwordChecker;