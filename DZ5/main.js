function reverseString(string){
    let reverseString = ''
    for (let i = string.length -1; i >= 0; i--){
        reverseString += string[i]
    }
    return reverseString
}

// console.log(reverseString('string'))

function getMiddleNumber (numbers) {
    let stringedNumbers = String(numbers)
    let summ = 0
    for (let i = 0; i < stringedNumbers.length; i++){
        summ += +stringedNumbers[i]
    }
    return summ/stringedNumbers.length
}

console.log(getMiddleNumber(42345689));