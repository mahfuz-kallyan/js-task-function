function count_zero(bString) {
    let result = 0;
    const bArray = bString.split('')
    console.log(bArray)
    for (const el of bArray) {
        if (parseInt(el) === 0) {
            result++
        }
    }
    return result;
}

console.log(count_zero('10001000010000'))