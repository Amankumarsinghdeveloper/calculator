let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = '';

for(item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(`Button text is ${buttonText}`)

        if(buttonText=='X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue
        }

        else if(buttonText=='÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue
        }

        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue
        }

        else if (buttonText == 'CE'){
            screenValue = screen.value.substr(0, screen.value.length  - 1);
            screen.value = screenValue
        }

        else if (buttonText == 'e'){
            screenValue += "2.72";
            screen.value = screenValue;
        }

        else if (buttonText == '√'){
            total = eval(screenValue)
            screenValue = Math.sqrt(total, 2);
            screen.value = screenValue;
        }

        else if (buttonText == "=") {
            screen.value = eval(screenValue);
            screenValue = "";
        }

        else if (buttonText == 'sin'){
            total = eval(screenValue)
            screenValue = Math.sin(total);
            screen.value = screenValue;
        }

        else if (buttonText == 'cos'){
            total = eval(screenValue)
            screenValue = Math.cos(total);
            screen.value = screenValue;
        }

        else if (buttonText == 'tan'){
            total = eval(screenValue)
            screenValue = Math.tan(total);
            screen.value = screenValue;
        }

        else if (buttonText =='log') {
            total = eval(screenValue)
            screenValue = Math.log(total);
            screen.value = screenValue;
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue
        }
    })
}