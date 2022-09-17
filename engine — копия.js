window.addEventListener ('load' , function () {
    const display = document.getElementById ('display');
    const operationButtons = document.getElementById ('operation-panel');
    const panelDigitButtons = document.getElementById ('digit-panel');

    // console.log (display, operationButtons, panelDigitButtons)

    let operation = '';
    let argument = 0;

    let buffer1;

    panelDigitButtons.addEventListener ('click', function (event) {

        if (event.target.hasAttribute('data-button')) {
             if (event.target.dataset.button === "clear") {
            display.innerText = 0;  
            argument = 0;

        } else if (event.target.dataset.button === "backspace") {
            argument = Backspace(parseInt(argument));
        } else {
            argument += event.target.dataset.button;
            
        }

        display.innerText = parseInt(argument);

    //    console.log(parseInt(argument));


        }
       
      
    })
    
    function Backspace(argument) {

        // console.log(argument)
        const text = argument.toString();
       console.log(text.length)
        if (text.length < 2) {
            return '0';
        }
        return text.slice(0, -1);
    }

})