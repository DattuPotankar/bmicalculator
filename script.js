
const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculatorBMI(){
    const heightValue = document.getElementById("height").value / 100

    const weightValue = document.getElementById("weight").value
    const bmiValue = (weightValue)/(heightValue * heightValue);
    
    bmiInputEl.value= bmiValue;

    if(bmiValue < 18.5){
        weightConditionEl.innerText = "Under weight"
    }else if ( bmiValue > 18.5 && bmiValue < 24.9){
        weightConditionEl.innerText = "Normal"
    }  else if ( bmiValue > 25 && bmiValue < 29.9){
        weightConditionEl.innerText = "Over Weight"
    } else if ( bmiValue > 30 && bmiValue < 34.9){
        weightConditionEl.innerText = "Obesity( Class 1)"
    }  else if ( bmiValue > 35 && bmiValue < 39.9){
        weightConditionEl.innerText = "Obesity( Class 2)"
    }  else if ( bmiValue > 40 ){
        weightConditionEl.innerText = "Extreme Obesity"
    } 
}

btnEl.addEventListener("click", calculatorBMI)