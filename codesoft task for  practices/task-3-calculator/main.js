 const display = document.getElementById("display");

    function appendValue(value) {
        if (display.innerText === "0") {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }

    function clearDisplay() {
        display.innerText = "0";
    }

    function deleteLast() {
        display.innerText = display.innerText.slice(0, -1);
        if (display.innerText === "") {
            display.innerText = "0";
        }
    }

    function calculate() {
        try {
            let expression = display.innerText.replace('%', '/100');
            display.innerText = eval(expression);
        } catch {
            display.innerText = "Error";
        }
    }