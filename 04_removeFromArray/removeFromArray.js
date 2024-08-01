const removeFromArray = function(originalArray) {
    newArr = [];
    for (var i = 0; i < originalArray.length; i++){
        var check = true;
        for (var j = 1; j < arguments.length; j++){
            if (originalArray[i] == arguments[j] && (typeof arguments[j] == typeof originalArray[i])){
                check = false;
            }
        }
        if (check){
            newArr.push(originalArray[i]);
        }
    
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
