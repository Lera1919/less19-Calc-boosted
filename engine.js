window.addEventListener('load', function(){

    const display = document.getElementById ('display');
    const operationButtons = document.getElementById ('operation-panel');
    const panelDigitButtons = document.getElementById ('digit-panel');

    let number = 0;
    let operation = '';
    let buffer = 0;
    
    let flag = '';
   
    panelDigitButtons.addEventListener('click', function(e){
 // console.log('Панель цифр');
        if (IsButton(e) === false) return;
        if (flag === 'operate'){
            number = 0;
        }
       
        
        if (e.target.dataset.button === 'clear') {
            DisplayClear();
            ResetAll();
            return
        }

        if (e.target.dataset.button === 'backspace') {
            number = Backspace(number);
            DisplayShow(number);
            return;
        }
         
        
        // if (buffer == '') {
        //     buffer = Calculate(number+operation);
        //     DisplayShow(number);
        //   console.log()
        // }

        // if (buffer == 'negative') {
        //     number = Calculate(number+operation-buffer);
        //     DisplayShow(number);
        //   console.log()
        // }

        
        // if (operation == '=') {
        //     number =  DisplayShow(number);           
        //   console.log()
        // }

      
        number = Concatenation(number, e.target.dataset.button);
        DisplayShow(number);
        // console.log(flag);
        flag ='digit';
    });

    operationButtons.addEventListener('click', function(e){
        // console.log('Панель операций');
        if (IsButton(e) === false) return;
        flag = 'operate';
        

        if (e.target.dataset.button === '=') {
           number = operation !== '' ? Calculate(buffer+operation+number) : number;
          
           DisplayShow(number);
           ResetAll();
           return;
        }


       

        if (operation !== '') {
            number = Calculate(buffer+operation+number);
            DisplayShow(number);
          
        }

        

        operation = e.target.dataset.button;
        buffer = number;
       

      
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
        operation = '';
        buffer = 0;
    }

    function Backspace(number){
        return Number(number.toString().slice(0, -1));

    }

    function Calculate(executionStack){
        return eval(executionStack)
    }
})
