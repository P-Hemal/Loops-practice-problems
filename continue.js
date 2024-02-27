var numbers = [ 10, 25, 45, 87, 95, 51, 68, 71, 82, 77, 50]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 80){
        continue;
    }
    console.log(number);
}