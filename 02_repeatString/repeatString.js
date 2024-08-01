const repeatString = function(string, num) {
    var newString = '';
    if (num < 0){
        return 'ERROR'
    }
    for (var i = 0; i < num; i++){
        newString = newString + string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
