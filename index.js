
// get all necessary elements for conversion
const myInput = document.getElementById("myInput");
const cToFCheckbox = document.getElementById("cToFCheckbox");
const fToCCheckbox = document.getElementById("fToCCheckbox");
const convertButton = document.getElementById("convertButton");
const conversionResult = document.getElementById("conversionResult");


// functions for conversions
function celsiusToFahrenheit(num) {
    return (num * 9/5) + 32;
}

function fahrenheitToCelsius(num) {
    return (num - 32) * 5/9;
}

// handle conversion with user input
let value;
convertButton.onclick = function() {
    value = myInput.value;

    if (cToFCheckbox.checked) {
        conversionResult.textContent = celsiusToFahrenheit(value);
    }
    else if (fToCCheckbox.checked) {
        conversionResult.textContent = fahrenheitToCelsius(value);
    }
    else {
        window.alert("Please select a conversion method.");
    }
}