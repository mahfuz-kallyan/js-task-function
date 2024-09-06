function make_avg(numbers){
    let sum = 0;
    for(let number of numbers){
        sum = sum + number;
    }
    return sum / numbers.length;
}
const result = make_avg([10, 20, 50, 100, 200, 100]);
console.log(result);
