console.log('script detected');

let operatorFlag = false;
let operation;
let inputBox = document.getElementById('inputBox');
let outputBox = document.getElementById('outputBox');

const getResult = (input_1, input_2, operation) => {
    if(operation == "+"){
        return parseInt(input_1)+parseInt(input_2);
    }
    else if(operation == "-"){
        return parseInt(input_1)-parseInt(input_2);
    }
    else if(operation == "×"){
        return parseInt(input_1)*parseInt(input_2);
    }
    else if(operation == "/"){
        return parseInt(input_1)/parseInt(input_2);
    }
}

const onInputClick = (e) => {
    let first_val, second_val, res_val;
    if(e.target.id == "c"){
        inputBox.value = inputBox.value.substring(0, inputBox.value.length-1);
    }
    else if(e.target.id == "del"){
        inputBox.value = "";
        outputBox.value = "";
        operatorFlag = false;
    }
    else if(e.target.id == "eql"){
        if(document.getElementById('outputBox').value == ""){
            if(operatorFlag == true){
                let arr = inputBox.value.split(operation);
                first_val = arr[0];
                second_val = arr[1];
                res_val = getResult(first_val, second_val, operation);
                getResult(first_val, second_val, operation);
                console.log(getResult(first_val, second_val, operation));
                outputBox.value = getResult(first_val, second_val, operation);
                inputBox.value = "";
                operatorFlag = false;
            }
            else{
                operation = e.target.value;
                operatorFlag = true;
            }
        }
        else{

        }
    }
    else if(e.target.id == "add" || e.target.id == "sub" || e.target.id == "mul"  || e.target.id == "div" ){
        if(document.getElementById('outputBox').value == ""){
            if(operatorFlag == true){
                let arr = inputBox.value.split(operation);
                first_val = arr[0];
                second_val = arr[1];
                res_val = getResult(first_val, second_val, operation);
                getResult(first_val, second_val, operation);
                console.log(getResult(first_val, second_val, operation));
                outputBox.value = getResult(first_val, second_val, operation);
                inputBox.value = "";
                operatorFlag = false;
            }
            else{
                operation = e.target.value;
                operatorFlag = true;
            }
        }
        else{
            operation = inputBox.value[0];
            first_val = outputBox.value;
            second_val = inputBox.value.substring(1, inputBox.value.length);
            inputBox.value = "";
            console.log('result: '+getResult(first_val, second_val, operation));
            outputBox.value = getResult(first_val, second_val, operation);
            console.log('control is here')
        }
        inputBox.value = inputBox.value + e.target.value;
    }
    else{
        inputBox.value = inputBox.value + e.target.id;
    }
}

const updateValue = (e) => {
    console.log(e.target.value[e.target.value.length-1]);
}

document.getElementById('inputBox').addEventListener('input', updateValue);

//Numbers
document.getElementById('0').addEventListener('click', onInputClick);
document.getElementById('1').addEventListener('click', onInputClick);
document.getElementById('2').addEventListener('click', onInputClick);
document.getElementById('3').addEventListener('click', onInputClick);
document.getElementById('4').addEventListener('click', onInputClick);
document.getElementById('5').addEventListener('click', onInputClick);
document.getElementById('6').addEventListener('click', onInputClick);
document.getElementById('7').addEventListener('click', onInputClick);
document.getElementById('8').addEventListener('click', onInputClick);
document.getElementById('9').addEventListener('click', onInputClick);

//Operators
document.getElementById('add').addEventListener('click', onInputClick);
document.getElementById('sub').addEventListener('click', onInputClick);
document.getElementById('mul').addEventListener('click', onInputClick);
document.getElementById('div').addEventListener('click', onInputClick);

//Others
document.getElementById('del').addEventListener('click', onInputClick);
document.getElementById('c').addEventListener('click', onInputClick);
document.getElementById('eql').addEventListener('click', onInputClick);
document.getElementById('exp').addEventListener('click', onInputClick);
document.getElementById('pi').addEventListener('click', onInputClick);
