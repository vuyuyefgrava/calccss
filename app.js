const resultElement = document.getElementById('resultNumber')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const oneBtn = document.getElementById('one')
const twoBtn = document.getElementById('two')
const threeBtn = document.getElementById('three')
const fourBtn = document.getElementById('four')
const fiveBtn = document.getElementById('five')
const sixBtn = document.getElementById('six')
const sevenBtn = document.getElementById('seven')
const eightBtn = document.getElementById('eight')
const nineBtn = document.getElementById('nine')
const zeroBtn = document.getElementById('null')


let action = "+"
let numbers = ""

    
plusBtn.onclick = function () {
    action = "+"
}
minusBtn.onclick = function () {
    action = "-"
}
multiplyBtn.onclick = function () {
    action = "*"
}
divideBtn.onclick = function () {
    action = "/"
}


input1.onfocus = function () {
    oneBtn.onclick = function () {
        input1.value += '1'
    }
    twoBtn.onclick = function () {
        input1.value += '2'
    }
    threeBtn.onclick = function () {
        input1.value += '3'
    }
    fourBtn.onclick = function () {
        input1.value += '4'
    }
    fiveBtn.onclick = function () {
        input1.value += '5'
    }
    sixBtn.onclick = function () {
        input1.value += '6'
    }
    sevenBtn.onclick = function () {
        input1.value += '7'
    }
    eightBtn.onclick = function () {
        input1.value += '8'
    }
    nineBtn.onclick = function () {
        input1.value += '9'
    }
    zeroBtn.onclick = function () {
        input1.value += '0'
    }
}
input2.onfocus = function () {
    oneBtn.onclick = function () {
        input2.value += '1'
    }
    twoBtn.onclick = function () {
        input2.value += '2'
    }
    threeBtn.onclick = function () {
        input2.value += '3'
    }
    fourBtn.onclick = function () {
        input2.value += '4'
    }
    fiveBtn.onclick = function () {
        input2.value += '5'
    }
    sixBtn.onclick = function () {
        input2.value += '6'
    }
    sevenBtn.onclick = function () {
        input2.value += '7'
    }
    eightBtn.onclick = function () {
        input2.value += '8'
    }
    nineBtn.onclick = function () {
        input2.value += '9'
    }
    zeroBtn.onclick = function () {
        input2.value += '0'
    }
}

function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    }
    else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}
function actionsWithNumbers(inp1, inp2, actionSymbol) {
    let num1 = Number(inp1.value)
    let num2 = Number(inp2.value)

    if (actionSymbol == '+') {
        return num1 + num2
    }
    else if (actionSymbol == '-') {
        return num1 - num2
    }
    else if (actionSymbol == '*') {
        return num1 * num2
    }
    else if (actionSymbol == '/') {
        return num1 / num2
    }
}

submitBtn.onclick = function () {
    const result = actionsWithNumbers(input1, input2, action)
    printResult(result)

}