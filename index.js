
// get all necessary elements for conversion
const myInput = document.getElementById("myInput");
const cToFCheckbox = document.getElementById("cToFCheckbox");
const fToCCheckbox = document.getElementById("fToCCheckbox");
const conversionResult = document.getElementById("conversionResult");
let value;

function convert() {
    if (cToFCheckbox.checked) {
        value = Number(myInput.value);
        value = (value * 9/5) + 32;
        conversionResult.textContent = value + "ºF";
    }
    else if (fToCCheckbox.checked) {
        value = Number(myInput.value);
        value = (value - 32) * 5/9;
        conversionResult.textContent = value + "ºC";
    }
    else {
        conversionResult.textContent = "Please select a unit."
    }
}
