window.addEventListener('load', function(){

    const display = document.getElementById ('display');
    const operationButtons = document.getElementById ('operation-panel');
    const panelDigitButtons = document.getElementById ('digit-panel');

    let number = 0;
    let buffer = 0;
   
    panelDigitButtons.addEventListener('click', function(e){
        // console.log('Панель цифр');
        if (IsButton(e) === false) return;
        if (e.target.dataset.button === 'clear'){
            DisplayClear();
            ResetAll();
            return
        }

        if (e.target.dataset.button === 'backspace');
        number = Concatenation(number, e.target.dataset.button);

        DisplayShow(number);

    });

    operationButtons.addEventListener('click', function(e){
        // console.log('Панель операций');
        if (IsButton(e) === false) return;

    });

    function IsButton(e){
        return e.target.hasAttribute('data-button');

    }

    function DisplayShow(number){
        display.innerText = number;
    }

    function Concatenation(number, currentNumber){
        if (number.toString().length > 11 ) return number;
        return Number(number.toString() + currentNumber.toString());
    }

    function DisplayClear(){
        display.innerText = 0;
    }

    function ResetAll(){
        number = 0;
    }

    function Backspace(number){

    }
})
