document.addEventListener('DOMContentLoaded', () => {
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
        return 99999; 
    }

    function smallestFiveDigit() {
        return 10000;
    }
});
