document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let operator = document.getElementById("operator").value;
    
    let result;
    let errorMessage = null;

    if (isNaN(x) || isNaN(y)) {
        errorMessage = "Error: Invalid number";
    } else {
        x = parseFloat(x);
        y = parseFloat(y);

        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                result = y !== 0 ? x / y : "Error: Division by zero";
                break;
            case '%':
                result = y !== 0 ? x % y : "Error: Division by zero";
                break;
            default:
                errorMessage = "Error: Invalid operator";
        }
    }

    let resultsTable = document.getElementById("results-table");
    let newRow = resultsTable.insertRow();

    newRow.insertCell(0).innerText = x;
    newRow.insertCell(1).innerText = operator;
    newRow.insertCell(2).innerText = y;
    newRow.insertCell(3).innerText = errorMessage ? errorMessage : result;

    if (!errorMessage && typeof result === 'number') {
        results.push(result);
    }

    if (results.length > 0) {
        let min = Math.min(...results);
        let max = Math.max(...results);
        let total = results.reduce((a, b) => a + b, 0);
        let avg = total / results.length;

        let summaryDiv = document.getElementById("summary");
        summaryDiv.innerHTML = `
            <table>
                <tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>
                <tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>
            </table>
        `;
    }
});

let results = [];
