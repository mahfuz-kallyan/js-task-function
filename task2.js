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

// console.log(price(15))
// console.log(price(40))

function numbers(num1, num2, num3, num4){
    const sum = num1 + num2 + num3 + num4;
    if(sum % 2 === 0){
        const result = sum / 2
        return result;
    }
    else{
        const result = sum * 2
        return result;
    }
}
console.log(numbers(10, 15, 20, 25));
