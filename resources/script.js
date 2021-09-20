console.log('script detected');

let operatorFlag = false;
let operation;
let inputBox = document.getElementById('inputBox');
let outputBox = document.getElementById('outputBox');

const getResult = (input_1, input_2, operation) => {
    if(operation == "+")
    {
        return parseInt(input_1)+parseInt(input_2);
    }
    else if(operation == "-")
    {
        return parseInt(input_1)-parseInt(input_2);
    }
    else if(operation == "x")
    {
        return parseInt(input_1)*parseInt(input_2);
    }
    else if(operation == "/")
    {
        return parseInt(input_1)/parseInt(input_2);
    }
}

const onInputClick = (e) => {
    let first_val, second_val, res_val;
    if(e.target.id == "add" || e.target.id == "sub" || e.target.id == "mul"  || e.target.id == "div" )
    {
        if(document.getElementById('outputBox').value == "")
        {
            if(operatorFlag == true)
            {
                inputBox.value = "";
                operatorFlag = false;
                // let arr = inputBox.value.split(operation);
                // first_val = arr[0];
                // second_val = arr[1];

                // res_val = getResult(first_val, second_val, operation);

                // console.log(res_val);
                // document.getElementById('outputBox').value = res_val;
                // inputBox.value = e.target.id;
                // operatorFlag = false;
            }
            else
            {
                // inputBox.value = inputBox.value + e.target.value;
                operation = e.target.value;
                operatorFlag = true;
            }
        }
        else
        {
            
        }
        console.log(e.target.value);
        inputBox.value = inputBox.value + e.target.value;
    }
    else
    {
        //continue
        inputBox.value = inputBox.value + e.target.id;
    }
}

// const onInputChange = (e) => {
//     console.log('ok')
// }


const updateValue = (e) => {
    console.log(e.target.value[e.target.value.length-1]);
}

document.getElementById('inputBox').addEventListener('input', updateValue);

//Numbers
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