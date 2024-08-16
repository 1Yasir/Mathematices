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

    // Expand the given number
    const expandInput = document.getElementById("expandInput");
    const expandBtn = document.getElementById("expandBtn");
    const expandResult = document.getElementById("expandResult");
    const placeValueChart = document.getElementById("placeValueChart");

    expandBtn.addEventListener("click", () => {
        const inputValue = expandInput.value.trim();

        if (inputValue === '') {
            expandResult.innerHTML = 'Please enter a number to expand.';
            placeValueChart.innerHTML = ''; // Clear previous chart
        } else {
            const numValue = inputValue;
            if (numValue < 0 || numValue > 99999) {
                expandResult.innerHTML = 'Please enter a valid number between 0 and 99999.';
                placeValueChart.innerHTML = ''; // Clear previous chart
            } else {
                expandResult.innerHTML = `<b>Expanded form</b>: ${expandNumber(numValue)}`;
                createPlaceValueChart(numValue);
            }
        }
    });

    function expandNumber(num) {
        const numStr = num.toString();
        const length = numStr.length;
        let expandedForm = "";

        for (let i = 0; i < length; i++) {
            const digit = numStr[i];
            const zeros = length - i - 1;
            expandedForm += digit + "0".repeat(zeros);

            if (digit !== "0") {
                if (i < length - 1) {
                    expandedForm += " + ";
                }
            }
        }

        return expandedForm;
    }

    function createPlaceValueChart(num) {
        const numStr = num.toString();
        const length = numStr.length;
        const placeValues = ['Units', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands'].slice(0, length).reverse();
        let chartHtml = '<h3>Place Value Chart</h3>';
        chartHtml += '<table class="table table-bordered">';
        chartHtml += '<thead><tr>';

        placeValues.forEach(place => {
            chartHtml += `<th>${place}</th>`;
        });

        chartHtml += '</tr></thead><tbody><tr>';

        numStr.split('').forEach((digit) => {
            chartHtml += `<td>${digit}</td>`;
        });

        chartHtml += '</tr></tbody></table>';
        placeValueChart.innerHTML = chartHtml;
    }
});
