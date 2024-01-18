window.onload = function() {
    let previous = "";
    
    let text = document.getElementById("text");

    document.getElementById("^").addEventListener("click", function() {
        text.value += "^";
    });
    document.getElementById("%").addEventListener("click", function() {
        text.value += "%";
    });
    document.getElementById("prev").addEventListener("click", function() {
        text.value = previous;
    });
    document.getElementById("C").addEventListener("click", function() {
        text.value = "";
    });

    document.getElementById("7").addEventListener("click", function() {
        text.value += "7";
    });
    document.getElementById("8").addEventListener("click", function() {
        text.value += "8";
    });
    document.getElementById("9").addEventListener("click", function() {
        text.value += "9";
    });
    document.getElementById("/").addEventListener("click", function() {
        text.value += "/";
    });

    document.getElementById("4").addEventListener("click", function() {
        text.value += "4";
    });
    document.getElementById("5").addEventListener("click", function() {
        text.value += "5";
    });
    document.getElementById("6").addEventListener("click", function() {
        text.value += "6";
    });
    document.getElementById("*").addEventListener("click", function() {
        text.value += "*";
    });

    document.getElementById("1").addEventListener("click", function() {
        text.value += "1";
    });
    document.getElementById("2").addEventListener("click", function() {
        text.value += "2";
    });
    document.getElementById("3").addEventListener("click", function() {
        text.value += "3";
    });
    document.getElementById("-").addEventListener("click", function() {
        text.value += "-";
    });

    document.getElementById("0").addEventListener("click", function() {
        text.value += "0";
    });
    document.getElementById(".").addEventListener("click", function() {
        text.value += ".";
    });
    document.getElementById("=").addEventListener("click", evaluate);
    document.getElementById("+").addEventListener("click", function() {
        text.value += "+";
    });

    document.getElementById("delete").addEventListener("click", function() {
        text.value = text.value.substring(0, text.value.length - 1);
    })

    function evaluate() {
        let  finalValue = 0;
        let currentValue = "";
        let currentOperator = "+";

        if (text.value == "" || !/[0-9]/.test(text.value) || !/[0-9]|./.test(text.value[0]) || !/[0-9]|./.test(text.value[text.value.length - 1]))
            return;

        previous = text.value;
        for (let i = 0; i < text.value.length; i++) {
            if (/[0-9]/.test(text.value[i]) || text.value[i] == ".") {
                currentValue += text.value[i];
            }
            else {
                switch(currentOperator) {
                    case "+":
                        finalValue += Number(currentValue);
                        break;
                    case "-":
                        finalValue -= Number(currentValue);
                        break;
                    case "*":
                        finalValue *= Number(currentValue); 
                        break;
                    case "/":
                        finalValue /= Number(currentValue); 
                        break;
                    case "^":
                        finalValue = Math.pow(finalValue, currentValue);
                        break;
                    case "%":
                        finalValue %= Number(currentValue); 
                        break;
                }
                currentOperator = text.value[i];
                currentValue = "";
            }
        }

        switch(currentOperator) {
            case "+":
                finalValue += Number(currentValue);
                break;
            case "-":
                finalValue -= Number(currentValue);
                break;
            case "*":
                finalValue *= Number(currentValue); 
                break;
            case "/":
                finalValue /= Number(currentValue); 
                break;
            case "^":
                finalValue = Math.pow(finalValue, currentValue);
                break;
            case "%":
                finalValue %= Number(currentValue); 
                break;
        }
        text.value = finalValue.toString();
    }
}