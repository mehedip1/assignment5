document.getElementById('btn-triangle').addEventListener('click',function(){
   
    const numberOne = document.getElementById('btn1');
    const newNumber = numberOne.value;
    const numberTwo = document.getElementById('btn2');
    const currentNumber = numberTwo.value;
    const newTotalNumber =  0.5 * newNumber * currentNumber;
    const newNumberField = document.getElementById('triangle');
    const total = newNumberField.innerText;
    newNumberField.innerText = newTotalNumber;
    // console.log(newTotalNumber);


})
document.getElementById('btn-ractangle').addEventListener('click',function(){
   
    const numberOne = document.getElementById('btn1');
    const newNumber = numberOne.value;
    const numberTwo = document.getElementById('btn2');
    const currentNumber = numberTwo.value;
    const newTotalNumber =  newNumber * currentNumber;
    const newNumberField = document.getElementById('rectangle');
    const total = newNumberField.innerText;
    newNumberField.innerText = newTotalNumber;

})
document.getElementById('btn-paralleogram').addEventListener('click',function(){
    const numberOne = document.getElementById('btn1');
    const newNumber = numberOne.value;
    const numberTwo = document.getElementById('btn2');
    const currentNumber = numberTwo.value;
    const newTotalNumber =  newNumber * currentNumber;
    const newNumberField = document.getElementById('parallelogram');
    const total = newNumberField.innerText;
    newNumberField.innerText = newTotalNumber;

})