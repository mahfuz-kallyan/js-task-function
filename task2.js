// function with condition
function price(price1){
    if(price1 % 2 === 1){
        const result = price1 * 2;
        return result
    }
    else{
        const result = price1 / 2;
        return result;
    }
}

console.log(price(15))
console.log(price(40))