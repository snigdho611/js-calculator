console.log('script detected');

// let inputVal = "";
let operatorFlag = false;
let inputBox = document.getElementById('inputBox');

const onInputClick = (e) => {
    // console.log(e.target.id);
    if(e.target.id == "+" || e.target.id == "-" || e.target.id == "x"  || e.target.id == "/" )
    {
        // document.getElementById('input').value = document.getElementById('input').value+e.id;
        if(operatorFlag == true)
        {
            // inputVal = "";
            inputBox.value = "";
            operatorFlag = false;
        }
        else
        {
            operatorFlag = true;
        }
    }
    else
    {
        //continue
    }
        inputBox.value = inputBox.value + e.target.id;
}

// const onInputChange = (e) => {
//     console.log('ok')
// }


const updateValue = (e) => {
    console.log(e.target.value);
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
document.getElementById('+').addEventListener('click', onInputClick);
document.getElementById('-').addEventListener('click', onInputClick);
document.getElementById('x').addEventListener('click', onInputClick);
document.getElementById('/').addEventListener('click', onInputClick);