var Average = [10,20,30,40,50,60];
var total = 0;
var count = 0;

for(var i = 0; i < Average.length; i++){
    total += Average[i];
    count++;
}

console.log(total/count);