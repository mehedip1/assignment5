
document.getElementById('btn-rhombus').addEventListener('click',function(){
    const previousRhombus = document.getElementById('btn1');
    const newRhombus = previousRhombus.value;
    const numberTwo = document.getElementById('btn2');
    const currentNumber = numberTwo.value;
    const newTotalNumber =  0.5 * newRhombus * currentNumber;
    const newNumberField = document.getElementById('rhombus');
    const total = newNumberField.innerText;
    newNumberField.innerText = newTotalNumber;
    

    
})
document.getElementById('btn-pentagon').addEventListener('click',function(){
    const previousPentagon = document.getElementById('btn1');
    const newPentagon = previousPentagon.value;
    const numberTwo = document.getElementById('btn2');
    const currentNumber = numberTwo.value;
    const newTotalNumber = 0.5 * newPentagon * currentNumber;
    const newNumberField = document.getElementById('pentagon');
    const total = newNumberField.innerText;
    newNumberField.innerText = newTotalNumber;
    
    console.log(newTotalNumber);

})
document.getElementById('btn-ellipse').addEventListener('click',function(){
    const previousEllipse = document.getElementById('btn1');
    const newEllipse = previousEllipse.value;
    const numberTwo = document.getElementById('btn2');
    const currentNumber = numberTwo.value;
    const newTotalNumber = 3.14 * newEllipse * currentNumber;
    const newNumberField = document.getElementById('ellipse');
    const total = newNumberField.innerText;
    newNumberField.innerText = newTotalNumber;
    
    

})

document.getElementById('blog').addEventListener('click',function(){ if(blog = true){
    window.location.href = 'blog.html';
}
else{
    alert('invalid')
}


})


