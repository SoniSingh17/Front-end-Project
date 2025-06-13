const lengthInput = document.getElementById("length");
const includeUpper = document.getElementById("uppercase");
const includeLower = document.getElementById("lowercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

function generatePassword() {
    let length = parseInt(lengthInput.value);
    let chars = "";

    if (includeLower.checked) chars += lower;
    if (includeUpper.checked) chars += upper;
    if (includeNumbers.checked) chars += numbers;
    if (includeSymbols.checked) chars += symbols;

    if (chars === "") {
        output.value = "Please select at least one option.";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    output.value = password;
}

function copyToClipboard() {
    output.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);
