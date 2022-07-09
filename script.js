console.log("Hello World");

const inputText = document.getElementById("text-area");
function display(num) {
    inputText.value += num;
}

function clearText() {
    inputText.value = "";
}

function delText() {
    inputText.value = inputText.value.slice(0, -1);
}

function Calculate() {
    const calcText = eval(inputText.value);
    inputText.value = calcText;
}