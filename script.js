'use strict'
const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height= document.querySelector('.height').value;
    const weight= document.querySelector('.weight').value;
    const result= document.querySelector('.result');
    //conditions
    if (height===''){
        result.innerHTML='Please enter a valid height';
    }
    else if(weight===''){
        result.innerHTML='Please enter a valid weight';
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML=`Under weight ${bmi}`
        }else if(bmi>24.9){
            result.innerHTML=`Over weight ${bmi}`
        }
        else{
            result.innerHTML=`Healthy weight ${bmi}`
        }
    }
})