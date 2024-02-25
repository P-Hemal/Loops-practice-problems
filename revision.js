// string type variable

var bottle = 'water';
var bottleColor = 'yellow';
var penColor = 'blue';
// number type variable
var sunglassPrice = 120;
// boolean type variable
var isExpensive = true;


var tableItem = ['bootle', 'pen', 'mouse', 'mobile', 'watch'];
var item3 = tableItem[3];
console.log(item3);
tableItem[4] = 'speaker';
console.log(tableItem);
var penIndex = tableItem.indexOf('pen');
console.log(penIndex);
tableItem.push ('tape');
console.log(tableItem);
tableItem.pop [2];
console.log(tableItem);

if(tableItem.length > 6){
    console.log('clean kora lagbe')
}
else if (tableItem[2] == 'mobile'){
    console.log('mobile rekhe porte boso')
}
else{
    console.log('clean e ache onek')
}