let result = document.getElementById("result");
function display(input) {
    result.value += input;
    
}

function calculate() {
    try {
            let expression = result.value.replace(/x/g, '*').replace(/(\d|\))\(/g, '$1*(').replace(/\)(\d|\()/g, ')*$1');
            result.value = eval(expression);

    } catch (error) {
        result.value = "Error";
        
    }
    
}

function clear1() {
    result.value = "";
    
}

function delete1() {
    result.value = result.value.slice(0, -1);
    
}