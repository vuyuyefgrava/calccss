const resultElement = document.getElementById('resultNumber')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
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

oneBtn.onclick = function () {
    numbers = '1'
}

twoBtn.onclick = function () {
    numbers = '2'
}

threeBtn.onclick = function () {
    numbers = '3'
}

fourBtn.onclick = function () {
    numbers = '4'
}

fiveBtn.onclick = function () {
    numbers = '5'
}

sixBtn.onclick = function () {
    numbers = '6'
}

sevenBtn.onclick = function () {
    numbers = '7'
}

eightBtn.onclick = function () {
    numbers = '8'
}



function printScoreboard (number) {
    let scoreBoard  = Number(number.value)

    if (numbers == "1") {
        scoreBoard += 1
    }
    else if (numbers == "2") {
        scoreBoard += 2
    }
    else if (numbers == "3") {
        scoreBoard += 3
    }
    else if (numbers == "4") {
        scoreBoard += 4
    }
    else if (numbers == "5") {
        scoreBoard += 5
    }
    else if (numbers == "6") {
        scoreBoard += 6
    }
    else if (numbers == "7") {
        scoreBoard += 7
    }
    else if (numbers == "8") {
        scoreBoard += 8
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

