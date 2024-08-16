document.addEventListener('DOMContentLoaded', () => {
    // We find the greatest and smallest 5-digits numbers  
    const greatestBtn = document.getElementById('greatest');
    const smallestBtn = document.getElementById('smallest');
    const resultDiv = document.getElementById('result');

    greatestBtn.addEventListener('click', () => {
        resultDiv.innerHTML = `This is the 5-digit Largest Number: <b>${largestFiveDigit()}</b>`;
    });

    smallestBtn.addEventListener('click', () => {
        resultDiv.innerHTML = `This is the 5-digit Smallest Number: <b>${smallestFiveDigit()}</b>`;
    });

    function largestFiveDigit() {
        return 99999;
    }

    function smallestFiveDigit() {
        return 10000;
    }

    // Generalized event handler
    function handleNumberInput(input, resultElement, operation) {
        const inputValue = input.value.trim();

        if (inputValue === '') {
            resultElement.innerHTML = 'Please enter a number.';
            return;
        }

        if (operation === 'expand') {
            if (inputValue < 0 || inputValue > 99999) {
                resultElement.innerHTML = 'Please enter a valid number between 0 and 99999.';
                return;
            }
            resultElement.innerHTML = `<b>Expanded form</b>: ${expandNumber(inputValue)}`;
            createPlaceValueChart(inputValue);
        } else if (operation === 'standard') {
            const regex = /^[0-9+\s]+$/;
            if (regex.test(inputValue)) {
                resultElement.innerHTML = `<b>Standard form</b>: ${standardNumber(inputValue)}`;
            } else {
                resultElement.innerHTML = 'Invalid input. Please enter numbers and "+" signs only.';
            }
        }
    }

    // Expand the given number
    const expandInput = document.getElementById("expandInput");
    const expandBtn = document.getElementById("expandBtn");
    const expandResult = document.getElementById("expandResult");
    const placeValueChart = document.getElementById("placeValueChart");

    expandBtn.addEventListener("click", () => {
        handleNumberInput(expandInput, expandResult, 'expand');
    });

    function expandNumber(num) {
        const numStr = num.toString();
        return numStr
            .split('')
            .map((digit, index) => digit + "0".repeat(numStr.length - index - 1))
            .filter(part => part[0] !== '0')
            .join(' + ');
    }

    function createPlaceValueChart(num) {
        const numStr = num.toString();
        const placeValues = ['Units', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands'].slice(0, numStr.length).reverse();
        const chartHtml = `
            <h3>Place Value Chart</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>${placeValues.map(place => `<th>${place}</th>`).join('')}</tr>
                </thead>
                <tbody>
                    <tr>${numStr.split('').map(digit => `<td>${digit}</td>`).join('')}</tr>
                </tbody>
            </table>`;
        placeValueChart.innerHTML = chartHtml;
    }

    // standard Form of Number 
    const standardInput = document.getElementById("standardInput");
    const standardBtn = document.getElementById("standardBtn");
    const standardResult = document.getElementById("standardResult");

    standardBtn.addEventListener("click", () => {
        handleNumberInput(standardInput, standardResult, 'standard');
    });

    function standardNumber(num) {
        return num.split('+').reduce((acc, val) => acc + Number(val.trim()), 0);
    }
});
