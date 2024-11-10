document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById('calci-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    function evaluateResult() {
        console.log('currentValue:',currentValue)
        const convertedValue = currentValue
        .replace("×","*")
        .replace("÷","/")
        .replace('%','*0.01');
        
        console.log('convertetdValue:',currentValue)
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;

    }

    for(let i = 0; i < buttons.length; i++) {
       const button = buttons [i];
       button.addEventListener('click', function() {
        const value = button.innerText;


        if (value == "AC"){
            currentValue ="";
            display.value = currentValue;

        } else if(value == "=") {
            evaluateResult();
        } else {
          currentValue += value; 
        display.value = currentValue;

        }


        


       })
       
    }


   
});