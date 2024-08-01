const sumAll = function(num1, num2) {
    if ((typeof num1 != 'number') || typeof num2 != 'number'){
        return 'ERROR'
    } else if (num1 < 0 || num2 <0){
        return 'ERROR'
    } else if (num1 % 1 !=0 || num2 % 1 != 0){
        return 'ERROR'
    }
   
    var max, min;
    if (num1 > num2){
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    var sum = 0;
    for (var i = min; i <= max; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
