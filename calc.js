const display = document.querySelector(".display")

function number (num){
    display.value += num
}

function getResult(){
    try {
        display.value = eval(display.value.replace(/x/g, "*"));
    } catch {
        display.value = "Error";
    }
}
function clearResult(){
    display.value = "";
}

function removeChar(){
    display.value = display.value.slice(0, -1);
}