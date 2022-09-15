// //Give atleast 10 functions from a scientific calculator
//Selectors
let figures = document.getElementsByClassName('numpad')
let inputContainer = document.getElementById('otherValues')
let operatorBtns = document.getElementsByClassName('operators')
let equalBtns = document.getElementsByClassName('equal')
let resultContainer = document.getElementById('result')
let deleteBtns = document.getElementsByClassName('delete')
let clearBtns = document.getElementsByClassName('clear')
let trigContainer = document.getElementById('trig')
let trigBtns = document.getElementsByClassName('trig')
let radianConverters = document.getElementsByClassName('rad')
let factorialBtns = document.getElementsByClassName('fac')
let squareBtns = document.getElementsByClassName('sqr')
let cubeBtns = document.getElementsByClassName('cube')
let squareRoots = document.getElementsByClassName('sqrt')
let piBtns = document.getElementsByClassName('pi')
let logBtns = document.getElementsByClassName('log')
let cubeRoots = document.getElementsByClassName('cbrt')
let eulerNums = document.getElementsByClassName('eulerNum')


// our input function
for(let fig of figures) {
    fig.addEventListener('click', inputFigures)
    function inputFigures() {
        inputContainer.innerHTML = inputContainer.innerHTML += fig.innerHTML
    }   
}


// Helps to input the operators into the Screen
for(let operatorBtn of operatorBtns) {
    operatorBtn.addEventListener('click', inputOperator)
    function inputOperator() {
        inputContainer.innerHTML += operatorBtn.innerHTML
    }
}

//  Helps to evaluate our input
for (let equalBtn of equalBtns) {
    equalBtn.addEventListener('click', evaluate)
    function evaluate() {
    resultContainer.innerHTML = eval(inputContainer.innerHTML)
}
}

// Delete Function
for(let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener('click', backspace) 
    function backspace() {
        inputContainer.innerHTML = inputContainer.innerHTML.substring(0, inputContainer.innerHTML.length-1)
    }
}

// Clear Function
for(let clearBtn of clearBtns) {
    clearBtn.addEventListener('click', clearScreen)
    function clearScreen() {
        // trigContainer.innerHTML = ""
        inputContainer.innerHTML = ""
        resultContainer.innerHTML = ""
    }
}


// Trig functions
for (let trigBtn of trigBtns) {
    trigBtn.addEventListener('click', findTrigRatio)
    function findTrigRatio() {
        if (trigBtn.innerHTML === 'sin') {
            resultContainer.innerText = Math.sin(inputContainer.innerHTML)
            trigContainer.innerHTML = 'sin'
        }

        if (trigBtn.innerHTML === 'cos') {
            resultContainer.innerText = Math.cos(inputContainer.innerHTML)
            trigContainer.innerHTML = 'cos'
        }

        if (trigBtn.innerHTML === 'tan') {
            resultContainer.innerText = Math.tan(inputContainer.innerHTML)
            trigContainer.innerHTML = 'tan'
        }
    }
}


// Radian Converter
for (let radianConverter of radianConverters) {
    radianConverter.addEventListener('click', convertValues)
    function convertValues() {
    if(trigContainer.innerHTML === 'sin')
        if(radianConverter.innerHTML === 'Rad'){
    resultContainer.innerHTML = Math.sin(inputContainer.innerHTML * Math.PI/180)  //Radian = [PI/180] * degress
    radianConverter.innerHTML = 'Deg'
}
    else if(radianConverter.innerHTML === 'Deg') {
        radianConverter.innerHTML = 'Rad'
        resultContainer.innerHTML = Math.sin(inputContainer.innerHTML)
    }

//////////////////Cos////////////////
    if(trigContainer.innerHTML === 'cos')
        if(radianConverter.innerHTML === 'Rad'){
    resultContainer.innerHTML = Math.cos(inputContainer.innerHTML * Math.PI/180)
    radianConverter.innerHTML = 'Deg'
}
    else if(radianConverter.innerHTML === 'Deg') {
        radianConverter.innerHTML = 'Rad'
        resultContainer.innerHTML = Math.cos(inputContainer.innerHTML)
    }

//////////////////////Tan/////////////////
    if(trigContainer.innerHTML === 'tan')
        if(radianConverter.innerHTML === 'Rad'){
    resultContainer.innerHTML = Math.tan(inputContainer.innerHTML * Math.PI/180)
    radianConverter.innerHTML = 'Deg'
}
    else if(radianConverter.innerHTML === 'Deg') {
        radianConverter.innerHTML = 'Rad'
        resultContainer.innerHTML = Math.tan(inputContainer.innerHTML)
    }

}
}

// Factorial Function
for (let factorialBtn of factorialBtns) {
    factorialBtn.addEventListener('click', findfactorial)
    function findfactorial() {
        let input = inputContainer.innerHTML
        let multiplier = 1
        for(let i = input; i > 1; i--) {
            multiplier *= i  // multiplier = multiplier * i
        }
        resultContainer.innerHTML = multiplier
        inputContainer.innerHTML += '!'
    }
}



// Square Function
for (let squareBtn of squareBtns) {
    squareBtn.addEventListener('click', findSquare)
    function findSquare() {
        resultContainer.innerHTML = Math.pow(inputContainer.innerHTML, 2)
        inputContainer.innerHTML += '^2'
    }
}

// Cube Function
for (let cubeBtn of cubeBtns) {
    cubeBtn.addEventListener('click' , findcube)
    function findcube() {
        resultContainer.innerHTML = Math.pow(inputContainer.innerHTML, 3)
        inputContainer.innerHTML += '^3'
    }
}

//Square Root Function
for (let squareRoot of squareRoots) {
    squareRoot.addEventListener('click', findSquareroot)
    function findSquareroot() {
        resultContainer.innerHTML = Math.sqrt(inputContainer.innerHTML)
    }
}

//Cube Root Function
for (let cubeRoot of cubeRoots) {
    cubeRoot.addEventListener('click', findcubeRoot)
    function findcubeRoot() {
        resultContainer.innerHTML = Math.cbrt(inputContainer.innerHTML)
    }
}


// log Function
for (let logBtn of logBtns) {
    logBtn.addEventListener('click', findlog)
    function findlog() {
        resultContainer.innerHTML = Math.log10(inputContainer.innerHTML)
        inputContainer.innerText = 'log' + inputContainer.innerHTML
    }
}

// Euler's number
for (let eulerNum of eulerNums) {
    eulerNum.addEventListener('click', findeuler)
    function findeuler() {
        resultContainer.innerHTML = Math.E(inputContainer.innerHTML)
    }
}















































































































