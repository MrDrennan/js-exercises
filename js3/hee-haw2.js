const FIRST_WORD = "Hee";
const SECOND_WORD = "Haw";

document.getElementById('btn-print').addEventListener('click', heeHaw);

function heeHaw() {
    let qty = document.getElementById('hee-haw-qty').value;
    let outputBox = document.getElementById('output');

    function processHeeHaw(currNum, qty) {

        if (currNum <= qty) {
            let output = currNum;

            if (currNum % 5 === 0) {
                output = SECOND_WORD + "!";

                if (currNum % 3 === 0) {
                    output = FIRST_WORD + " " + output;
                }
            }
            else if (currNum % 3 === 0) {
                output = FIRST_WORD + "!";
            }

            printText(output, outputBox);
            processHeeHaw(currNum + 1, qty);
        }
    }
    processHeeHaw(1, qty);
}

function printText(output, outputBox) {
    let newPElement = document.createElement('p');
    let text = document.createTextNode(output);
    newPElement.appendChild(text);
    outputBox.appendChild(newPElement);
}