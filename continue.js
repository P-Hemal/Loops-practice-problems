var numbers = [ 10, 25, 45, 87, 95, 51, 68, 71, 82, 77, 50, 150, 175, 200, 230, 181, 248, 261]
for(var i = 1; i < numbers.length; i++){
    var number = numbers[i];
    if(number >= 200){
        continue;
    }
    console.log(number);
}