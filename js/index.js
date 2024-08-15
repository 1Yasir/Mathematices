document.addEventListener('DOMContentLoaded', () => {
    // We find the greatest and smallest 5-digits numbers  
    const greatestBtn = document.getElementById('greatest');
    const smallestBtn = document.getElementById('smallest');
    const resultDiv = document.getElementById('result');

    greatestBtn.addEventListener('click', () => {
        resultDiv.innerHTML = `This is the 5-digit Largest Number: ${largestFiveDigit()}`;
    });

    smallestBtn.addEventListener('click', () => {
        resultDiv.innerHTML = `This is the 5-digit Smallest Number: ${smallestFiveDigit()}`;
    });

    function largestFiveDigit() {
        return `<b>${99999}</b>`;
    }

    function smallestFiveDigit() {
        return `<b>${10000}</b>`;
    }

    // Expand the given number
    const expandInput = document.getElementById("expandInput");
    const expandBtn = document.getElementById("expandBtn");
    const expandResult = document.getElementById("expandResult");

    expandBtn.addEventListener("click", () => {
        const inputValue = Number(expandInput.value.trim());
        if (inputValue) {
            expandResult.innerHTML = `<b>Expanded form</b>: ${expandNumber(inputValue)}`;
        } else {
            expandResult.innerHTML = `Please enter a valid number.`;
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
});
